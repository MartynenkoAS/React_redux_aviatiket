import React, { useState } from "react";

const MainMenu = () => {
    const [isCheap,   setIsCheap]   = useState(true);
    const [isFast,    setIsFast]    = useState(false);
    const [isOptimal, setIsOptimal] = useState(false);

    return (
        <div className="mainMenu">
            <button className={`mainMenu-box mainMenu-cheap   ${isCheap   ? "Main-menu-On" : ""}`} onClick={() => {setIsCheap(true); setIsFast(false); setIsOptimal(false)}}>Самый дешевый</button>
            <button className={`mainMenu-box                  ${isFast    ? "Main-menu-On" : ""}`} onClick={() => {setIsCheap(false); setIsFast(true); setIsOptimal(false)}}>Самый быстрый</button>
            <button className={`mainMenu-box mainMenu-optimal ${isOptimal ? "Main-menu-On" : ""}`} onClick={() => {setIsCheap(false); setIsFast(false); setIsOptimal(true)}}>Самый оптимальный</button>
        </div>
    )
}

export default MainMenu