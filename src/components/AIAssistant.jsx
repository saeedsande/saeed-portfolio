import { useState } from "react";
import axios from "axios";

export default function AIAssistant() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "assistant",
      text: "Hi! I'm Saeed's AI assistant. Ask me about his skills, projects, education, or experience.",
    },
  ]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const userInput = message;

    setMessage("");

    setLoading(true);

    try {

      const response = await axios.post(

        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,

        {
          contents: [
            {
              parts: [
                {
                  text:
                    `You are an AI assistant for Saeed Sande's portfolio website.

                    INFORMATION ABOUT SAEED:

                    - Final-year Computer Engineering student
                    - Full Stack Developer
                    - React.js Developer
                    - React Native Developer
                    - AI-focused developer
                    - Skilled in Firebase, Node.js, MongoDB, Python, Three.js, Tailwind CSS, Framer Motion
                    - Developed VETMEDS AI-powered veterinary healthcare platform
                    - Developed MeterRide ride-hailing mobile application
                    - Interested in futuristic UI/UX and scalable applications

                    Answer professionally, clearly, and briefly.

                    USER QUESTION:
                    ${userInput}`
                },
              ],
            },
          ],
        }

      );

      const aiText =
        response.data.candidates[0].content.parts[0].text;

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiText,
        },
      ]);

    } catch (error) {

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Unable to connect with AI right now.",
        },
      ]);

    }

    setLoading(false);

  };

  return (
    <>

      {/* Floating AI Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-[9999] w-20 h-20 rounded-full bg-cyan-500 shadow-[0_0_40px_rgba(0,255,255,0.5)] text-4xl hover:scale-110 duration-300"
      >

        🤖

      </button>

      {/* Chat Window */}
      {open && (

        <div className="fixed bottom-32 right-8 w-[360px] h-[520px] bg-[#0b1120] border border-cyan-400 rounded-[30px] p-5 z-[9999] backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(0,255,255,0.2)]">

          {/* Header */}
          <div className="mb-4">

            <h2 className="text-2xl font-black text-cyan-400">

              AI Assistant

            </h2>

            <p className="text-sm text-gray-400 mt-1">

              Ask anything about Saeed

            </p>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`p-4 rounded-2xl text-sm leading-7 ${
                  msg.role === "user"
                    ? "bg-cyan-500 text-black ml-10"
                    : "bg-white/10 text-white mr-10"
                }`}
              >

                {msg.text}

              </div>

            ))}

            {loading && (

              <div className="bg-white/10 text-white mr-10 p-4 rounded-2xl">

                Thinking...

              </div>

            )}

          </div>

          {/* Input */}
          <div className="mt-4 flex gap-2">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none text-white"
            />

            <button
              onClick={sendMessage}
              className="px-5 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 duration-300"
            >

              Send

            </button>

          </div>

        </div>

      )}

    </>
  );
}