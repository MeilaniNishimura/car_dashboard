import {useContext} from 'react'
import CarInventory from '../components/CarInventory'
import CarForm from '../components/CarForm'
import {DataContext} from '../contexts/DataProvider'

export default function Inventory() {
    return (
        <>
            <h1>Inventory</h1>
            <CarForm />
            <CarInventory />
        </>
    )
}