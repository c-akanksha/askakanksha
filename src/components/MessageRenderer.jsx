import TextBlock from "./blocks/TextBlock";
import SectionBlock from "./blocks/SectionBlock";
import BulletsBlock from "./blocks/BulletsBlock";
import TagsBlock from "./blocks/TagsBlock";
import ProjectBlock from "./blocks/ProjectBlock";
import TimelineBlock from "./blocks/TimelineBlock";
import StatsBlock from "./blocks/StatsBlock";
import LinksBlock from "./blocks/LinksBlock";
import FallbackBlock from "./blocks/FallbackBlock";
import BlockSeparator from "./blocks/BlockSeparator";

const renderBlock = (block, i) => {
  switch (block.type) {
    case "text":
      return <TextBlock key={i} block={block} />;

    case "section":
      return <SectionBlock key={i} block={block} />;

    case "bullets":
      return <BulletsBlock key={i} block={block} />;

    case "tags":
      return <TagsBlock key={i} block={block} />;

    case "project_card":
      return <ProjectBlock key={i} block={block} />;

    case "timeline":
      return <TimelineBlock key={i} block={block} />;

    case "stats":
      return <StatsBlock key={i} block={block} />;

    case "links":
      return <LinksBlock key={i} block={block} />;

    case "fallback":
    default:
      return <FallbackBlock key={i} block={block} />;
  }
};
const MessageRenderer = ({ blocks = [] }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <div key={index}>
          {renderBlock(block, index)}

          {/* 👇 separator between blocks */}
          {index !== blocks.length - 1 && <BlockSeparator />}
        </div>
      ))}
    </>
  );
};

export default MessageRenderer;
