import Header from "../Header";
import JokeList from "../JokeList";

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
        <p>
          Please login with Credentials which I have mentioned in the Log in
          page
        </p>
        <p>Please Click on Login above</p>
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
