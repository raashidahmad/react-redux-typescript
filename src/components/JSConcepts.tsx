import { useState } from "react";

const JSConcepts = () => {
    const [itemOne, setItemOne] = useState({});
    const [itemTwo, setItemTwo] = useState({});

    const destructureItems = () => {
        const [one, two, three, ...rest] = [1, 2, 3, 4, 5];
        let obj = {
            one: one,
            two: two,
            three: three
        };
        setItemOne(obj);

        const { name, age, ...details } = {name: "Rashid", age: 35, qualification: "MS", experience: 10};
    }

    return <>
        <h4>Destructuring Assignment</h4>
        <p></p>
        <button></button>
    </>;
}

export default JSConcepts;