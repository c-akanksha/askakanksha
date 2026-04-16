import { Box, Chip } from "@mui/material";

const BottomNavChips = ({ onNavigate }) => {
  const sections = [
    { id: "summary", label: "👤 Summary" },
    { id: "skills", label: "💻 Skills" },
    { id: "projects", label: "🚀 Projects" },
    { id: "experience", label: "💼 Experience" },
    { id: "achievements", label: "🏆 Achievements" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        py: 1,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          gap: 1,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {sections.map((section) => (
          <Chip
            key={section.id}
            label={section.label}
            onClick={() => onNavigate(section.id)}
            size="small"
            variant="outlined"
            sx={{
              cursor: "pointer",
              transition: "all 0.2s",
              borderColor: "grey.300",
              "&:hover": {
                backgroundColor: "primary.main",
                borderColor: "primary.main",
                color: "white",
                transform: "translateY(-1px)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BottomNavChips;
