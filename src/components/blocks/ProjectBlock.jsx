import ProjectCard from "../card/ProjectCard";
import { Typography } from "@mui/material";

const ProjectBlock = ({ block }) => {
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
      {block.data.items.map((project, idx) => (
        <ProjectCard
          project={project}
          isLast={idx + 1 === block.data.items.length}
        />
      ))}
    </>
  );
};

export default ProjectBlock;
