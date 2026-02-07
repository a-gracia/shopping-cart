import routes from "./routes";
import NavBar from "./components/NavBar";
const router = routes();
const App = () => {
  return (
    <>
      <NavBar />

      {router}
    </>
  );
};

export default App;
