import axios from 'axios'

const USER_DATA_LINK = 'http://localhost:8080/advent/test'
const USER_DATA_LINK_POST = 'http://localhost:8080/advent/post'

class DataFromREST {

    getData(){
        return axios.get(USER_DATA_LINK);

    }

    postData(date : string){

        return axios.post(USER_DATA_LINK_POST+'?date='+date )
    }

}

export default new DataFromREST();

