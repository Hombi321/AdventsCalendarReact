import React from 'react'

function Door(props : any) {

    var date = props.item.date
    var number = date.substring(10,8)
    number += "."
    return (
        <section className="Door" onClick={() => props.handleClick(props.item.date)}>
            
           
            <h3>{number}</h3>

            
        </section>
    )
}

export default Door