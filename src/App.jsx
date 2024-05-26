import { Provider } from "react-redux";
import Park from "./components/Park";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Park />
    </Provider>
  );
}
