import { Typography, Box } from "@mui/material";

const SectionBlock = ({ block }) => {
  if (!block) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
      {block.title && (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 1,
            opacity: 0.75,
            textTransform: "capitalize",
          }}
        >
          {block.title}
        </Typography>
      )}

      {block.content && (
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.7,
            color: "text.primary",
            whiteSpace: "pre-wrap",
          }}
        >
          {block.content}
        </Typography>
      )}
    </Box>
  );
};

export default SectionBlock;
