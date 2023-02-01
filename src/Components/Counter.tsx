import {useState} from "react";
import styles from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.btn}>
            <h1>{count}</h1>
            <button onClick={() => setCount((prevState) => prevState + 1)}>increment</button>
        </div>
    );
};
