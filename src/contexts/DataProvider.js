import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'


export const DataContext = createContext()

export const DataProvider = (props) => {
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)

    const db = getFirestore()

    useEffect(() => {
        const getCars = async () => {

            const collectionRef = collectionGroup(db,"cars")
            const q = query(collectionRef, orderBy('Name'))
            const collectionSnap = await getDocs(q)

            let carsArr = []

            collectionSnap.forEach((docSnap) => {
                carsArr.push({
                    ...docSnap.data(),
                    id: docSnap.id
                })
            })

            console.log(carsArr)

            setCars(carsArr)
        }
        getCars()
    }, [])

    const getCarSingle = async (id) => {
        const collectionRef = collectionGroup(db, "cars")
        const q = query(collectionRef, orderBy('Name'))
        const collectionSnap = await getDocs(q)

        let carsArr = []

        let resultDoc = {}

        collectionSnap.forEach((docSnap) => {
            if (docSnap.id === id) {
                resultDoc = {
                    id: id,
                    ...docSnap.data()
                }
            }
        })

        return resultDoc

    }

    const addCar = async (Name, Year, Price, Transmission, Mileage) => {
        if (!user.loggedIn) {
            throw new Error("You can't add a post if you're not logged in.")
        }

        const newCar = {

            Name: Name,
            Year: Year,
            Price: Price,
            Transmission: Transmission,
            Mileage: Mileage,

        }

        const docRef = await addDoc(collection(db, "users", user.id, "cars"), newCar)

        newCar.id = docRef.id

        setCars([newCar, ...cars])

        console.log(docRef)
        console.log("New car added", docRef.id)
    }

    const values = {
        cars,
        getCarSingle,
        addCar
    }

    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    )
}

//    const getCarSingle = async (id) => {
//        const docRef = doc(db, "cars", id)
//        const docSnap = await getDoc(docRef)
//
//        if (docSnap.exists()) {
//            return {
//                ...docSnap.data(),
//                id: docSnap.id
//            }
//        } else {
//            console.log("The document did not exist")
//        }
//    }
//
//    const addCar = async(Name, Year, Price, Transmission, Mileage ) => {
//        const newCar = {
//
//            Name,
//            Year,
//            Price,
//            Transmission,
//            Mileage,
//          
//
//        }
//        const docRef = await addDoc (collection(db, "cars"), newCar) 
//        
//        newCar.id = docRef.id
//
//        setCars([newCar, ...cars])
//        
//        console.log(docRef)
//        console.log("New car added", docRef.id)
//    }
//
//    const values = {
//        cars,
//        getCarSingle,
//        addCar
//    }
//
//    return (
//        <DataContext.Provider value={values}>
//            { props.children }
//        </DataContext.Provider>
//    )
//}