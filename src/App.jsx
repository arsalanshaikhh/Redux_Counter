import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container">
        <h1>Counter</h1>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span> - </span>
          </a>
          <input type="text" className="quantity_input" value={myState}></input>
          <a
            name="quantity"
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span> + </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
