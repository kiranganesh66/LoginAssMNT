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
        <p className="pageNote">
          Please login with credentials, which we shared in the Login page
        </p>
        <p className="pageNote">
          Please <span className="spak">Click on Login</span> above Header
        </p>
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
