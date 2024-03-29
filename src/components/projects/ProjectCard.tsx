export type ProjectProps = {
  id: number;
  img: string;
  description: string;
  tags: string[];
  title: string;
  live: string;
  github: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  id,
  img,
  title,
  description,
  tags,
  live,
  github,
}) => {
  return (
    <div>
      <div key={id}>
        <img src={img} alt="img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{tags.join(", ")}</h3> 
        <a href={live}>Live Preview</a>
        <a href={github}>GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
