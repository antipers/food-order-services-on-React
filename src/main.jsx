import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/styles.css";
import { store } from "./redux";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
