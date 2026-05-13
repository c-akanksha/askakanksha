import { Typography } from "@mui/material";

const FallbackBlock = ({ block }) => {
  return (
    <>
      <Typography variant="body2">
        {block?.message || "Not available"}
      </Typography>
    </>
  );
};

export default FallbackBlock;
