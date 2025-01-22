import React, { useEffect, useState } from 'react'

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("event listener added")
        window.addEventListener("resize", handleResize);

        return () => {
            console.log("event listener removed")
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // jese hi hum component to UI se hatate hai component Anmount ho gya aur component anmount hone ka matlab hai ab clean-up function chalega. jab clean-up function chala to event listener removed ho gya.
    // it will run on only 1st render

    return (
        <div>
            <h1>Window Width: {windowWidth}px</h1>
        </div>
    )
}

export default ResizeComponent
