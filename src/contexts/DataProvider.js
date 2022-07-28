import { createContext, useState, useEffect } from "react"
import { getFirestore, getDoc, getDocs, collection, doc } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [cars, setCars] = useState([])
    const db = getFirestore()

    useEffect(() => {
        const getCars = async() => {
            
            const collectionRef = collection(db, "cars")
            const collectionSnap = await getDocs(collectionRef)

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
        const docRef = doc(db, "cars", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: docSnap.id
            }
        } else {
            console.log("The document did not exist")
        }
    }

    const values = {
        cars,
        getCarSingle
    }

    return (
        <DataContext.Provider value={values}>
            { props.children }
        </DataContext.Provider>
    )
}