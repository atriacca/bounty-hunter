import React from 'react'
// import AddBountyForm from './AddBountyForm.js'
// import { withBounties } from '../context/BountyProvider.js'

const Bounty = props => {
    let { handleSubmitKill, firstName, lastName, living, bountyAmount, type, _id } = props 
    let bgColor, bdImage, fWeight, fontColor, btnColor

    switch(type) {
        case "Sith":
        bdImage ='url("https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg")'
        break
        case "Jedi":
        bdImage ='url("https://i.ytimg.com/vi/dqYvkxzJg7g/hqdefault.jpg")'
        break
        default:
        bgColor = "gray"
    }
    let textDec
    if (living === true) {
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
    // mirroing AddBountyPage
    handleSubmitKill = e => {
        e.preventDefault()
        // this.killedBounty(this.state)
        this.props.killedBounty(this.state)
        this.setState({ living: false })
    }
    
    const styles = {
        textDecorationLine: textDec,
        backgroundImage: bdImage,
        fontWeight: fWeight,
        backgroundColor: bgColor,
        color: fontColor,
        backgroundSize: "100%"
}
        return (
        <div className="container">
            <div style={styles}>
            <h1>{firstName} {lastName}</h1>
            <p>Type: {type}</p>
            <p>Alive: {living.toString()}</p>
            <p>Bounty Amount: {bountyAmount}</p>
            <p>{living && <button onClick={handleSubmitKill}>Click when DEAD!</button>}</p>
            </div>
        </div>
    )
}

export default Bounty
/*
backgroundImage: 'url(${"https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg"})'
    */