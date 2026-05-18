import { createFileRoute } from "@tanstack/react-router";
import { PhoneShell, ScreenHeader } from "@/components/PhoneShell";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Loader2, ChevronDown, Check } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import Markdown from "markdown-to-jsx";
import { clsx } from "clsx";

// Initialize APIs using environment variables
const geminiAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");
const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY || "", dangerouslyAllowBrowser: true });

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [{ title: "AI Coach — FitCal AI" }] }),
  component: AIChat,
});

type Message = { role: "user" | "model"; content: string; id: string };

const MarkdownOptions = {
  overrides: {
    p: { component: 'p', props: { className: 'mb-2 last:mb-0 text-[15px] leading-relaxed' } },
    ul: { component: 'ul', props: { className: 'list-disc pl-4 mb-2 text-[15px]' } },
    ol: { component: 'ol', props: { className: 'list-decimal pl-4 mb-2 text-[15px]' } },
    li: { component: 'li', props: { className: 'mb-1 text-[15px]' } },
    strong: { component: 'strong', props: { className: 'font-semibold text-inherit' } },
    a: { component: 'a', props: { className: 'text-primary underline underline-offset-2' } },
    h1: { component: 'h1', props: { className: 'text-lg font-bold mb-2 mt-4' } },
    h2: { component: 'h2', props: { className: 'text-base font-bold mb-2 mt-3' } },
    h3: { component: 'h3', props: { className: 'text-sm font-bold mb-2 mt-2' } },
    code: { component: 'code', props: { className: 'bg-black/10 dark:bg-white/10 rounded px-1.5 py-0.5 text-xs font-mono' } },
    pre: { component: 'pre', props: { className: 'bg-black/10 dark:bg-white/10 rounded-xl p-3 overflow-x-auto text-xs font-mono mb-2 shadow-inner' } }
  }
};

function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi there! I'm your FitCal AI Coach. How can I help you reach your fitness and nutrition goals today?", id: "welcome" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modelType, setModelType] = useState<"gemini" | "groq">("gemini");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg: Message = { role: "user", content: input, id: Date.now().toString() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      let responseText = "";

      if (modelType === "gemini") {
        const model = geminiAi.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chatHistory = messages.map(m => ({
          role: m.role === "model" ? "model" : "user",
          parts: [{ text: m.content }]
        }));
        const chat = model.startChat({ history: chatHistory });
        const result = await chat.sendMessage(userMsg.content);
        responseText = result.response.text();
      } else {
        const groqHistory = messages.map(m => ({
          role: m.role === "model" ? "assistant" as const : "user" as const,
          content: m.content
        }));
        const completion = await groq.chat.completions.create({
          messages: [...groqHistory, { role: "user", content: userMsg.content }],
          model: "llama3-8b-8192",
        });
        responseText = completion.choices[0]?.message?.content || "I couldn't process that.";
      }

      setMessages(prev => [...prev, { role: "model", content: responseText, id: (Date.now() + 1).toString() }]);
    } catch (error: any) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", content: `Oops, something went wrong: ${error.message}`, id: (Date.now() + 1).toString() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PhoneShell>
      <ScreenHeader title="AI Coach" subtitle="Ask me anything!" />

      <div className="mx-5 mb-3 relative z-20 flex items-center justify-between">
         <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all hover:bg-muted"
            >
              {modelType === "gemini" ? "Gemini 1.5 Flash" : "Groq LLaMA 3"}
              <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform duration-200", isDropdownOpen && "rotate-180")} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-1.5 shadow-xl animate-in fade-in slide-in-from-top-2">
                <button
                  onClick={() => { setModelType("gemini"); setIsDropdownOpen(false); }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  Gemini 1.5 Flash {modelType === "gemini" && <Check className="h-4 w-4 text-primary" />}
                </button>
                <button
                  onClick={() => { setModelType("groq"); setIsDropdownOpen(false); }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors mt-0.5"
                >
                  Groq LLaMA 3 {modelType === "groq" && <Check className="h-4 w-4 text-primary" />}
                </button>
              </div>
            )}
         </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-28 pt-2 scrollbar-hide relative z-10">
        <div className="flex flex-col gap-5">
          {messages.map((msg) => (
            <div key={msg.id} className={clsx("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}>
              <div className={clsx(
                "group relative max-w-[85%] rounded-3xl px-4.5 py-3.5 shadow-sm transition-all hover:shadow-md",
                msg.role === "user" 
                  ? "bg-primary text-primary-foreground rounded-br-sm ml-8" 
                  : "bg-card border border-border rounded-bl-sm mr-8"
              )}>
                {msg.role === "model" && (
                  <div className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                )}
                <div className="break-words">
                  <Markdown options={MarkdownOptions}>{msg.content}</Markdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex w-full justify-start animate-in fade-in slide-in-from-bottom-2">
              <div className="relative max-w-[85%] rounded-3xl rounded-bl-sm border border-border bg-card px-5 py-4 shadow-sm mr-8">
                 <div className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-hero text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/80" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>

      <div className="absolute bottom-16 left-0 w-full px-5 pb-4 pt-4 z-20">
        {/* Glow effect behind input */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />
        
        <div className="relative flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask your AI coach..."
            className="max-h-32 min-h-[56px] w-full resize-none rounded-[28px] border border-border bg-card/95 backdrop-blur-md pl-5 pr-14 pt-4 text-[15px] shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 scrollbar-hide"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute bottom-2 right-2 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isLoading ? <Loader2 className="h-4.5 w-4.5 animate-spin" /> : <Send className="h-4.5 w-4.5 ml-0.5" />}
          </button>
        </div>
      </div>
    </PhoneShell>
  );
}

