import React from 'react'
import Door from './Door'
import AdventData from './DoorData.json'
import DataFromREST from './DataFromREST'
import DoorModal from './DoorModal'
import Modal from './Modal'
import Cookies from 'universal-cookie';


class App extends React.Component {

    
    constructor(props) {
        super(props)
        this.state = {
            show : false,
            adventsData:[],
        modalData: null        }
        this.handleDate = this.handleDate.bind(this)
        this.componentDidMount = this.componentDidMount(this)
        this.hideModal = this.hideModal.bind(this)
        
        
    }
    
    componentDidMount(){

        const cookies = new Cookies();
        cookies.set('testCookie', 'test', {path: '/'});
        
        
        DataFromREST.testConnection();
        
        DataFromREST.getInitialData().then(response => {
            
            const door = response.data;
            this.setState({adventsData: response.data})
        });
    }

    wrappInRows(doors){
        
        var returnString = ("<div className =\"row\">") 
        doors.map(door => {
            alert(door.id)
            returnString  = returnString+ door
        return ("")
        })
        returnString = returnString + "</div>"
        return(returnString)
    }
    showModal = () => {
        this.setState({ show: true });
      };

    hideModal = () => {
        this.setState({ show: false });
      };
    
    handleDate(date){

        <DoorModal />
       
        DataFromREST.postData(date).then(res => {
            
            
            this.setState({
                modalData: res.data,
                show: true
            });
            
           
           
            
        
        })
        
    }
    render(modal) {
        
        const doors = this.state.adventsData.map(item => {
            
       return(<Door key={item.id} item={item} handleClick={this.handleDate}/>)
        
        
    })

    //  
        return (
            <div className="container">
                  <Modal dataTransfered={this.state.modalData} show={this.state.show} handleClose={this.hideModal}></Modal>
                {doors}
            </div>
        )    
    }

    

}

export default App
