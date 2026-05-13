import { Typography } from "@mui/material";

const TextBlock = ({ block }) => {
  return (
    <Typography variant="body2" marginY={1}>
      {block.data.content}
    </Typography>
  );
};

export default TextBlock;
