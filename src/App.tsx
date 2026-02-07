import { Link } from "react-router";
import { Routes, Route } from "react-router";
import Profile from "./routes/Profile";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import routes from "./routes";

const router = routes();
const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>

      {router}
    </>
  );
};

export default App;
