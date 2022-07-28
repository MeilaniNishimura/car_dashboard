import CarInventory from '../components/CarInventory'
import CarForm from '../components/CarForm'

export default function Inventory() {
    return (
        <>
            <h1>Inventory</h1>
            <CarForm />
            <CarInventory />
        </>
    )
}