import { Box, Typography, Link } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const LinksBlock = ({ block }) => {
  if (!block?.items?.length) return null;

  return (
    <Box>
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

      <Box sx={{ display: "flex", flexDirection: "row", gap: 0.8 }}>
        {block.items.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              borderRadius: 3,
              px: 1,
              py: 2.3,
              display: "flex",
              alignItems: "center",
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
            <Box sx={{ fontWeight: 500 }}>{item.label}</Box>

            <OpenInNew
              sx={{
                fontSize: 16,
                opacity: 0.6,
                marginX: 1,
              }}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default LinksBlock;
