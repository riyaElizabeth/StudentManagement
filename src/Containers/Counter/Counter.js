import  React , {Component} from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import {connect} from 'react-redux'
 
class Counter extends Component{
// state={
//     counter:0
// }

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

<Decrement decrement={this.props.onDecrementCounter}></Decrement>
<Increment increment={this.props.onInrementCounter}></Increment>
<p>count:{this.props.ctr}</p> 
 

     {/* <Decrement> </Decrement>  
        <Increment > </Increment> */}
         </div >

    );
}
}

// const mapStateToProps = state=>{
//     console.log("@@@",state)
//     return{
// ctr:this.state.co 
//}
//}
const mapDispatchToProps=(dispatch,state)=>{
    console.log("@@@",state.counter)
    return{
        onIncrementCounter:()=>dispatch(({type:'Increment'})),
        onDecrementCounter:()=>dispatch(({type:'Decrement'}))
    }
}

export default connect(mapDispatchToProps) (Counter);