import { Box, Paper, Typography, Avatar, Chip } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import me from "../assets/profile.jpg";
import user from "../assets/user.png";

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        px: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-end",
          gap: 1.5,
          maxWidth: { xs: "95%", sm: "80%", md: "70%" },
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            fontSize: 14,
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
          src={isUser ? user : me}
          alt={isUser ? "user" : "bot"}
        />

        <Box sx={{ flex: 1 }}>
          {message.text && (
            <Paper
              elevation={0}
              sx={{
                px: 2.5,
                py: 1.8,
                borderRadius: 4,

                background: isUser
                  ? "linear-gradient(135deg, #6366f1, #818cf8)"
                  : "rgba(255,255,255,0.75)",

                color: isUser ? "#fff" : "text.primary",

                border: isUser ? "none" : "1px solid rgba(0,0,0,0.08)",

                boxShadow: isUser
                  ? "0 10px 25px rgba(99,102,241,0.35)"
                  : "0 4px 16px rgba(0,0,0,0.08)",

                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.7,
                }}
              >
                {message.text}
              </Typography>
            </Paper>
          )}

          {!isUser && message.data && (
            <Box
              sx={{ mt: 1.5, display: "flex", flexDirection: "column", gap: 2 }}
            >
              {message.type === "list" && Array.isArray(message.data) && (
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {message.data.map((item, i) => (
                      <Chip
                        key={i}
                        label={item}
                        sx={{
                          background: "rgba(99,102,241,0.1)",
                          color: "#4f46e5",
                          fontSize: "0.8rem",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              )}

              {message.type === "cards" &&
                Array.isArray(message.data) &&
                message.data.map((item, i) => (
                  <ProjectCard key={i} project={item} />
                ))}
              {message.type === "sections" && (
                <>
                  {typeof message.data === "string" && (
                    <Paper sx={{ p: 2 }}>
                      <Typography>{message.data}</Typography>
                    </Paper>
                  )}

                  {typeof message.data === "object" && message.data && (
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {(Array.isArray(message.data)
                        ? message.data
                        : Object.values(message.data)
                      ).map((item, index) => (
                        <ExperienceCard key={index} experience={item} />
                      ))}
                    </Box>
                  )}
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
