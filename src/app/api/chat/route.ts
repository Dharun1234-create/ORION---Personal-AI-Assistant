import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    // Validate that API Key exists and is configured
    if (!apiKey || apiKey === "YOUR_KEY_HERE" || apiKey.trim() === "") {
      return NextResponse.json(
        {
          message:
            "ORION API key is not configured yet. Please add your OPENAI_API_KEY to .env.local to enable real AI completions.",
          status: "unconfigured",
        },
        { status: 200 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { message: "Invalid request payload. Expected array of messages." },
        { status: 400 }
      );
    }

    const openai = new OpenAI({ apiKey });

    // ORION System/Developer instructions
    const systemPrompt = {
      role: "system" as const,
      content:
        "ORION is a personal AI companion designed to help the user think, plan, organize, learn, research, and get things done. Personality: intelligent, calm, helpful, concise, proactive, futuristic but natural, friendly, not robotic, not overly verbose. Respond concisely and accurately to the user's questions.",
    };

    // Sanitize incoming messages
    const formattedMessages = body.messages.map((m: any) => ({
      role: m.role === "user" ? ("user" as const) : ("assistant" as const),
      content: String(m.content || ""),
    }));

    const targetModel = process.env.OPENAI_MODEL || "gpt-4o-mini";

    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: targetModel,
        messages: [systemPrompt, ...formattedMessages],
        max_tokens: 600,
        temperature: 0.7,
      });
    } catch (modelErr: any) {
      // Fallback to standard gpt-4o-mini model if model alias fails
      completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [systemPrompt, ...formattedMessages],
        max_tokens: 600,
        temperature: 0.7,
      });
    }

    const aiMessage =
      completion.choices[0]?.message?.content?.trim() ||
      "I've processed your request.";

    return NextResponse.json({ message: aiMessage });
  } catch (error: any) {
    console.error("ORION AI Chat API Error:", error?.message || error);
    return NextResponse.json(
      {
        message:
          "Sorry, I couldn't connect to my AI core right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
