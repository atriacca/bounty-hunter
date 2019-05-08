import React, { Component } from 'react'
import AddBountyForm from './AddBountyForm.js'
// import { withBounties } from '../context/BountyProvider.js'

class Bounty extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            living: this.props.living,
            type: this.props.type,
            bountyAmount: this.props.bountyAmount
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            living: this.props.living,
            type: this.props.type,
            bountyAmount: this.props.bountyAmount
        }

        this.props.editBounty(this.props._id, updates)
        this.toggler()
        
    }
    handleSubmitKill = e => {
        e.preventDefault()
        const updates = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            living: this.props.living,
            type: this.props.type,
            bountyAmount: this.props.bountyAmount
        }

        this.props.editBounty(this.props._id, updates)
        // this.toggler()
        
    }
    render(){
    const { firstName, lastName, living, bountyAmount, type, _id, deleteBounty, handleChange, handleSubmit, handleSubmitKill } = this.props 
    let bgColor, textDec, bdImage, fWeight, fontColor, btnColor

    switch(type){
        case "Sith":
        bdImage ='url("https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg")'
        break
        case "Jedi":
        bdImage ='url("https://i.ytimg.com/vi/dqYvkxzJg7g/hqdefault.jpg")'
        break
        default:
        bgColor = "gray"
    }

    if (living === true){
        textDec = 'none'
        fWeight = 800
        fontColor='lightgray'
    } else {
        textDec = 'line-through'
        fWeight = 200
        if (type === 'Sith') {
            bdImage='url("http://weknowyourdreams.com/images/dead/dead-01.jpg")'
            fontColor='lightgray'
            btnColor='black'
        } else {
            bdImage='url("https://cache.pakistantoday.com.pk/dead-body-3.jpg")'
            fontColor='black'
            btnColor='gray'
        }
        // bdImage='url("https://dailypost.in/wp-content/uploads/2017/09/Dead.png")'
    }

    // this.props.killedBounty(this.state)
    // this.setState({ living: false })
    
    const styles = {
        textDecorationLine: textDec,
        backgroundImage: bdImage,
        fontWeight: fWeight,
        backgroundColor: bgColor,
        color: fontColor,
        backgroundSize: "100%",
    }
        return (
        <div className="container">
            <div style={styles}>
            { this.state.editToggle ?
                // syntax for declaring fragments, looks like empty tags but acts as div but without changing parent/chid relationship 
                <>
                    <AddBountyForm 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        living={this.state.living}
                        type={this.state.type}
                        bountyAmount={this.state.bountyAmount}
                        btnText="Edit Bounty"                    />
                        <button onClick={this.toggler}>Close</button>
                </>
            :
                <>
                    <span>
                    <h1>{firstName} {lastName}</h1>
                    <p>Type: {type}</p>
                    <p>Alive: {living.toString()}</p>
                    <p>Bounty Amount: {bountyAmount}</p>
                    <button onClick={() => deleteBounty(_id)}>Delete</button>
                        <button onClick={this.toggler}>Edit</button>
                    <p>{living && <button onClick={handleSubmitKill}>Click when DEAD!</button>}</p>
                    </span>
                </>
            }
            </div>
        </div>
        )
    }
}

export default Bounty
/*
backgroundImage: 'url(${"https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg"})'
    */