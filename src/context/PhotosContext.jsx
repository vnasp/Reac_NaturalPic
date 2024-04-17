import { createContext, useState, useEffect } from "react"

export const PhotosContext = createContext()

const PHOTO_URL = "./photos.json"

const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([])
    const [busqueda, setBusqueda] = useState([])
    const [resultadoBusqueda, setResultadoBusqueda] = useState([])
    try {
        const getPhotos = async () => {
            const response = await fetch(PHOTO_URL)
            if (response.status != 200) {
                throw new Error
            }
            const data = await response.json()
            const photosDB = data.photos
            setPhotos(photosDB)
        }
        useEffect(() => {
            getPhotos()
        }, [])
    }
    catch (Error) {
        alert({ Error })
    }
    return (
        <PhotosContext.Provider value={{ photos, setPhotos,busqueda, setBusqueda, resultadoBusqueda,setResultadoBusqueda }}>
            {children}
        </PhotosContext.Provider>
    )
}
export default PhotosProvider