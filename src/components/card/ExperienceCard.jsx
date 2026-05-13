import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ experience }) => {
  if (!experience?.items) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Section title */}
      {experience.type && (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 2,
            opacity: 0.7,
            textTransform: "capitalize",
          }}
        >
          {experience.type}
        </Typography>
      )}

      {/* Timeline wrapper */}
      <Box sx={{ position: "relative", pl: 3 }}>
        {/* vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: 8,
            top: 6,
            bottom: 6,
            width: "2px",
            borderRadius: 2,
            backgroundColor: "primary.main", // 👈 theme color
            opacity: 0.2,
          }}
        />

        {experience.items.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              mb: 3,
            }}
          >
            {/* content */}
            <Box sx={{ pl: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                {item.title}
              </Typography>

              {item.subtitle && (
                <Typography variant="body2" sx={{ opacity: 0.75, mt: 0.2 }}>
                  {item.subtitle}
                </Typography>
              )}

              {item.duration && (
                <Typography
                  variant="caption"
                  sx={{ opacity: 0.6, display: "block", mt: 0.2 }}
                >
                  {item.duration}
                </Typography>
              )}

              {item.description && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExperienceCard;
