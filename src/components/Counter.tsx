import { useDispatch, useSelector } from "react-redux";
import { CounterDispatch, CounterState } from "../state/store";
import { increment, decrement, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
    const counter = useSelector((state: CounterState) => state.counter.value);
    const square = useSelector((state: CounterState) => state.counter.square); 
    const dispatch = useDispatch<CounterDispatch>();

    return <>
        <p>Value: {counter}</p>
        <p>Square: {square}</p>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementAsync(3))}>Increment Async Amount</button>
        </div>
    </>
};

export default Counter;