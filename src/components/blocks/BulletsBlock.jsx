import { Typography, Box, Paper } from "@mui/material";

const BulletsBlock = ({ block }) => {
  if (!block?.items?.length) return null;

  return (
    <>
      {/* Title */}
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

      {/* Bullets */}
      <Box
        component="ul"
        sx={{
          m: 0,
          pl: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {block.items.map((item, i) => (
          <Box
            component="li"
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              listStyle: "none",
              position: "relative",

              "&::before": {
                content: '"•"',
                color: "#4f46e5",
                fontWeight: 700,
                position: "absolute",
                left: -14,
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.6,
                color: "text.primary",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default BulletsBlock;
