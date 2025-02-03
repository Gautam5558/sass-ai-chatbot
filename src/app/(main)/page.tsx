"use client";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import { ChevronsDownUp, MessageCircleMore } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatModal from "@/components/chat-modal";

const HomePage = () => {
  const [isInView, setIsInView] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsInView(true);
      } else {
        setIsInView(false);
        setIsChatModalOpen(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChatModal = () => {
    setIsChatModalOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <AnimatePresence>
        {isInView && (
          <motion.div
            initial={{ scale: 0, y: 100 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0, y: 100 }}
            onClick={toggleChatModal}
            className="w-10 h-10 rounded-[50%] bg-black text-white p-1 fixed bottom-4 right-4 flex justify-center items-center"
          >
            {isChatModalOpen ? <ChevronsDownUp /> : <MessageCircleMore />}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isInView && isChatModalOpen && (
          <ChatModal toggleChatModal={toggleChatModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
