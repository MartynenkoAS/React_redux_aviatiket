import { useEffect } from "react";
import ring_dark     from "../img/ring_purpure_full.png";
import unring_dark   from "../img/ring_purpure_empty.png";
import ring_light    from "../img/ring_white_full.png";
import unring_light  from "../img/ring_white_empty.png";
import mainTicketsData from './mockTiketData';
import { useDispatch, useSelector } from 'react-redux';
import { reducerInitCompany, reducerToggleCompany } from "../store/slices/companyChoiceSlice";
import { Dispatch }  from '@reduxjs/toolkit';
import { RootStore } from "../store/store";

type PropsType = {colorScheme:boolean}
type CompanyObjType = {[key: string]: boolean};

const Company = ( {colorScheme}: PropsType ) => {

    const dispatch: Dispatch = useDispatch();

    const companySwitchObj: CompanyObjType = useSelector((state : RootStore) => state.companyChoice)

    useEffect(() => {
        mainTicketsData.forEach((elem) => {
            !companySwitchObj.hasOwnProperty(elem.company) && dispatch(reducerInitCompany(elem.company))
        });
    }, []);
    
    const ring:   string = colorScheme ? ring_light   : ring_dark;
    const unring: string = colorScheme ? unring_light : unring_dark;

    return (
        <div className="trans_wrapper">
            <p className='aside-p'>Компании</p>
            
            {<div className='aside-label'>
                {Object.keys(companySwitchObj).map((elem, index) => { return <label className='trans_label' key={"cc"+index}>
                    <input type="checkbox" onChange={() => dispatch(reducerToggleCompany(elem))}/>
                    {companySwitchObj[elem] ? <img className="company-checkbox" src={ring}   alt="../img/ring_purpure_full.png" /> : 
                                              <img className="company-checkbox" src={unring} alt="../img/ring_purpure_empty.png" />}
                    {elem}
                </label>})}
            </div>}
        </div>
        );
}
export default Company