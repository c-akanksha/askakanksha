import ProjectCard from "../card/ProjectCard";
import { Typography } from "@mui/material";

const ProjectBlock = ({ block }) => {
  console.log({ block });
  return (
    <>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          mb: 1,
          opacity: 0.75,
          textTransform: "capitalize",
        }}
      >
        Projects
      </Typography>
      {block.items.map((project, idx) => (
        <ProjectCard
          project={project}
          isLast={idx + 1 === block.items.length}
        />
      ))}
    </>
  );
};

export default ProjectBlock;
