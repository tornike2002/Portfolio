import styled from "styled-components";
import githubIcon from "../../assets/icons/github.svg"
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
    <CardMainWrapper>
      <div key={id}>
        <img src={img} alt="img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>#{tags.join("# ")}</h3>
        <a href={live} target="_blank" className="cardLive">
          view-project
        </a>
        <a href={github} target="_blank">
         <img src={githubIcon} alt="icon" />
        </a>
      </div>
    </CardMainWrapper>
  );
};

export default ProjectCard;
const CardMainWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  width: 350px;
  min-height: 450px;
  max-width: 100%;
  background-color: #011221;
  border-radius: 10px;
  padding: 5px 15px;
  img {
    max-width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  h2 {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
  }
  p {
    font-size: 14px;
    color: #9f9f9f;
    font-weight: 400;
    line-height: 1.95;
  }
  h3 {
    display: none;
  }
  .cardLive {
    padding: 11px 10px;
    border: none;
    color: rgb(0, 158, 102);
    background-color: #2F2F2F;
    border-radius: 5px;
    transition: all 500ms ease;
  }
  .cardLive:hover {
   color: #fff;
  }
`;
