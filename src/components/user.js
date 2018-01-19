import React, {Component} from 'react'
import axios from 'axios'

export default class User extends Component {
    constructor(props){
        super(props)

        this.state = {
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

    handleEnter(){
        if(this.state.loggedIn===false){
            axios.post('/api/user', this.state).then((resp)=>{
                this.setState({user:resp.data.user, 
                                rank:resp.data.rank,
                                loggedIn:true})
            })
        }
    }

    render(){
        return(
            <div>
                <div>HELLO, WHAT IS YOUR NAME?</div>
                <form onSubmit={()=> {this.handleEnter()}}>
                    <input onChange={(e)=>this.newUser(e.target.value)} placeholder="your name" />
                    {console.log(this.state.user)}
                    <input type="submit"/>
                </form>
            </div>    
        )
    }
}