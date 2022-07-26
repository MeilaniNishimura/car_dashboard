import { Link } from 'react-router-dom'

export default function CarInventory(props) {

    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/Inventory/" + props.car.id}>
                    {props.car.id}: {props.car.name}
                    <p>Year: {props.car.year}</p>
                    <p>Price: {props.car.selling_price}</p>
                    <p>Transmission: {props.car.transmission}</p>
                    <p>Mileage: {props.car.mileage}</p>
                </Link>
            )
        } else {
            resHeader = (
                <>{props.car.id}: {props.car.name}
                    <p>Year: {props.car.year}</p>
                    <p>Price: {props.car.selling_price}</p>
                    <p>Transmission: {props.car.transmission}</p>
                    <p>Mileage: {props.car.mileage}</p>
                </>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                {buildHeader()}
            </h2>
            <p>{props.car.date_created}</p>
        </div>
    )
}







//export default function CarInventory(props) {
//    console.log(props)
//
//    return(
//        <div className="card">
//            <h2>{props.car.make }</h2>
//            <h2>{props.car.model }</h2>
//            <h2>{props.car.color }</h2>
//            <h2>{props.car.year }</h2>
//        </div>
//    )
//}