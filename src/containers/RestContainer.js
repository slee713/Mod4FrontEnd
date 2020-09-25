import React, { Component } from 'react'
import RestCollection from './RestCollection'
import SortFilter from '../components/SortFilter'
import RestMap from './RestMap'
import RestDesc from '../components/RestDesc'

let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants"
class RestContainer extends Component {
    state={
        restaurants: []
    }

    componentDidMount(){
        fetch(restUrl)
        .then(res => res.json())
        .then(restaurants => this.setState({restaurants}))
    }

    render(){

        
        return(
            <div>
                { true ? <RestCollection restaurants={this.state.restaurants}/> : <RestMap />}
            </div>
        )
    
    }
}

export default RestContainer