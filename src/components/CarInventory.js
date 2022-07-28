import {useEffect, useState, useContext} from 'react'
import Car from './Car'
import { DataContext } from '../contexts/DataProvider'

export default function CarInventory() {
    const { cars } = useContext(DataContext)
     
    //useEffect(() => {
    //    fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
    //    .then((res) => res.json())
    //    .then((data) => setCars(data))
    //}, [])


    return (
    <>
    {
        cars.map(car => <Car car={car} key={car.id} />)

    }
    </>
)
}