import React, { useState } from 'react';
import ring_dark     from "../img/ring_purpure_full.png";
import unring_dark   from "../img/ring_purpure_empty.png";
import ring_light    from "../img/ring_white_full.png";
import unring_light  from "../img/ring_white_empty.png";
import mainTicketsData from './mockTiketData';

type PropsType = {colorScheme:boolean}
type CompanyArrType = [{comp:string, tag: boolean}];

const Company = ( {colorScheme}: PropsType ) => {

    const companyArr: CompanyArrType = [];
    mainTicketsData.forEach((elem) => {
        if (companyArr.find(elm => elm.comp === elem.company) === undefined) {
            const newComp = {comp: elem.company, tag: false}
            companyArr.push(newComp);
        }
    });

    const companySwitch = (index: number) => {
        companyArr[index].tag = !companyArr[index].tag;
        console.log(companyArr[index])
    }
    const ring:   string = colorScheme ? ring_light   : ring_dark;
    const unring: string = colorScheme ? unring_light : unring_dark;

    return (
        <div className="trans_wrapper">
            <p className='aside-p'>Компании</p>
            
            {<div className='aside-label'>
                {companyArr.map((elem, index) => { return <label className='trans_label' key={"cc"+index}>
                    <input type="checkbox" onChange={() => companySwitch(index)}/>
                    {elem.tag === true ? <img className="company-checkbox" src={ring}   alt="../img/ring_purpure_full.png" /> : 
                                         <img className="company-checkbox" src={unring} alt="../img/ring_purpure_empty.png" />}
                    {elem.comp}
                </label>})}
            </div>}
        </div>
        );
        
}
export default Company