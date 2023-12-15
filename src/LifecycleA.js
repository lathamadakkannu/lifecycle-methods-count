import React,{Component} from "react"
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true
    }

    componentDidUpdate(prevProps,prevState){
        console.log("LifecycleA componentDidUpdate");
    }

    changeCount=()=>{
        this.setState({
            count:this.state.count+1 
        })
    }

    DecreCount=()=>{
        this.setState({
            count:this.state.count>0?this.state.count-1:0 
        })
    }
    
    render(){
        console.log("LifecycleA render");
        return(
            <div className="design">
                <h2 className="head">Using Lifecycle Methods : </h2>
                <button className="btn-design1" onClick={this.changeCount}>Count Increase</button>
                <button className="btn-design2" onClick={this.DecreCount}>Count Decrease</button>

                <h2>{this.state.count}</h2>

                <LifecycleB/>
            </div>
        )
    }
}
export default LifecycleA;