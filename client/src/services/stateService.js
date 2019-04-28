import axios from 'axios'


// Makes request to route

export default {
    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    },

    //This determines what states have been visited
    setVisited(stateName, visited) {
        return axios.patch('/api/state/' + stateName, {visited: visited}).then(response => {
            return response.data
        })
    },

    getOne(stateName) {
        return axios.get('/api/states/' + stateName).then( response => {
            return response.data
        })
    }
}