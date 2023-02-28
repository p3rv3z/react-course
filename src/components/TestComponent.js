import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchPosts, increment, reset, set } from "../store/reducers/testSlice";

const TestComponent = ({ name }) => {

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const test = useSelector(state => state.test);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleSet = (e) => {
    dispatch(set(e.target.value))
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
      <div>
        {test.loading}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TestComponent;