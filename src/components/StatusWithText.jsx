import { Box, Typography, keyframes } from "@mui/material";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.4); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const StatusWithText = ({ status }) => {
  const getConfig = () => {
    switch (status) {
      case "loading":
        return {
          color: "#F59E0B",
          text: "Starting AskAkanksha...",
        };
      case "error":
        return {
          color: "#EF4444",
          text: "Oops! We're having trouble reaching the AI right now.",
        };
      default:
        return {
          color: "#22C55E",
          text: "Ready — ask away!",
        };
    }
  };

  const { color, text } = getConfig();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, margin: 1 }}>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
          animation:
            status === "loading"
              ? `${pulse} 1.2s infinite ease-in-out`
              : "none",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StatusWithText;
