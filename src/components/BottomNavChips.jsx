import { useState } from "react";
import { Box, Chip, Button } from "@mui/material";

const COLLAPSED_LIMIT = 1;

const BottomNavChips = ({ suggestions = [], onNavigate }) => {
  const [expanded, setExpanded] = useState(false);

  if (!suggestions.length) return null;

  const visible = expanded
    ? suggestions
    : suggestions.slice(0, COLLAPSED_LIMIT);

  const hasMore = suggestions.length > COLLAPSED_LIMIT;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: 2,
        py: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {/* chips */}
        {visible.map((q, i) => (
          <Chip
            key={i}
            label={q}
            onClick={() => onNavigate(q)}
            size="small"
            variant="outlined"
            sx={{
              borderRadius: 3,
              px: 1,
              py: 2.3,
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
          />
        ))}

        {/* inline toggle chip */}
        {hasMore && (
          <Chip
            label={
              expanded
                ? "Show less"
                : `+${suggestions.length - COLLAPSED_LIMIT} more`
            }
            onClick={() => setExpanded((p) => !p)}
            size="small"
            sx={{
              borderRadius: 3,
              fontWeight: 600,

              color: "text.secondary",
              background: "transparent",
              border: "1px dashed rgba(0,0,0,0.2)",

              "&:hover": {
                background: "rgba(0,0,0,0.04)",
                border: "1px dashed rgba(0,0,0,0.35)",
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default BottomNavChips;
