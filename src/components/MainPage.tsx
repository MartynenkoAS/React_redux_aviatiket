import { useDispatch, useSelector } from 'react-redux';
import MainMenu from './MainMenu.tsx';
import MobileMenu from './MobileMenu.tsx';
import TiketCard from './TiketCard.tsx';
import { RootStore } from '../store/store.tsx';
// import mainTicketsData from './mockTiketData.tsx';

const MainPage = () => {
    
    // const dispatch: Dispatch = useDispatch();

    const filterData = useSelector((state: RootStore) => state.ticketData.filterData);

    const handlerButton = () => {
        console.log("загружаем билеты...")
    }

    return (
        <div >
            < MainMenu />
            < MobileMenu />
            < TiketCard ticketsSort = {filterData}/>
            <button className='main-button' onClick={handlerButton}>Загрузить еще билеты</button>
        </div>
    )
}

export default MainPage