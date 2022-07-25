import { useState } from 'react'
import CarInventory from './components/CarInventory'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/Profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/Inventory" element={<Inventory />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/" element={<Home />}  />
                </Routes>
            </Router>
        </>
    )
}
