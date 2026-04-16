import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { Download, LinkedIn, GitHub } from "@mui/icons-material";
import { resumeData } from "../data/resumeData";
import me from "../assets/profile.jpg";

export function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1,
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 42,
              height: 42,
              boxShadow: "0 6px 20px rgba(99,102,241,0.4)",
              fontWeight: 700,
            }}
            src={me}
            alt="App logo"
          />

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg,#6366f1,#86efac)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AskAkanksha
            </Typography>

            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              AI Resume Assistant
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
          <Button
            size="small"
            startIcon={<LinkedIn />}
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: "999px",
              px: 2,
              display: { xs: "none", sm: "flex" },

              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",

              "&:hover": {
                background: "linear-gradient(135deg,#6366f1,#818cf8)",
                color: "white",
              },
            }}
          >
            LinkedIn
          </Button>

          <Button
            size="small"
            startIcon={<GitHub />}
            href={resumeData.personalInfo.github}
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: "999px",
              px: 2,
              display: { xs: "none", sm: "flex" },

              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",

              "&:hover": {
                background: "linear-gradient(135deg,#6366f1,#818cf8)",
                color: "white",
              },
            }}
          >
            GitHub
          </Button>

          <Button
            variant="contained"
            startIcon={<Download />}
            href={resumeData.personalInfo.resume}
            target="_blank"
            sx={{
              textTransform: "none",
              borderRadius: "999px",
              px: 2.5,
              fontWeight: 600,
              display: { xs: "none", sm: "flex" },
              background: "linear-gradient(135deg,#6366f1,#818cf8)",

              boxShadow: "0 8px 20px rgba(99,102,241,0.3)",

              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 12px 24px rgba(99,102,241,0.4)",
              },
            }}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
