import { Box, Typography, Container } from "@mui/material";
import SuggestionChips from "./SuggestionChips";
import { AutoAwesome } from "@mui/icons-material";
import StatusWithText from "./StatusWithText";

export function EmptyState({
  backendStatus,
  suggestions = [],
  onSuggestionClick,
}) {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: 4,
          margin: 1,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1 0%, #86efac 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
          }}
        >
          <AutoAwesome sx={{ fontSize: 40, color: "white" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 600,
              background: "linear-gradient(135deg, #6366f1 0%, #86efac 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Hi, I'm AskAkanksha 👋
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 500, mx: "auto", mt: 1 }}
          >
            Ask me anything about Akanksha's experience, skills, or projects.
            I'm here to help you learn more!
          </Typography>
          <StatusWithText status={backendStatus} />
        </Box>

        {backendStatus === "success" && (
          <SuggestionChips
            suggestions={suggestions}
            onSuggestionClick={onSuggestionClick}
          />
        )}
      </Box>
    </Container>
  );
}
