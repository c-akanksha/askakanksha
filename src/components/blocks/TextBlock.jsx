import { Typography } from "@mui/material";

const TextBlock = ({ block }) => {
  return (
    <Typography variant="body2" marginY={1}>
      {block.content}
    </Typography>
  );
};

export default TextBlock;
