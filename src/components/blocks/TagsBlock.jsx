import { Box, Typography } from "@mui/material";

const TagsBlock = ({ block }) => {
  if (!block?.items?.length) return null;

  return (
    <Box>
      {block.label && (
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            mb: 1,
            opacity: 0.75,
            textTransform: "capitalize",
          }}
        >
          {block.label}
        </Typography>
      )}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {block.items.map((tag, i) => (
          <Box
            key={i}
            sx={{
              borderRadius: 3,
              p: 1,

              fontWeight: 500,

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
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TagsBlock;
