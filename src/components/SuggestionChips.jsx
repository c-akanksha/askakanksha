import { Box, Chip } from "@mui/material";
import { predefinedQuestions } from "../data/resumeData";

const SuggestionChips = ({ onSuggestionClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: 700,
        mx: "auto",
      }}
    >
      {predefinedQuestions.map((question, index) => (
        <Chip
          key={index}
          label={question}
          onClick={() => onSuggestionClick(question)}
          sx={{
            borderRadius: 2,
            px: 1,
            cursor: "pointer",
            transition: "all 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
            },
          }}
        />
      ))}
    </Box>
  );
};

export default SuggestionChips;
