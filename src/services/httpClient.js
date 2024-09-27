import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx"

export default function httpClient() {

    const { setIsLoadingForTrue, setIsLoadingForFalse } = useContext(GlobalContext)

    async function get(rota, jwt) {

        setIsLoadingForTrue()

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

                setIsLoadingForFalse()

                return response
            })
            .catch((err) => {

                setIsLoadingForFalse();

                // tratar o erro

            })

    }

    async function post(rota, data, jwt) {

        setIsLoadingForTrue()

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

                setIsLoadingForFalse()

                return response
            })
            .catch((err) => {

                setIsLoadingForFalse();

                // tratar o erro

            })
    }

    async function put(rota, data, jwt) {

        setIsLoadingForTrue()

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

                setIsLoadingForFalse()

                return response
            })
            .catch((err) => {

                setIsLoadingForFalse();

                // tratar o erro

            })
        
    }

    async function deleteOne(rota, jwt) {

        setIsLoadingForTrue()

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

                setIsLoadingForFalse()

                return response
            })
            .catch((err) => {

                setIsLoadingForFalse();

                // tratar o erro

            })

    }

    async function patch(rota, data, jwt) {
        setIsLoadingForTrue();

        let config = {};

        if (jwt) {
            config = {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            };
        }

        const jsonData = JSON.stringify(data);

        return await axios.patch(rota, jsonData, config)
            .then((response) => {
                setIsLoadingForFalse();
                return response;
            })
            .catch((err) => {

                setIsLoadingForFalse();

                // tratar o erro
                
            });
    }

    return {
        get,
        post,
        put,
        patch,
        deleteOne
    }

}