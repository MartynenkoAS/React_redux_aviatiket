import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MainMenu        from './MainMenu.tsx';
import MobileMenu      from './MobileMenu.tsx';
import TiketCard       from './TiketCard.tsx';
import { RootStore }   from '../store/store.tsx';
import { Ticket }      from './mockTiketData.ts';
import { useDispatch } from 'react-redux';
import { Dispatch }    from '@reduxjs/toolkit';
import { loadTickets } from '../store/slices/ticketSlice.tsx';
import { withoutTransToggle, oneTransToggle, twoTransToggle, threeTransToggle } from '../store/slices/transferChoiceSlice';

const MainPage = () => {
    
    const [filterTickets, setFilterTickets] = useState<Ticket[]>([]);
    const transferChoice = useSelector((state: RootStore) => state.transferChoice);
    const companyChoice  = useSelector((state: RootStore) => state.companyChoice);
    const mainMenuChoice = useSelector((state: RootStore) => state.mainMenuChoice);
    const ticketsData    = useSelector((state: RootStore) => state.ticketData.data);
    
    function changeFilterTickets(tickets:Ticket[]) {
        const filterTickets:Ticket[] = [];
        
        function companyCompare (tick: Ticket) {
            Object.entries(companyChoice).forEach(([key, value]) => {                     // проверяем на включенную авиакомпанию
                if ( key === tick.company && value) {
                    filterTickets.push(tick);
                }
            })
        }

        tickets.forEach(ticket => {                                                 // выбираем билеты по количеству пересадок
            if (transferChoice.oneTrans     && ticket.connectionAmount === 1) {
                companyCompare(ticket)
            }
            if (transferChoice.twoTrans     && ticket.connectionAmount === 2) {
                companyCompare(ticket)
            }
            if (transferChoice.threeTrans   && ticket.connectionAmount === 3) {
                companyCompare(ticket)
            }
            if (transferChoice.withoutTrans && ticket.connectionAmount === 0) {
                companyCompare(ticket)
            }
        })
        
        if (mainMenuChoice.setIsCheap) {                                    // Самый дешевый
            filterTickets.sort((a:Ticket, b:Ticket) => {
                if (a.price > b.price) return  1;
                if (a.price < b.price) return -1;
                return 0;
            })
        }
        if (mainMenuChoice.setIsFast) {                                     // Самый быстрый
            filterTickets.sort((a:Ticket, b:Ticket) => {
                if (a.duration > b.duration) return  1;
                if (a.duration < b.duration) return -1;
                return 0;
            })
        }
        if (mainMenuChoice.setIsOptimal) {                                  // Самый оптимальный 1) Пересадки
            filterTickets.sort((a:Ticket, b:Ticket) => {
                if (a.connectionAmount != null && b.connectionAmount != null) {
                    if (a.connectionAmount > b.connectionAmount) return  1;
                    if (a.connectionAmount < b.connectionAmount) {
                        return -1;
                    } else {
                        if (a.price > b.price) return  1;                   // Самый оптимальный 2) цена
                        if (a.price < b.price) {
                            return -1;
                        } else {
                            if (a.duration > b.duration) return  1;         // Самый оптимальный 3) время
                            if (a.duration < b.duration) return -1;
                        }
                    }
                }
                    return 0;
            })
        }
        return filterTickets
    }
                
    useEffect(() => { setFilterTickets(changeFilterTickets(ticketsData)) },      // вызываем функцию фильтрации для всех билетов, как только у нас поменялось состояние фильтрации, или обновились билеты
    [ticketsData, companyChoice, transferChoice, mainMenuChoice]);  

    const dispatch: Dispatch = useDispatch();

    const handlerButton = () => {
        console.log("загружаем билеты...")
        dispatch(loadTickets())
    }

    return (
        <div >
            < MainMenu />
            < MobileMenu />
            < TiketCard ticketsSort = {filterTickets}/>
            <button className='main-button' onClick={handlerButton}>Загрузить еще билеты</button>
        </div>
    )
}

export default MainPage