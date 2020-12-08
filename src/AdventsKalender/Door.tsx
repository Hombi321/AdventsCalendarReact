import { access } from 'fs'
import React from 'react'
import DataFromREST from './DataFromREST'

const Door = (props : any) => {

    var date = props.item.date
    var number = date.substring(10,8)
    number += "." //Adding . to the Number, for displaying on front of the door
    var classNameVariable = "Door" //Chose the Style of the Door, Default: Door. Posibilities: Door, OppenedDoor
    
    

    
    let array = props.doorData.get('oppenedDoors') != undefined ? props.doorData.get('oppenedDoors') : [] //Creating an array, with all the IDs of doors which are stored in the cookies. 
    
    
    //TODO: Create method, which gets true or false from server, and waits to this response, bevore fullfiling the code.
    
   
    

    // 
    
    
    if(array.includes(props.item.id)){
        classNameVariable = "OpenedDoor"
    } 
    

    //return the Door
    return (
        <section className={classNameVariable} onClick={() => (props.handleClick(props.item.date))}>
            
           
            <h3>{number}</h3>

            
        </section>
    )
}



export default Door