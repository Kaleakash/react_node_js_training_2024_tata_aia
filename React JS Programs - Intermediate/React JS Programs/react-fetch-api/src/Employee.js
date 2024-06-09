import { Component } from "react";

class Employee extends Component {

    constructor(props){
        super(props);            // it is use to call super class constructor 
        console.log("object created...")
        this.state={name:"Ravi"}        // useState 
        this.info = {age:21}
    }

    render(){
        // coding...


        return(
            <div>
                <h3>Class style component</h3>
                <p>Name is {this.state.name} age is {this.info.age} city is {this.props.city}</p>
            </div>
        )
    }
}

export default Employee;