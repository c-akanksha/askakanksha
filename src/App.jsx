import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";
import BottomNavChips from "./components/BottomNavChips";
import { EmptyState } from "./components/EmptyState";

import {
  addUserMessage,
  sendMessageAsync,
  checkBackendStatus,
} from "./slices/chatSlice";
import { Header } from "./components/Header";
import TypingIndicator from "./components/TypingIndicator";

function App() {
  const dispatch = useDispatch();
  const { messages, loading, backendStatus, suggestedQuestions } = useSelector(
    (s) => s.chat,
  );

  const ref = useRef();

  useEffect(() => {
    dispatch(checkBackendStatus());
  }, []);

  const send = (msg) => {
    dispatch(addUserMessage(msg));
    dispatch(sendMessageAsync(msg));
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

      {/* 👇 CENTERED CHAT CONTAINER */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
          px: 2,
          pb: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px", // 👈 key fix
            display: "flex",
            flexDirection: "column",
            gap: 1,
            py: 2,
          }}
        >
          {messages.length === 0 ? (
            <EmptyState
              backendStatus={backendStatus}
              suggestions={suggestedQuestions}
              onSuggestionClick={send}
            />
          ) : (
            <>
              {messages.map((m) => (
                <ChatBubble key={m.id} message={m} />
              ))}
              {loading && <TypingIndicator />}
            </>
          )}
        </Box>
      </Box>

      {messages.length > 0 && (
        <BottomNavChips suggestions={suggestedQuestions} onNavigate={send} />
      )}

      <ChatInput onSend={send} disabled={loading} />
    </Box>
  );
}

export default App;
