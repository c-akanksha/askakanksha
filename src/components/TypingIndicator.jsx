import { Avatar, Box, Paper } from "@mui/material";
import { keyframes } from "@mui/system";
import me from "../assets/profile.jpg";

const bounce = keyframes`
  0%,80%,100% { transform: scale(0.6); opacity: 0.4 }
  40% { transform: scale(1); opacity: 1 }
`;

export default function TypingIndicator() {
  return (
    <Box sx={{ px: 2, mb: 2, display: "flex" }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          fontSize: 14,
          border: "1px solid rgba(0,0,0,0.08)",

          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        }}
        src={me}
        alt={"bot typing"}
      />
      <Paper
        sx={{
          marginX: 1,
          p: 1.5,
          maxWidth: "60px",
          borderRadius: 3,
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#6366f1",
                animation: `${bounce} 1.4s infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
