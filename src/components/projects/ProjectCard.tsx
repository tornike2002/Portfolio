import styled from "styled-components";
import githubIcon from "../../assets/icons/github.svg";
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
        <div className="cardContainer">
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>#{tags.join("# ")}</h3>
          <div className="cardLinks_container">
            <a href={live} target="_blank" className="cardLive">
              view-project
            </a>
            <a href={github} target="_blank">
              <img src={githubIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </CardMainWrapper>
  );
};

export default ProjectCard;
const CardMainWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  width: 350px;
  max-width: 100%;
  min-height: 450px;
  background-color: #011221;
  border-radius: 10px;
  transition: all 500ms ease-in-out;
  &:hover {
    transform: scale(1.03);
    transform: rotate(1deg)
  }
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
    padding-top: 10px;
    text-align: center;
  }
  h3 {
    display: none;
  }
  a img {
    width: 60px;
    max-width: 100%;
    transition: all 500ms ease;
  }
  a img:hover {
    transform: scale(1.1);
  }
  .cardLive {
    padding: 11px 10px;
    border: none;
    color: rgb(0, 158, 102);
    background-color: #2f2f2f;
    border-radius: 5px;
    transition: all 500ms ease;
  }
  .cardLive:hover {
    color: #fff;
  }
  .cardLinks_container {
    padding-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cardContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 10px;
  }
`;
