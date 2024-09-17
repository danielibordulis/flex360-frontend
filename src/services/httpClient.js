import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx"

export default function httpClient() {

    const { setIsLoading } = useContext(GlobalContext)

    async function get(rota, jwt) {

        setIsLoading(true)

        let config = {}

        if (jwt) {
            config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        }

        return await axios.get(rota, config)
            .then((response) => {

                setIsLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })

    }

    async function post(rota, data, jwt) {

        setIsLoading(true)

        let config = {}

        if (jwt) {
            config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        }

        const jsonData = JSON.stringify(data)

        return await axios.post(rota, jsonData, config)
            .then((response) => {

                setIsLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })
    }

    async function put(rota, data, jwt) {

        setIsLoading(true)

        let config = {}

        if (jwt) {
            config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        }

        let jsonData = {}

        if (data) {
            jsonData = JSON.stringify(data)

        }
        
        return await axios.put(rota, jsonData, config)
            .then((response) => {

                setIsLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })
        
    }

    async function deleteOne(rota, jwt) {

        setIsLoading(true)

        let config = {}

        if (jwt) {
            config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        }

        return await axios.delete(rota, config)
            .then((response) => {

                setIsLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })

    }

    return {
        get,
        post,
        put,
        deleteOne
    }

}