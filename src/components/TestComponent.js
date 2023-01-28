import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter, setCounter } from "../store/actions/testAction";

const TestComponent = ({ name }) => {

  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter())
  }

  const handleDecrement = () => {
    dispatch(decrementCounter())
  }

  const handleReset = () => {
    dispatch(resetCounter())
  }

  const handleSet = (e) => {
    dispatch(setCounter(e.target.value))
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>count: {test.counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input type="number" value={test.counter} onChange={handleSet} />
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TestComponent;