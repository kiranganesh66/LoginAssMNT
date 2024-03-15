import Header from "../Header";
import JokeList from "../JokeList";
// import Login from "../Login";

import "./index.css";

const Home = (props) => {
  const { listofJokes } = props;
  const list = [];
  const jk = () => {
    for (let i in listofJokes) {
      list.push(listofJokes[i]);
    }
  };
  console.log(jk());
  return (
    <div>
      <Header />
      <div className="homeCOn">
        <ul>
          {list.map((eachone) => (
            <JokeList joke={eachone} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
