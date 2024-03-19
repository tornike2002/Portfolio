import { useTypewriter, Cursor } from "react-simple-typewriter";
const MainTitle: React.FC = () => {
  const [text] = useTypewriter({
    words: [" I'm React Developer", " I"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default MainTitle;
