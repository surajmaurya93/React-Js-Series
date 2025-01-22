import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef(null);

    const expensiveCalculation = useCallback(() => {
        console.log("Running Expensive Calculation....");
        let result = 0;
        for (let i = 0; i < 100000; i++) {
            result += i;
        }
        return result;
    }, [count]);

    useEffect(() => {
      if(previousFunction.current){
        if(previousFunction.current === expensiveCalculation){
            console.log("Funtion not re-created");
        }
        else{
            console.log("Function Got re-created")
        }
      }
      else{
        previousFunction.current = expensiveCalculation;
      }
    }, [previousFunction])
    

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type SomeThing'
            />
            <br />
            <br />
            <p>
                Expensive Calculation Result:
                {expensiveCalculation()}
                <br />
                <br />
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </p>
        </div>
    );
};

export default ExpensiveComponent
