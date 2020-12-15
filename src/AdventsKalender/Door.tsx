import { access } from 'fs'
import { stringify } from 'querystring'
import React from 'react'
import { getDefaultCompilerOptions } from 'typescript'
import Cookies, { Cookie } from 'universal-cookie'
import DataFromREST from './DataFromREST'

export interface Door{
id:number
type: 'FAIL' | 'Bild' | 'Video' | 'Rezept'
link: string
date: Date
}

export interface DoorProps{
    item: Door
    doorData: Cookies
    
    checkDate: (date : string) => any
}


const Door = (props : DoorProps) => {
   
    
    var date = new Date(props.item.date);
    var date2 : string = date.toISOString();
    date2 = date2.substring(0,10);
    var number = new Date(props.item.date).getDate()+'.'
   // number += "." //Adding . to the Number, for displaying on front of the door
    var classNameVariable = "Door" //Chose the Style of the Door, Default: Door. Posibilities: Door, OppenedDoor
   // props.checkDate()
    

    
    let array = props.doorData.get('oppenedDoors') != undefined ? props.doorData.get('oppenedDoors') : [] //Creating an array, with all the IDs of doors which are stored in the cookies. 
    
    
    //TODO: Create method, which gets true or false from server, and waits to this response, bevore fullfiling the code.
    
   
    

    // 
    
    
    if(array.includes(props.item.id)){
        classNameVariable = "OpenedDoor"
    } 
    

    //return the Door
    return (
        <section className={classNameVariable} onClick={ () => props.checkDate(date2)}>
            
           
            <h3>{number}</h3>

            
        </section>
    )
}



export default Door