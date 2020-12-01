import axios from 'axios'
import { CONNREFUSED } from 'dns'
import { AxiosResponse, AxiosError } from 'axios'

//const USER_DATA_LINK = 'http://localhost:8080/advent/test'
//const USER_DATA_LINK_POST = 'http://localhost:8080/advent/post'
//const USER_DATA_LINK = 'https://adventskalender-backend.herokuapp.com/advent/test'
const DOOR_DATA_LINK_POST = 'https://adventskalender-backend.herokuapp.com/advent/post'
const DOOR_DATA_LINK_INITIAL = 'https://adventskalender-backend.herokuapp.com/advent/initial'
const DOOR_DATA_LINK_TESTCONNECTION = 'https://adventskalender-backend.herokuapp.com'
// Local Variables Change bevore Commit
const L_DOOR_DATA_LINK_POST = 'http://localhost:8080/advent/post'
const L_DOOR_DATA_LINK_INITIAL = 'http://localhost:8080/advent/initial'
const L_DOOR_DATA_LINK_TESTCONNECTION = 'http://localhost:8080/22'


class DataFromREST {

    testConnection(){

    }

    getInitialData(){
        return axios.get(DOOR_DATA_LINK_INITIAL);
    }

  /*  getData(){
        return axios.get(USER_DATA_LINK);

    }
*/
    postData(date : string){

        return axios.post(DOOR_DATA_LINK_POST+'?date='+date )
    }

}

export default new DataFromREST();

