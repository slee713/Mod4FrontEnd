import React, { Component } from 'react'
import RestCollection from './RestCollection'
import RestMap from './RestMap'
import RestDesc from '../components/RestDesc'
import Sort from '../components/Sort'
import './RestContainer.css'
import Search from '../components/Search'
import Filter from '../components/Filter'

class RestContainer extends Component {
    state={
        fetch: true,
        restaurants: [],
        displayRestaurants: [],
        start: 0,
        sort: "",
        cuisines: []
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
                        restaurants : [ ...this.state.restaurants, ...restaurants],
                        displayRestaurants: [ ...this.state.restaurants, ...restaurants]
                    })
                })
            }
            this.setState({fetch: false})
        }
    }

    search = (e) => {
        e.preventDefault()
        // make fetch to resturl
    }

    sortBy = (sort) => {
        let displayRestaurants = this.state.restaurants
        
        switch (sort){
            case "ratingASC":
                displayRestaurants = displayRestaurants.sort((a,b) => a.rating - b.rating)
                break
            case "ratingDESC":
                displayRestaurants = displayRestaurants.sort((a,b) => b.rating - a.rating)
                break;
            case "priceASC":
                displayRestaurants = displayRestaurants.sort((a,b) => a.price_range - b.price_range)
                break;
            case "priceDESC":
                displayRestaurants = displayRestaurants.sort((a,b) => b.price_range - a.price_range)
                break;
            case "alphaASC":
                displayRestaurants = displayRestaurants.sort((a,b) => a.name.localeCompare(b.name))
                break;
            case "alphaDESC":
                displayRestaurants = displayRestaurants.sort((a,b) => b.name.localeCompare(a.name))
                break;
        }
        this.setState({displayRestaurants, sort})
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
        return this.state.displayRestaurants.slice(this.state.start, this.state.start + 20)
    }
    
    cuisineFilter = (values) => {
        console.log(values)
        this.setState({cuisines: [...values]})
    }
   

    render(){

        
        return(
            <div className="restContainer">
                { true ? 
                <div>
                    <div>
                        <Search search={this.search}/>
                    </div>
                    <div className="sort">
                        <Sort sortBy={this.sortBy} />
                        <button onClick={this.previousPage} > Previous Page</button>
                        <button onClick={() => this.nextPage()}>Next Page</button>
                    </div>
                    <div className='body'>
                        <div className='filter'>
                        <Filter cuisineFilter={this.cuisineFilter}/>
                        </div>
                    <RestCollection 
                        restaurants={this.displayTwenty()}
                        nextPage={this.nextPage}
                        previousPage={this.previousPage}
                    /> 
                    </div>
                </div>:
                <RestMap />}
            </div>
        )
    
    }
}

export default RestContainer