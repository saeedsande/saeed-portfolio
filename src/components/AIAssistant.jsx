import { useState } from "react";

const responses = {
  hello:
    "Hello! I am Saeed's AI Assistant. Ask me about skills, projects, or experience.",

  skills:
    "Saeed specializes in React.js, React Native, JavaScript, Firebase, Python, and AI-powered systems.",

  projects:
    "Main projects include VETMEDS — an AI veterinary healthcare platform, and MeterRide — a ride-hailing mobile application.",

  experience:
    "Saeed worked as a developer at Keep Active Pro AI Solutions focusing on web and mobile application development.",

  contact:
    "You can contact Saeed at saeedsande5117@gmail.com",
};

export default function AIAssistant() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello! Ask me about Saeed's skills, projects, or experience.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const key =
      input.toLowerCase();

    const botReply = responses[key] ||
      "I currently understand: hello, skills, projects, experience, contact.";

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botReply,
      },
    ]);

    setInput("");
  };

  return (
    <>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-[9999] w-16 h-16 rounded-full bg-cyan-500 neon-glow text-3xl"
      >

        🤖

      </button>

      {/* Chat Window */}
      {open && (

        <div className="fixed bottom-28 right-8 z-[9999] w-[350px] h-[500px] rounded-[30px] border border-white/10 bg-[#0b1120]/90 backdrop-blur-xl overflow-hidden shadow-2xl">

          {/* Header */}
          <div className="px-6 py-5 border-b border-white/10 bg-cyan-500/10">

            <h2 className="text-xl font-bold text-cyan-400">
              AI Assistant
            </h2>

          </div>

          {/* Messages */}
          <div className="h-[360px] overflow-y-auto p-5 space-y-4">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-6 ${
                  msg.sender === "user"
                    ? "ml-auto bg-cyan-500 text-black"
                    : "bg-white/10 text-white"
                }`}
              >

                {msg.text}

              </div>

            ))}

          </div>

          {/* Input */}
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-[#0b1120] flex gap-3">

            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              className="flex-1 rounded-full bg-white/10 border border-white/10 px-4 py-3 outline-none"
            />

            <button
              onClick={handleSend}
              className="px-5 rounded-full bg-cyan-500 text-black font-semibold"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>
  );
}