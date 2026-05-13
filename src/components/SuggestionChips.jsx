import { useState } from "react";

import { Box, Chip, Fade } from "@mui/material";

import { predefinedQuestions } from "../data/resumeData";

const SuggestionChips = ({ onSuggestionClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    predefinedQuestions[0],
  );

  const handleCategoryClick = (group) => {
    setSelectedCategory(group);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      {/* Category Chips */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          justifyContent: "center",
        }}
      >
        {predefinedQuestions.map((group, index) => {
          const isSelected = selectedCategory.category === group.category;

          return (
            <Chip
              key={index}
              label={group.category}
              clickable
              onClick={() => handleCategoryClick(group)}
              sx={{
                px: 1.5,
                py: 2.5,
                borderRadius: "999px",

                fontWeight: 600,
                fontSize: "0.9rem",

                background: isSelected
                  ? "linear-gradient(135deg,#6366f1,#818cf8)"
                  : "rgba(255,255,255,0.7)",

                color: isSelected ? "white" : "text.primary",

                border: "1px solid rgba(99,102,241,0.12)",

                backdropFilter: "blur(10px)",

                transition: "all 0.25s ease",

                "&:hover": {
                  transform: "translateY(-2px)",

                  background: "linear-gradient(135deg,#6366f1,#818cf8)",

                  color: "white",

                  boxShadow: "0 8px 20px rgba(99,102,241,0.25)",
                },
              }}
            />
          );
        })}
      </Box>

      {/* Question Chips */}
      <Fade in timeout={250}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            justifyContent: "center",
            maxWidth: 750,
          }}
        >
          {selectedCategory.questions.map((question, i) => (
            <Chip
              key={i}
              label={question}
              clickable
              onClick={() => onSuggestionClick(question)}
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
        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestionChips;
