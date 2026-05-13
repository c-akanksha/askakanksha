import { Box } from "@mui/material";

const BlockSeparator = () => {
  return (
    <Box
      sx={{
        height: "1px",
        my: 1,
        background:
          "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
      }}
    />
  );
};

export default BlockSeparator;
