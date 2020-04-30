import  React , {Component} from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import {connect} from 'react-redux'
 
class Counter extends Component{

state = {
    counter:""

}
// decrement=()=> {
//         this.setState(prevState => ({
//         count: prevState.count - 1
//     }))
// }
// increment=()=> {
//     this.setState(prevState =>({
//         count: prevState.count +1
//     }), () => {
//         console.log("incremenyted")
//     })
// }



render() {
    return ( < div className = "App" >

<Decrement decrement={this.props.onIncrementCounter}></Decrement>
{/* <Increment increment={this.props.onIncrementCounter}></Increment> */}
<p>count:{this.props.ctr}</p> 
 

     {/* <Decrement> </Decrement>  
        <Increment > </Increment> */}
         </div >

    );
}
}

const mapStateToProps = state=>{
    console.log(state)
    return{
ctr:state.counter
}
}
const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter:()=>dispatch(({type:'Increment'}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter);