import React, {Component} from 'react'
import axios from 'axios'

export default class User extends Component{
    constructor(props){
        super(props)

        this.state={
            user: '',
            rank: 0,
            loggedIn: false
        }
    }

    newUser(newName){
        this.setState({
            user:newName
        })
    }

    handleChange(e){
        if(this.state.loggedIn===false){
            axios.post('/api/user', this.state).then((resp)=>{
                this.setState({user:resp.data.user, 
                                rank:resp.data.rank,
                                loggedIn:true})
            })
        }
        console.log(this.state)
    }

    render(){
        console.log("USER", this.state.user)
        return(
            <div>
                <div>CREATE NEW USER</div>
                <form onSubmit={(e)=> {this.handleChange(e)}}>
                    <input onChange={(e)=>this.newUser(e.target.value)} placeholder="your name" />
                    <button type="submit">submit</button>
                </form>
            </div>    
        )
    }
}