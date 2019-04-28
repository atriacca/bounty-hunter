import React from 'react'

const Bounty = props => {
    const { handleClickKill, firstName, lastName, Living, bountyAmount, type, _id } = props 
    let bgColor, bdImage, fWeight

    switch(type) {
        case "Sith":
        bdImage='url("https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg")'
        break
        case "Jedi":
        bdImage='url("https://i.ytimg.com/vi/dqYvkxzJg7g/hqdefault.jpg")'
        break
        default:
        bgColor="gray"
    }
    let textDec
    if (Living === true) {
        textDec = 'none'
        fWeight = 800
    } else {
        textDec = 'line-through'
        fWeight = 200
    }
        const styles = {
        div: {
            textDecorationLine: textDec,
            backgroundImage: bdImage,
            fontWeight: fWeight,
            backgroundColor: bgColor,
            backgroundSize: "100%"
        }
    }
    // handleClickKill = e => {
    //     e.preventDefault()
    //     this.props.removeKilledBounty(this.state)
    //     this.setState({ Living: false })
    // }
    
    // function noKilledButton(){
    //     '<button onClick={handleClickKill}>Killed</button>'
    // }
        return (
        <div style={styles.div} className="box">
        <h1>{firstName} {lastName}</h1>
            <p>Type: {type}</p>
            <p>Living: {Living.toString()}</p>
            <p>Bounty Amount: {bountyAmount}</p>
            <button onClick={handleClickKill}>KILLED</button>
            {/* {noKilledButton} */}
        </div>
    )
}

export default Bounty
// <p>Type: {type[0].toUpperCase() + type.slice(1)}</p> 

/*
backgroundImage: 'url(${"https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/everysithever1280-1481006742865.jpg"})'
    */