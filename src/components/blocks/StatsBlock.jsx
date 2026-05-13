import { Box, Typography, Paper } from "@mui/material";

const StatsBlock = ({ block }) => {
  if (!block?.items?.length) return null;

  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          mb: 1,
          opacity: 0.75,
          textTransform: "capitalize",
        }}
      >
        {block.title || block.type}
      </Typography>

      {/* Inline rows */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {block.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              py: 0.8,
              borderBottom:
                i !== block.items.length - 1
                  ? "1px solid rgba(0,0,0,0.05)"
                  : "none",
            }}
          >
            {/* LABEL */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
                marginRight: 1,
              }}
            >
              {item.label}
            </Typography>

            {/* VALUE */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                textAlign: "right",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StatsBlock;
