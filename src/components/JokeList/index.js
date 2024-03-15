import "./index.css";
const JokeList = (props) => {
  const { joke } = props;

  return (
    <>
      <li className="listStyle">{joke}</li>
    </>
  );
};

export default JokeList;
