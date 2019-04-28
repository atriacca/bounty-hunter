import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()
// Provider,  Consumer

export default class BountyProvider extends Component{
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }
 
    getBounties = () => {
        axios.get("/bounties")
            .then(res => {
                this.setState({ bounties: res.data })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    addNewBounty = newBounty => {
        axios.post("/bounties", newBounty)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
        }

    removeKilledBounty = _id => {
        axios.put("/bounties/", {living: false})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

   render(){
       return (
           <BountyContext.Provider
           value={{
               ...this.state,
               removeKilledBounty: this.removeKilledBounty,
               getBounties: this.getBounties,
               addNewBounty: this.addNewBounty
            }}>
                { this.props.children }
            </BountyContext.Provider>
        )
    }
}

export const withBounties = C => props => (
    <BountyContext.Consumer>
        {value => <C {...value} {...props}/>}
    </BountyContext.Consumer>
)
