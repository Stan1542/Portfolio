"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      content:
        "Hi. I am Stanley's automated assistant. You can ask me about his projects, skills, certifications, education, or contact details. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

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

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "System error. Please try again.",
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
        className="fixed bottom-5 right-5 sm:bottom-3 sm:right-8 w-14 h-14 flex items-center justify-center border border-neutral-800 bg-black hover:bg-neutral-900 transition-all duration-300 z-[60] shadow-lg"
      >
        {open ? (
          <span className="text-white text-lg">✕</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="w-6 h-6 text-white"
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
        <div
          className="
            fixed
            bottom-20
            right-4
            left-4
            sm:left-auto
            sm:right-8
            sm:w-[420px]
            w-auto
            h-[75vh]
            sm:h-[500px]
            bg-neutral-950
            border
            border-neutral-800
            shadow-2xl
            z-50
            flex
            flex-col
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-900 bg-black">
            <div className="w-9 h-9 border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/images/chatbot.png"
                alt="Stan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest">
                ASSISTANT // STAN
              </span>
              <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                <span className="h-1 w-1 bg-emerald-500 rounded-full animate-pulse" />
                System Online
              </span>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 overflow-y-auto p-4 bg-black">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.role === "assistant"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm leading-relaxed border ${
                    msg.role === "assistant"
                      ? "bg-neutral-900 border-neutral-800 text-neutral-300"
                      : "bg-white text-black border-white font-medium"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="space-y-2">
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

                        return <p key={i}>{line}</p>;
                      })}
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-emerald-500 text-xs animate-pulse">
                STAN_AI IS PROCESSING...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA */}
          <div className="px-4 py-3 border-t border-neutral-900 bg-black">
            <div className="flex items-center border border-neutral-800">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask questions about me..."
                className="flex-1 bg-black text-white px-4 py-3 text-sm outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="px-4 text-neutral-400 hover:text-white disabled:opacity-30"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


