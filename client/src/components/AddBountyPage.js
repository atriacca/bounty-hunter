import React, { Component } from 'react'
import AddBountyForm from './AddBountyForm.js'
import { withBounties } from '../context/BountyProvider.js'
// import { BountyList } from '../context/BountyList.js'

class AddBountyPage extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmount: "",
            type: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addNewBounty(this.state)
        this.setState({ firstName: "", lastName: "", living: true, bountyAmount: "", type: "" })
    }

    render(){
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back</button>
                {/* <button onClick={getBounties}>Get Bounties</button> */}
                <AddBountyForm 
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default withBounties(AddBountyPage)