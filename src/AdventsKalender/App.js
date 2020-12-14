import React, { useState } from 'react'
import Door from './Door'
import AdventData from './DoorData.json'
import DataFromREST from './DataFromREST'
//
import Modal from './Modal'
import Cookies from 'universal-cookie';


class App extends React.Component {

    
    constructor(props) {
        super(props)
        this.state = {
            show : false,
            adventsData:[],
        modalData: null,
        cookie : new Cookies()       }
        this.handleDate = this.handleDate.bind(this)
        this.componentDidMount = this.componentDidMount(this)
        this.hideModal = this.hideModal.bind(this)
        this.addDoorToCookie = this.addDoorToCookie.bind(this)
        
        
        
    }

    addDoorToCookie(id){

        let cookie =  this.state.cookie
        let array = cookie.get('oppenedDoors') != undefined ? cookie.get('oppenedDoors') : []
        
        if(!array.includes(id)){
        array.push(id)
        }
       
        
        cookie.set('oppenedDoors', array ,{
            path: '/',
            expires: new Date(Date.now()+2592000000),
        });

        console.log(cookie.get('oppenedDoors'))
        
    }
    
    componentDidMount(){
        const cookie = new Cookies();

    
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

        
       
        DataFromREST.postData(date).then(res => {
            
            if(res.data.type !== 'FAIL'){
                this.addDoorToCookie(res.data.id)
            }
            
            this.setState({
                
                modalData: res.data,
                show: true
            });
            
           
           
            
        
        })
        
    }
    render(modal) {
        
        const doors = this.state.adventsData.map(item => {
            
       return(<Door key={item.id} item={item} handleClick={this.handleDate} addToCookie={this.addDoorToCookie} doorData={this.state.cookie}/>)
        
        
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
