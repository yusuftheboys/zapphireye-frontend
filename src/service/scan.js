import axios from "../api/axios"

export const getScan = async () => {
    try {
        const response = await axios.get('/api/scan')
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const startScan = async () => {
    try {
        const response = await axios.post()
    } catch (err) {
        console.log(err)
    }
}