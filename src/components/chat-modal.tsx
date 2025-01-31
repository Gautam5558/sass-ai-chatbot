import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";

const ChatModal = () => {
  return (
    <Card className="fixed right-8 bottom-16">
      <CardHeader className="text-center">
        <CardTitle>PPP ChatBot</CardTitle>
      </CardHeader>
      <CardContent>There are no messages yet</CardContent>
      <CardFooter className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Tell me about Purchasing Power Parity"
          className="focus:outline-none outline-none"
        />
        <Button>
          <SendHorizontal className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChatModal;
