import { useDispatch, useSelector } from "react-redux";
import { CounterDispatch, CounterState } from "../state/store";
import { increment, decrement } from "../state/counter/counterSlice";

const Counter = () => {
    const counter = useSelector((state: CounterState) => state.counter.value);
    const dispatch = useDispatch<CounterDispatch>();

    return <>
        <p>{counter}</p>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </>
};

export default Counter;