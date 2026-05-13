import { Typography, Box } from "@mui/material";

const SectionBlock = ({ block }) => {
  if (!block) return null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
      {block.data.title && (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 1,
            opacity: 0.75,
            textTransform: "capitalize",
          }}
        >
          {block.data.title}
        </Typography>
      )}

      {block.data.content && (
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.7,
            color: "text.primary",
            whiteSpace: "pre-wrap",
          }}
        >
          {block.data.content}
        </Typography>
      )}
    </Box>
  );
};

export default SectionBlock;
