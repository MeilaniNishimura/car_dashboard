import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function CarForm() {
    const { addCar } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        addCar(data.Name, data.Year, data.Price, data.Transmission, data.Mileage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="Year">Year</label>
                <input type="text" name="Year" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="Price">Price</label>
                <input type="text" name="Price" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="Transmission">Transmission</label>
                <input type="text" name="Transmission" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="Mileage">Mileage</label>
                <input type="text" name="Mileage" id="" />
            </div>
            <button type="submit">Add Car</button>
        </form>
    )
}