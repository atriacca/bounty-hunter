import React from 'react'

const AddBountyForm = props => {
    const { handleChange, handleSubmit, firstName, lastName, living, type, bountyAmount } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={firstName} placeholder= "First name" onChange={handleChange}/>
            <input type="text" name="lastName" value={lastName} placeholder= "Last name"  onChange={handleChange}/><br></br>
            <select name="type" onChange={handleChange}>
                <option value="">- Select Jedi or Sith -</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select><br></br>
            <input type="number" name="bountyAmount" value={bountyAmount} placeholder= "Bounty amount" onChange={handleChange}/><br></br>
            <select name="living" onChange={handleChange}>
                <option value="">- Select Live or Dead -</option>
                <option value="true">Live</option>
                <option value="false">Dead</option>
            </select><br></br>
            <button>Add Bounty</button>
        </form>
    )
}

export default AddBountyForm