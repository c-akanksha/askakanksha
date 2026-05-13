import { Box, Chip, Typography } from "@mui/material";

const TagsBlock = ({ block }) => {
  if (!block?.data?.items?.length) return null;

  return (
    <Box>
      {block.data.label && (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 1,
            opacity: 0.75,
            textTransform: "capitalize",
          }}
        >
          {block.data.label}
        </Typography>
      )}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {block.data.items.map((tag, i) => (
          <Chip
            key={i}
            sx={{
              borderRadius: 3,
              p: 1,

              background: "rgba(255,255,255,0.65)",

              border: "1px solid rgba(99,102,241,0.1)",

              backdropFilter: "blur(10px)",

              transition: "all 0.2s ease",

              "&:hover": {
                transform: "translateY(-2px)",

                background: "rgba(99,102,241,0.08)",

                border: "1px solid rgba(99,102,241,0.25)",
              },
            }}
            label={tag}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsBlock;
