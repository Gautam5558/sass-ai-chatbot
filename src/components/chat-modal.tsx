"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Loader2, SendHorizontal, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";
import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";

interface ChatModalProps {
  toggleChatModal: () => void;
}

const ChatModal = ({ toggleChatModal }: ChatModalProps) => {
  const { input, isLoading, messages, handleSubmit, handleInputChange } =
    useChat();
  const scrollRef = useRef<null | HTMLDivElement>(null);
  console.log(messages);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0 }}
      className="fixed right-8 bottom-16 z-[100] w-[95%] md:w-[500px]"
    >
      <Card className="border-2">
        <div
          onClick={toggleChatModal}
          className="bg-gray-200 flex items-center justify-center text-black  w-6 h-6 absolute top-2 right-2 rounded-[50%]"
        >
          <X className="w-4 h-4 " />
        </div>
        <CardHeader className="text-center">
          <CardTitle>Chat with Purchasing Power Parity AI</CardTitle>
          <CardDescription>How can I help you!</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-3 ">
            {messages.length === 0 && (
              <div>There are no messages to show yet</div>
            )}
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`rounded-lg inline-block p-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                    key={message.id}
                  >
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </div>
              );
            })}
            <div ref={scrollRef} />
            {isLoading && (
              <div className="flex justify-center items-center">
                <Loader2 className="animate-spin size-4" />
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter className="">
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-[100%] gap-2"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
              type="text"
              placeholder="Tell me about Purchasing Power Parity"
              className="focus:outline-none outline-none"
            />
            <Button>
              <SendHorizontal className="size-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ChatModal;
