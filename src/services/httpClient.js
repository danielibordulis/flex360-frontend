import axios from "axios";

export default function httpClient() {

    async function get(rota, jwt) {

        // setLoading(true)

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

                // setLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })

    }

    async function post(rota, data, jwt) {

        // setLoading(true)

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

                // setLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })
    }

    async function put(rota, data, jwt) {

        // setLoading(true)

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

                // setLoading(false)

                return response
            })
            .catch((err) => {

                // tratar o erro

            })
        
    }

    async function deleteOne(rota, jwt) {

        // setLoading(true)

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

                // setLoading(false)

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