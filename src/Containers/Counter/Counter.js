import  React , {Component} from 'react';
import Increment from './Increment';
import Decrement from './Decrement';


class Counter extends Component{

state = {
    count: 0
}
decrement=()=> {
        this.setState(prevState => ({
        count: prevState.count - 1
    }))
}
increment=()=> {
    this.setState(prevState =>({
        count: prevState.count +1
    }), () => {
        console.log("incremenyted")
    })
}



render() {
    return ( < div className = "App" >

<Decrement decrement={this.decrement}></Decrement>
<Increment increment={this.increment}></Increment>
<p>count:{this.state.count}</p>

     {/* <Decrement> </Decrement>  
        <Increment > </Increment> */}
         </div >

    );
}
}
export default Counter;