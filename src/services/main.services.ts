import axios from "axios";

export const getMessage = async () => {
    try {
        const response = await axios.get("http://localhost:8081/");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}