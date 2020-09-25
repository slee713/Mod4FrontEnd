import React, { Component } from 'react'
import RestCollection from './RestCollection'
import SortFilter from '../components/SortFilter'
import RestMap from './RestMap'
import RestDesc from '../components/RestDesc'

let baseUrl= "http://localhost:3000/api/v1/"
let restUrl = baseUrl + "restaurants/"
class RestContainer extends Component {
    state={
        start: 0,
        restaurants: [],
        cuisines: [],
    }

    componentDidMount(){
        fetch(restUrl+this.state.start)
        .then(res => res.json())
        .then(restaurants => this.setState({restaurants}))
    }

    

    nextPage=() => {
        let start = this.state.start + 20
        fetch(restUrl+start)
        .then(res => res.json())
        .then(restaurants => this.setState({start, restaurants}))
    }

    previousPage = () => {
        let start 
        if (this.state.start>0){
            start = this.state.start - 20
        
            fetch(restUrl + start)
            .then(res => res.json())
            .then(restaurants => this.setState({start, restaurants}))
        }
    }

   

    render(){

        
        return(
            <div>
                { true ? 
                <RestCollection 
                    restaurants={this.state.restaurants}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                /> :
                <RestMap />}
            </div>
        )
    
    }
}

export default RestContainer