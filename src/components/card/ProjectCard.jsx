import { Box, Typography, Chip, IconButton } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const ProjectCard = ({ project, isLast }) => {
  if (!project) return null;

  const { name, title, subtitle, description, techStack, link, ...rest } =
    project;

  const displayTitle = name || title || "Project";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {displayTitle}
          </Typography>

          {subtitle && (
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {link && (
          <IconButton
            href={link}
            target="_blank"
            size="small"
            sx={{
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 2,
            }}
          >
            <OpenInNew fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Description (only if exists) */}
      {description && (
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.6,
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      )}

      {/* Tech Stack */}
      {Array.isArray(techStack) && techStack.length > 0 && (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: isLast ? 0 : 2 }}
        >
          {techStack.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "rgba(79, 70, 229, 0.08)",
                color: "primary.main",
                fontWeight: 500,
                border: "1px solid rgba(79, 70, 229, 0.15)",
              }}
            />
          ))}
        </Box>
      )}

      {/* Fallback for unknown fields (VERY IMPORTANT for your system) */}
      {Object.keys(rest || {}).length > 0 && (
        <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
          {Object.entries(rest).map(([key, value]) => {
            if (!value) return null;

            return (
              <Typography
                key={key}
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                <strong style={{ textTransform: "capitalize" }}>
                  {key.replace(/_/g, " ")}:
                </strong>{" "}
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </Typography>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
