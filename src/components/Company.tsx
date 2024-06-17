import ring_dark     from "../img/ring_purpure_full.png";
import unring_dark   from "../img/ring_purpure_empty.png";
import ring_light    from "../img/ring_white_full.png";
import unring_light  from "../img/ring_white_empty.png";
import mainTicketsData from './mockTiketData';
import { useDispatch, useSelector } from 'react-redux';
import { reducerForCompany } from "../store/slices/companyChoiceSlice";
import { Dispatch }  from '@reduxjs/toolkit';
import { RootStore } from "../store/store";

type PropsType = {colorScheme:boolean}
type CompanyArrType = [string];

const Company = ( {colorScheme}: PropsType ) => {

    const dispatch: Dispatch = useDispatch();

    const companySwitch: boolean = useSelector((state : RootStore) => state.companyChoice.companyToggle)

    const companyArr: CompanyArrType = [];
    mainTicketsData.forEach((elem) => {
        if (companyArr.find(elm => elm === elem.company) === undefined) {
            companyArr.push(elem.company);
        }
    });

    const ring:   string = colorScheme ? ring_light   : ring_dark;
    const unring: string = colorScheme ? unring_light : unring_dark;

    return (
        <div className="trans_wrapper">
            <p className='aside-p'>Компании</p>
            
            {<div className='aside-label'>
                {companyArr.map((elem, index) => { return <label className='trans_label' key={"cc"+index}>
                    <input type="checkbox" onChange={() => dispatch(reducerForCompany(index))}/>
                    {companySwitch ? <img className="company-checkbox" src={ring}   alt="../img/ring_purpure_full.png" /> : 
                                         <img className="company-checkbox" src={unring} alt="../img/ring_purpure_empty.png" />}
                    {elem}
                </label>})}
            </div>}
        </div>
        );
        
}
export default Company