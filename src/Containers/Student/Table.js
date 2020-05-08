import React from 'react';
import Student from './Student';
// import ModalExample from './modal';
  


 const Students = [
    { Id:'1', First_Name:'Ann' ,Last_Name:'Mathew',Aggregate_Mark:70},
    { Id:'2', First_Name:'Riya' ,Last_Name:'Eliz',Aggregate_Mark:90},
    { Id:'3', First_Name:'Rehan' ,Last_Name:'Zavi',Aggregate_Mark:80},
    { Id:'4', First_Name:'Sera' ,Last_Name:'Thomas',Aggregate_Mark:50},
    { Id:'5', First_Name:'Aleena' ,Last_Name:'Jacob',Aggregate_Mark:87}
  
]
const app =()=>{

    return (
        <div >
        <Student/>
          {/* <Student lists={Students} /> */}

        </div>
      );
    }



export default app;