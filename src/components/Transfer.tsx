import check_dark    from "../img/check_purpure_border.png";
import check_light   from '../img/check_white_border.png'
import uncheck_dark  from "../img/uncheck_purpure_border.png";
import uncheck_light from '../img/uncheck_white_border.png';
import { useDispatch, useSelector } from 'react-redux';
import { withoutTransToggle, oneTransToggle, twoTransToggle, threeTransToggle } from '../store/slices/transferChoiceSlice';
import { Dispatch }  from '@reduxjs/toolkit';
import { RootStore } from "../store/store";

type PropsType = {colorScheme:boolean}

const Transfer = ({colorScheme} : PropsType) => {

    const dispatch: Dispatch = useDispatch();

    const withoutTransfer: boolean = useSelector((state : RootStore) => state.transferChoice.withoutTrans)
    const oneTransfer: boolean     = useSelector((state : RootStore) => state.transferChoice.oneTrans)
    const twoTransfer: boolean     = useSelector((state : RootStore) => state.transferChoice.twoTrans)
    const threeTransfer: boolean   = useSelector((state : RootStore) => state.transferChoice.threeTrans)
    
    const check:   string = colorScheme ? check_light   : check_dark;
    const uncheck: string = colorScheme ? uncheck_light : uncheck_dark;

    return (
        <div className="trans_wrapper">
            <p className='aside-p'>Количество пересадок</p>
            <div className='aside-label'>
                <label className='trans_label'>
                    <input type="checkbox" onChange={() => dispatch(withoutTransToggle())}/>
                    {withoutTransfer? <img className="trans-checkbox" src={check} alt="./img/check_purpure_border.png" /> : 
                                      <img className="trans-checkbox" src={uncheck} alt="./img/uncheck_purpure_border.png" />}
                    Без пересадок
                </label>
                <label className='trans_label'>
                    <input type="checkbox" onChange={() => dispatch(oneTransToggle())}/>
                    {oneTransfer? <img className="trans-checkbox" src={check} alt="./img/check_purpure_border.png" /> : 
                                  <img className="trans-checkbox" src={uncheck} alt="./img/uncheck_purpure_border.png" />}
                    1 пересадка
                </label>
                <label className='trans_label'>
                    <input type="checkbox" onChange={() => dispatch(twoTransToggle())}/>
                    {twoTransfer? <img className="trans-checkbox" src={check} alt="./img/check_purpure_border.png" /> : 
                                  <img className="trans-checkbox" src={uncheck} alt="./img/uncheck_purpure_border.png" />}
                    2 пересадки
                </label>
                <label className='trans_label'>
                    <input type="checkbox" onChange={() => dispatch(threeTransToggle())}/>
                    {threeTransfer? <img className="trans-checkbox" src={check} alt="./img/check_purpure_border.png" /> : 
                                    <img className="trans-checkbox" src={uncheck} alt="./img/uncheck_purpure_border.png" />}
                    3 пересадки
                </label>
            </div>
        </div>
    );

}
export default Transfer