import React, {Component} from 'react';

class OnChange extends Component{

    state = {
        user:{
            name:"Initial Value"
        },
        email:"Initial Value@gmail.com"
    }

    updateName(event){
        const newName = event.target.value;
        this.setState({
            user:{
                name: newName
            }
        });
    }

    updateEmail(event){
        const newEmail = event.target.value;
        this.setState({
            email: newEmail
        });
    }

    render(){
        return(
         <div>

            <p>Username: {this.state.user.name}</p>
            <p>Email: {this.state.email}</p>

            <input type="text" onChange={this.updateName.bind(this)} placeholder="Enter a Username"/>
            <br/>
            <input type="email" onChange={this.updateEmail.bind(this)} placeholder="Enter an Email"/>
         </div>
        );
    }
}

export default OnChange;