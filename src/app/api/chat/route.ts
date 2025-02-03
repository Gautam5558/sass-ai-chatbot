import { initialMessage } from "@/data/initialMessage";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { Message, streamText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_GEMENI_API_KEY || "",
});

export const runtime = "edge";

const generateId = () => {
  return Math.random().toString(36).slice(2, 15);
};

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => {
  return [
    {
      id: generateId(),
      role: "user",
      content: initialMessage.content,
    },
    ...messages.map((message) => {
      return {
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
      };
    }),
  ];
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await streamText({
    model: google("gemini-1.0-pro"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  });
  console.log("new data");
  console.log();
  return stream?.toDataStreamResponse();
}
