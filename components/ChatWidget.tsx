"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content: "Hi I am Stanley's automated assistant. You can ask me about his projects, skills, certifications, education, or contact details. How can I facilitate your inquiry today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "assistant",
        content: data.reply, // Matches 'reply' from your Gemini route.ts
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "System Error. Please check your connection.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
 {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-none border border-neutral-800 bg-black backdrop-blur-sm hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300 z-[60] shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        {open ? (
          <span className="text-white text-lg sm:text-xl font-light">✕</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className="w-7 h-7 sm:w-10 sm:h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        )}
      </button>

      {/* CHAT MODAL */}
      {open && (
        <div className="fixed bottom-35 right-8 w-[90vw] md:w-[500px] bg-neutral-950 border border-neutral-800 rounded-none shadow-2xl z-50 flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-900 bg-black">
            <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/images/chatbot.png"
                alt="Stan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">
                ASSISTANT // Stan
              </span>
              <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                <span className="h-1 w-1 bg-emerald-500 rounded-full animate-pulse" />
                System Online
              </span>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="p-6 h-[450px] overflow-y-auto bg-black/20 flex flex-col gap-8">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 max-w-[85%] ${
                  msg.role === "assistant"
                    ? "self-start"
                    : "self-end flex-row-reverse"
                }`}
              >
                <div
                  className={`w-8 h-8 flex-shrink-0 border ${
                    msg.role === "assistant"
                      ? "border-neutral-800 bg-neutral-900"
                      : "border-neutral-300 bg-white"
                  } overflow-hidden`}
                >
                  <img
                    src={
                      msg.role === "assistant"
                        ? "/images/chatbot.png"
                        : "/images/userBot.png"
                    }
                    className="w-full h-full object-cover"
                    alt="avatar"
                  />
                </div>

                <div
  className={`p-3 text-xm leading-relaxed border ${
    msg.role === "assistant"
      ? "bg-neutral-900/40 border-neutral-800"
      : "text-black bg-white border-white font-medium"
  }`}
>
  {msg.role === "assistant" ? (
    <div className="space-y-3 text-neutral-300">
      {msg.content.split("\n").map((line: string, i: number) => {
        if (line.startsWith("•")) {
          const cleanLine = line.replace("• ", "");
          const [title, ...rest] = cleanLine.split(":");

          return (
            <div key={i} className="flex flex-col">
              <span className="font-semibold text-white">
                • {title}:
              </span>
              <span className="text-neutral-400">
                {rest.join(":")}
              </span>
            </div>
          );
        }

        return (
          <p key={i}>{line}</p>
        );
      })}
    </div>
  ) : (
    msg.content
  )}
</div>
              </div>
            ))}

            {loading && (
              <div className="text-emerald-500 text-[10px] font-mono animate-pulse">
                STAN_AI IS PROCESSING...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="p-4 bg-black border-t border-neutral-900">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask questions about me?..."
                className="w-full bg-neutral-900/30 border border-neutral-800 text-white pl-4 pr-12 py-3 text-xm font-mono tracking-[0.05em] outline-none focus:border-neutral-600 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="absolute right-2 p-2 text-neutral-400 hover:text-white transition-colors disabled:opacity-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}