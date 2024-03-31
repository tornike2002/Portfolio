import styled from "styled-components";
export type SmallCardProps = {
  title: string;
  present: string;
  company: string;
  companyAbout: string;
};
const AboutSmallcard: React.FC<SmallCardProps> = ({
  title,
  present,
  company,
  companyAbout,
}: SmallCardProps) => {
  return (
    <>
      <SmallCardContainer>
        <TitleSmallCard className="smallTitle-center">{title}</TitleSmallCard>
        <h4>{present}</h4>
        <h1>{company}</h1>
        <p>{companyAbout}</p>
      </SmallCardContainer>
    </>
  );
};

export default AboutSmallcard;
const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 30px 45px;
  font-family: "Poppins", sans-serif;
  h4 {
    margin: 0 0 5px 0;
    font-size: 12px;
    color: #999;
  }
  h1,
  p {
    color: #eee;
    font-weight: 500;
    font-size: 16px;
  }
  p {
    color: #bbb;
  }
`;
const TitleSmallCard = styled.h1`
  text-align: center;
  width: 100%;
  color: #eee;
  font-weight: 500;
  font-size: 21px;
`;
