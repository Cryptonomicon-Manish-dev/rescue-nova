import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAIChat } from "@/hooks/useAIChat";
import { AI_CONFIG } from "@/config/ai-config";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// System prompt remains the same...
const systemPrompt = `You are Nova, an advanced AI emergency response assistant powered by state-of-the-art language models. Your mission is to provide intelligent, rapid, and life-saving assistance during emergencies while offering comprehensive support for the Rescue Nova platform.

[Previous system prompt content...]`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Nova, your emergency response assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { getAIResponse, isLoading: aiLoading, error: aiError } = useAIChat({
    groqApiKey: AI_CONFIG.groqApiKey,
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || aiLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const aiResponse = await getAIResponse(
        [...messages, userMessage],
        systemPrompt
      );

      setMessages(prev => [...prev, {
        role: "assistant",
        content: aiResponse
      }]);
    } catch (error) {
      console.error('Error in AI response:', error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I apologize, but I'm having trouble processing your request. Please try again or contact our support team."
      }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          className="rounded-full h-14 w-14 p-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-40"
          >
            <Card className="w-[350px] h-[500px] shadow-xl flex flex-col bg-white dark:bg-gray-900 border-0">
              {/* Header */}
              <div className="p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Bot className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">Emergency Assistant</h3>
                    <p className="text-xs opacity-90">Powered by Llama 3</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex flex-col",
                        message.role === "assistant" ? "items-start" : "items-end"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.role === "assistant" ? (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Bot className="h-4 w-4 text-blue-500" />
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <User className="h-4 w-4 text-purple-500" />
                          </motion.div>
                        )}
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {message.role === "assistant" ? "Nova" : "You"}
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                          "rounded-lg px-4 py-2 max-w-[80%] shadow-sm",
                          message.role === "assistant"
                            ? "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                            : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        )}
                      >
                        {message.content}
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Status Messages */}
                  {aiLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Bot className="h-4 w-4" />
                      </motion.div>
                      <span>Nova is typing...</span>
                    </motion.div>
                  )}
                  {aiError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded"
                    >
                      <AlertTriangle className="h-4 w-4" />
                      <span>{aiError}</span>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t bg-white dark:bg-gray-900">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500"
                    disabled={aiLoading}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSend}
                      disabled={aiLoading || !input.trim()}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <Send className={cn("h-4 w-4", aiLoading && "animate-spin")} />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;