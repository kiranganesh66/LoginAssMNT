import { useNavigate } from "react-router-dom";
import "./index.css";

const NotFound = () => {
  const backbtn = useNavigate();
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not-found"
        className="not-found-img"
      />
      <button type="submit" onClick={() => backbtn("/")} className="back-Btn">
        Back
      </button>
    </div>
  );
};
export default NotFound;
