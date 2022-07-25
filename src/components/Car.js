export default function CarInventory(props) {
    console.log(props)

    return(
        <div className="card">
            <h2>{props.car.make }</h2>
            <h2>{props.car.model }</h2>
            <h2>{props.car.color }</h2>
            <h2>{props.car.year }</h2>
        </div>
    )
}