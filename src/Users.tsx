import React from 'react'



function Users(props : any){
    const styleString = {color: "black", backgroundColor: "grey"}
return(<div style={styleString}>
<hr/>
<h3>Firstname: {props.firstName}</h3>
<h3>Lastname: {props.lastName}</h3>
<h3>Phonenumber: {props.phoneNumber}</h3>
<h3>E-Mail: {props.email}</h3>
<hr />
</div>)
}

export default Users