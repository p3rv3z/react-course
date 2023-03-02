import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <p>This is the home page</p>
    </div>
  );
};
export default Home;
