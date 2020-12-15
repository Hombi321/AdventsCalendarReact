import React from 'react'
import Cookies from 'universal-cookie';


interface futureDoor{
  type: string;
  link: string;
  message: string;
  id: number;

}
interface Video {
  type: string;
  link: string;
}

function Modal (props : any) {
    

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    var message : any = "DefaultMessage"
    var content; 
    var linkToSource;
    
    if(props.dataTransfered !== undefined && props.dataTransfered !== null){
      var dataId = props.dataTransfered.id;
      var date;
      var dataType;
     if(dataId === -1){
       message = "Die Tür kann noch nicht geöffnet werden."
       var date = props.dataTransfered.date;
       dataType = "Failed"
       linkToSource = "https://cdn.pixabay.com/photo/2017/01/20/14/22/winter-1994979_960_720.jpg"
      content = <img className="imgTag" src={linkToSource}/>

     } else{
       message = props.dataTransfered.date.substring(10, 8) +". Dezember"
       dataType = props.dataTransfered.type
     }
    
    
    
    if(dataType === "Video"){
      linkToSource = props.dataTransfered.link

      content = <iframe className="ytVideo" width="100%" height="720" src={linkToSource} allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    }else if(dataType === "Bild"){
      linkToSource = props.dataTransfered.link
      content = <img className="imgTag" src={linkToSource}/>
    }else if(dataType === "Rezept"){
      linkToSource = props.dataTransfered.link
      content = <iframe className="iframeRezept" src={linkToSource} title="Weihnachts Rezepte">
      </iframe>
    }

      
    }
    
    return (

      <div className={showHideClassName}>
          <div className="containerModal">
                 
          
        <section className="modal-main">
          
          
    <h1 className="modalTitle">{message}</h1> 
    <div className="contentBox">
    {content}
    </div>
          <button className ="closeButton"onClick={props.handleClose}>schliessen</button>  
              
        </section>
   
        </div> 
      </div>
    
    )
  }

   export default Modal