import App from "./App";
import Profile from "./routes/Profile";
import ErrorPage from "./routes/ErrorPage";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":name" element={<Profile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
export default routes;
