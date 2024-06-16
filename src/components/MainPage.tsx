// import { useDispatch, useSelector } from 'react-redux';
// import {firstReducer, secondReducer} from "./store/slices/firstSlice.js";
import MainMenu from './MainMenu.tsx';
import MobileMenu from './MobileMenu.tsx';
import TiketCard from './TiketCard.tsx';
import mainTicketsData from './mockTiketData.tsx';

const MainPage = () => {
    
    // const dispatch = useDispatch();
    // const anyPeremennaya = useSelector(state => state.s111);

    const handlerButton = () => {
        console.log("загружаем билеты...")
    }

    return (
        <div >
            < MainMenu />
            < MobileMenu />
            < TiketCard ticketsSort = {mainTicketsData}/>
            <button className='main-button' onClick={handlerButton}>Загрузить еще билеты</button>
        </div>
    )
}

export default MainPage