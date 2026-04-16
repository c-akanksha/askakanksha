import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./components/Header";
import { EmptyState } from "./components/EmptyState";
import ChatBubble from "./components/ChatBubble";
import TypingIndicator from "./components/TypingIndicator";
import BottomNavChips from "./components/BottomNavChips";
import ChatInput from "./components/ChatInput";

import {
  addUserMessage,
  checkBackendStatus,
  sendMessageAsync,
} from "./slices/chatSlice";

function App() {
  const { messages, backendStatus, loading } = useSelector(
    (state) => state.chat,
  );
  const dispatch = useDispatch();

  const messagesEndRef = useRef(null);
  const [, setSelectedSection] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(checkBackendStatus());
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = (question) => {
    dispatch(addUserMessage(question));
    dispatch(sendMessageAsync(question));
  };

  const handleNavigate = (section) => {
    setSelectedSection(section);

    const sectionQuestions = {
      summary: "Summarize her background",
      skills: "What are her technical skills?",
      projects: "Explain her ML projects",
      experience: "What experience does she have?",
      achievements: "Tell me about her achievements",
    };

    if (sectionQuestions[section]) {
      handleSendMessage(sectionQuestions[section]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",

        background: `
          radial-gradient(circle at 10% 20%, rgba(99,102,241,0.15), transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(134,239,172,0.15), transparent 40%),
          linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)
        `,
      }}
    >
      <Header />

      <Box sx={{ flex: 1, overflowY: "auto", pb: 2 }}>
        {messages.length === 0 ? (
          <EmptyState
            backendStatus={backendStatus}
            onSuggestionClick={handleSendMessage}
          />
        ) : (
          <Box sx={{ maxWidth: 1100, mx: "auto", py: 3 }}>
            {messages.map((m) => (
              <ChatBubble key={m.id} message={m} />
            ))}
            {loading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </Box>
        )}
      </Box>

      {messages.length !== 0 && <BottomNavChips onNavigate={handleNavigate} />}
      <ChatInput onSend={handleSendMessage} disabled={loading} />
    </Box>
  );
}

export default App;
