import React, { Component } from 'react'
import RestCollection from './RestCollection'
import RestMap from './RestMap'
import RestDesc from '../components/RestDesc'
import Sort from '../components/Sort'

class RestContainer extends Component {
    state={
        fetch: true,
        restaurants: [],
        start: 0,
        sort: ""
    }

    componentDidMount(){
        let pages = [0, 20, 40,60, 80]
        if (this.state.fetch){
            this.setState({ restaurants: []})
            for (let i=0; i < pages.length; i++) {
                fetch(this.props.restUrl+`?start=${pages[i]}`)
                .then(res => res.json())
                .then(restaurants => {
                    this.setState({
                        restaurants : [ ...this.state.restaurants, ...restaurants]
                    })
                })
            }
            this.setState({fetch: false})
        }
    }

    sortBy = (value) => {
        let restaurants = this.state.restaurants
        let sort = value
        switch (value){
            case "ratingASC":
                restaurants = restaurants.sort((a,b) => a.rating - b. rating)
                break
            case "ratingDESC":
                restaurants = restaurants.sort((a,b) => b.rating > a.rating ? 1 : -1)
                break;
            case "priceASC":
                restaurants = restaurants.sort((a,b) => a.price_range - b.price_range)
                break;
            case "priceDESC":
                restaurants = restaurants.sort((a,b) => b.price_range > a.price_range ? 1 : -1)
                break;
            case "alphaASC":
                restaurants = restaurants.sort((a,b) => a.name > b.name ? 1 : -1)
                break;
            case "alphaDESC":
                restaurants = restaurants.sort((a,b) => b.name > a.name ? 1 : -1)
                break;
        }
        this.setState({restaurants, sort})
    }

    

    nextPage=() => {
        let start = this.state.start
        if (start < 80){
            start = start + 20
            this.setState({ start })
        }
    }

    previousPage = () => {
        let start = this.state.start
        if (start>0){
            start = start - 20
            this.setState({ start })
        }
    }

    displayTwenty = () => {
        return this.state.restaurants.slice(this.state.start, this.state.start + 20)
    }

   

    render(){

        
        return(
            <div>
                { true ? 
                <div>
                <Sort sortBy={this.sortBy} />
                <RestCollection 
                    restaurants={this.displayTwenty()}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                /> 
                </div>:
                <RestMap />}
            </div>
        )
    
    }
}

export default RestContainer