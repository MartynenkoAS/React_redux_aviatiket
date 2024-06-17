import { useDispatch, useSelector } from 'react-redux';
import { setIsCheapToggle, setIsFastToggle, setIsOptimalToggle } from "../store/slices/mainMenuSlice";
import { Dispatch }  from '@reduxjs/toolkit';
import { RootStore } from "../store/store";

const MainMenu = () => {

    const dispatch: Dispatch = useDispatch();

    const isCheap: boolean   = useSelector((state : RootStore) => state.mainMenuChoice.setIsCheap);
    const isFast: boolean    = useSelector((state : RootStore) => state.mainMenuChoice.setIsFast);
    const isOptimal: boolean = useSelector((state : RootStore) => state.mainMenuChoice.setIsOptimal);

    return (
        <div className="mainMenu">
            <button className={`mainMenu-box mainMenu-cheap   ${isCheap   ? "Main-menu-On" : ""}`} onClick={() => dispatch(setIsCheapToggle())}>Самый дешевый</button>
            <button className={`mainMenu-box                  ${isFast    ? "Main-menu-On" : ""}`} onClick={() => dispatch(setIsFastToggle())}>Самый быстрый</button>
            <button className={`mainMenu-box mainMenu-optimal ${isOptimal ? "Main-menu-On" : ""}`} onClick={() => dispatch(setIsOptimalToggle())}>Самый оптимальный</button>
        </div>
    )
}

export default MainMenu