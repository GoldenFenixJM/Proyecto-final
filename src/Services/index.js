import axios from "axios";

const localhostServer = "http://localhost:3003"
const dataPath = "add-data"
export const addDataCart = async (item) => {

    const { title, description, price, thumbnail } = item

    const response = await axios.post(`${localhostServer}/${dataPath}`, {
         
            title,
            description,
            price,
            thumbnail
        
    })

    console.log('response', response)

}