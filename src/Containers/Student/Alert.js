import React, { Component }  from 'react';
import {Alert,Button} from 'reactstrap';import { connect } from 'react-redux';

class Allert extends Component{
// console.log("PROPS",this.props)
render(){
    if(this.props.show){
    return( <div>
<Alert variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() =>{this.setShow()}} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>
      </div>)
      }
      
      else{
      return(
      
          <p>hjhjk</p>
      )}}}
const mapStateToProps=(state)=>{
    console.log("STATE IN MODAL",state)
    return{
        studentout:state.students,
        show:state.show
    
     


    }
    
}
      export default connect(mapStateToProps)(Allert);