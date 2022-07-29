import { useState, useContext } from 'react'
import CarInventory from './components/CarInventory'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import CarSingle from './views/CarSingle'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthProvider'

export default function App() {
    const { login, logout, user } = useContext(AuthContext)

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
                    <ul>
                        {
                            (user.loggedIn) ?
                                <li>
                                    <button onClick={logout}>Logout</button>
                                </li>
                                :
                                <li>
                                    <button onClick={login}>Login</button>
                                </li>
                        }
                    </ul>
                </nav>

                <h2>Current User: {user.username}</h2>

                <Routes>
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="Inventory">
                        <Route path=":id" element={<CarSingle />} />
                        <Route path="" element={<Inventory />} />
                    </Route>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}
