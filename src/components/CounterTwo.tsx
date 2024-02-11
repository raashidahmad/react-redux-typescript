import { useSelector } from "react-redux";
import { CounterState } from "../state/store";

const CounterTwo = () => {
    const counter = useSelector((state: CounterState) => state.counter.value);
    const square = useSelector((state: CounterState) => state.counter.square);

    return <>
        <p>Value from Two: {counter}</p>
        <p>Square from Two: {square}</p>
    </>
}
export default CounterTwo;