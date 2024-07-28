import { reducerInitCompany, reducerToggleCompany } from "../store/slices/companyChoiceSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect }     from "react";
import { Dispatch }      from '@reduxjs/toolkit';
import { RootStore }     from "../store/store";
import ring_dark         from "../img/ring_purpure_full.png";
import unring_dark       from "../img/ring_purpure_empty.png";
import ring_light        from "../img/ring_white_full.png";
import unring_light      from "../img/ring_white_empty.png";
import { Ticket }        from "./mockTiketData";
import { loadTickets } from "../store/slices/ticketSlice";


type PropsType = {colorScheme:boolean}
type CompanyObjType = {[key: string]: boolean};

const Company = ( {colorScheme}: PropsType ) => {

    const dispatch: Dispatch = useDispatch();
    const companySwitchObj: CompanyObjType = useSelector((state : RootStore) => state.companyChoice)
    
    dispatch(loadTickets())
    const mainDataTickets: Ticket[] = useSelector((state:RootStore) => state.ticketData.data)

    useEffect(() => {
        mainDataTickets.forEach((elem) => {
            !companySwitchObj.hasOwnProperty(elem.company) && dispatch(reducerInitCompany(elem.company))
        });
    }, []);
    
    const ring:   string = colorScheme ? ring_light   : ring_dark;
    const unring: string = colorScheme ? unring_light : unring_dark;

    const onChangeHandler = (elem: any) => {
        dispatch(reducerToggleCompany(elem));
    }

    return (
        <div className="trans_wrapper">
            <p className='aside-p'>Компании</p>
            
            {<div className='aside-label'>
                {Object.keys(companySwitchObj).map((elem, index) => { return <label className='trans_label' key={"cc"+index}>
                    <input type="checkbox" onChange={() => onChangeHandler(elem)}/>
                    {companySwitchObj[elem] ? <img className="company-checkbox" src={ring}   alt="../img/ring_purpure_full.png" /> : 
                                              <img className="company-checkbox" src={unring} alt="../img/ring_purpure_empty.png" />}
                    {elem}
                </label>})}
            </div>}
        </div>
        );
}
export default Company