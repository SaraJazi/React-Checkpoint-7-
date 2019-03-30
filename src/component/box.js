import React, {Component} from "react";



class Box extends Component{            
    constructor(props){
        super(props)

        this.state = {
            path : "",
            title : "",
            description : ""
        }

    }

    onClickChange(nom){

        let newState = {path: "",title:"",description:""};

        if(nom=="Aresslen")
        newState= {path: "./res/l'homme qui voulait etre heureux.jpg",
        title: "Aresslen",
        description:"Aresslen description"};

        else if(nom=="Oumaima")
        newState= {path: "./res/soufi-mon-amour.jpg",
        title: "Oumaima",
        description:"Oumaima description"};

        else 
        newState= {path: "./res/le monde de sophie.jpg",
        title: "Elyes",
        description:"Elyes description"};
        //
      
        

        this.setState(newState);

    }

   
    render() {
		return(<div>
            <div>
            <button onClick={ ()=>{this.onClickChange("Aresslen")}}>Aresslen</button>
            <button onClick={ ()=>{this.onClickChange("Oumaima")}}>Oumaima</button>
            <button onClick={ ()=>{this.onClickChange("Elyes")}}>Elyes</button>
            </div>
            <div>
                <img src={this.state.path}/>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
            </div>

        </div>);
	}
}

export default Box;  