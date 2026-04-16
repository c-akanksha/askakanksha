import { Box, Paper, Typography, IconButton } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const title = project.name || project.title || "Project";
  const link = project.link || project.url;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 4,
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
        transition: "0.3s",
        border: "1px solid rgba(0,0,0,0.08)",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 20px 40px rgba(99,102,241,0.2)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>

        {link && (
          <IconButton size="small" href={link} target="_blank">
            <OpenInNew fontSize="small" />
          </IconButton>
        )}
      </Box>

      {project.problemStatement && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            PROBLEM
          </Typography>
          <Typography variant="body2">{project.problemStatement}</Typography>
        </Box>
      )}

      {project.myRole && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            ROLE
          </Typography>
          <Typography variant="body2">{project.myRole}</Typography>
        </Box>
      )}

      {project.impact && (
        <Box
          sx={{
            mt: 2,
            borderRadius: 2,
            backgroundColor: "success.50",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            IMPACT
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {project.impact}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default ProjectCard;
