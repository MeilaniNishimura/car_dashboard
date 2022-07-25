import {useState} from 'react'
import Car from './Car'

export default function CarInventory() {
    const [cars, setCars] = useState([
        {
            id:0,
            make: "Toyota",
            model: "4Runner",
            color: "Black",
            year: 2022
        },
        {
            id:1,
            make: "Ford",
            model: "Mustang",
            color: "White",
            year: 1997

        },
        {
            id:2,
            make: "Toyota",
            model: "Corolla",
            color: "Red",
            year: 2017
        }
    ])


return (
    <>
    {
        cars.map(car => <Car car={car} key={car.id} />)

    }
    </>
)
}