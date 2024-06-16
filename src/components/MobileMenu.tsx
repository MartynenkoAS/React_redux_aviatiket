import React, { useState }   from "react";
import Company from "./Company";
import Transfer from "./Transfer";
import arrUp   from '../img/arrow_up.png';
import arrDown from '../img/arrow_down.png';
// import mainTicketsData from "./mockTiketData";


const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hendlerMenueOpen = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="mm-cover">
            <div className="mm-header">
                <div className="mm-header-result">Любая авиакомпания, любое кол-во пересадок</div>
                <div className="mm-header-open">
                    <div className="mm-header-title" onClick={hendlerMenueOpen}>Открыть настройки</div>
                    {isMenuOpen ? <img src={arrUp} alt="../img/arrow_up.png" onClick={hendlerMenueOpen} /> : <img src={arrDown} alt="../img/arrow_down.png" onClick={hendlerMenueOpen} />}
                </div>
            </div>
            {isMenuOpen && ( <div className="mm-aside-open">
                                <Company  colorScheme={true} />
                                <Transfer colorScheme={true} />
                            </div>)}
        </div>
    )
}
export default MobileMenu
