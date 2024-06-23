import Pobeda from '../img/Pobeda.png'
import RedWings from '../img/RedWings.png'
import Sseven from '../img/S7.png'
import Aeroflot from '../img/Aeroflot.png'
// import Tiket from '../components/mockTiketData'


const TiketCard = ( props ) => {
    
    const {ticketsSort} = props;

    const companyLogo = (name: string) => {
        switch (name) {
            case "Pobeda":
                return Pobeda;
            case "RedWings":
                return RedWings;
            case "Sseven":
                return Sseven;
            case "Aeroflot":
                return Aeroflot;
            default:
                return name;
        }
    }
    
    return (
        <>
            {ticketsSort.map((elem) => { return <div key={elem.id} className="ticket-card"> 
                <div className="ticked-card-box">
                    <div className="ticked-card-price">{`${Intl.NumberFormat("ru").format(elem.price)} P`}</div>
                    <div className="ticked-card-ligtText">{`${elem.from} - ${elem.to}`}</div>
                    <div className="ticked-card-darkText">{`${elem.time.startTime} - ${elem.time.endTime}`}</div>
                </div>
                <div className="ticked-card-box">
                    <div className="ticked-card-price"></div>
                    <div className="ticked-card-ligtText">В пути</div>
                    <div className="ticked-card-darkText">{`${Math.floor(elem.duration / 60)} ч ${elem.duration % 60} мин`}</div>
                </div>
                <div className="ticked-card-box">
                    <img className="ticked-card-logo" src={companyLogo(elem.company)} alt="../img" />
                    <div className="ticked-card-ligtText">Пересадки</div>
                    <div className="ticked-card-darkText">{elem.connectionAmount === 0 ? "Без пересадок" : `${elem.connectionAmount} 
                                                    пересадк${elem.connectionAmount > 1 ? "и" : "а"}`}</div>
                </div>
            </div>
            })}
        </>
    )
}

export default TiketCard