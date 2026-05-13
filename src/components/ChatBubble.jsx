import { Box, Avatar, Typography } from "@mui/material";
import me from "../assets/profile.jpg";
import user from "../assets/user.png";
import MessageRenderer from "./MessageRenderer";

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        p: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-start",
          gap: 1.2,
          maxWidth: "75%",
        }}
      >
        {/* Avatar */}
        <Avatar
          src={isUser ? user : me}
          sx={{
            width: 34,
            height: 34,
            mt: 0.5,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* Bubble */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            borderRadius: 3,
            position: "relative",

            background: isUser
              ? "linear-gradient(135deg, #6366f1, #818cf8)"
              : "rgba(255,255,255,0.75)",

            color: isUser ? "#fff" : "text.primary",

            border: isUser ? "none" : "1px solid rgba(0,0,0,0.08)",

            backdropFilter: !isUser ? "blur(12px)" : "none",

            boxShadow: isUser
              ? "0 10px 25px rgba(99,102,241,0.25)"
              : "0 4px 16px rgba(0,0,0,0.06)",

            display: "flex",
            flexDirection: "column",
            gap: 2,

            // 💬 chat bubble feel
            borderTopLeftRadius: isUser ? 16 : 6,
            borderTopRightRadius: isUser ? 6 : 16,
          }}
        >
          {/* USER TEXT */}
          {isUser ? (
            <Typography
              sx={{
                whiteSpace: "pre-wrap",
                lineHeight: 1.5,
              }}
            >
              {message.text}
            </Typography>
          ) : (
            /* BOT BLOCKS */
            <MessageRenderer blocks={message.blocks} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
