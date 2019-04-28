import React from 'react'
import BountyList from './components/BountyList.js'
import AddBountyPage from './components/AddBountyPage.js'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Switch>
                <Route 
                    exact path="/"
                    render={(rProps) => <BountyList {...rProps}/>}/>
                <Route 
                    path="/addBounty" 
                    render={(rProps) => <AddBountyPage {...rProps}/>}/>
            </Switch>
        </div>  
    )
}

export default App