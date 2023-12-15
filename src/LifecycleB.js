import React,{Component} from "react"

class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"React JS"
        }
        console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true
    }

    componentDidUpdate(prevProps,prevState){
        console.log("LifecycleB componentDidUpdate");
    }

    changeName=()=>{
        this.setState({
            name:"Welcome" 
        })
    }

    render(){
        console.log("LifecycleB render");
        return(
            <div>

                <button className="btn-design3" onClick={this.changeName}>Update</button>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
export default LifecycleB;