import router from "plugins/router";
import { useRoutes } from "react-router-dom";
import "assets/styles/main.scss";

const App = () => {
  const content = useRoutes(router);
  return content;
};

export default App;
