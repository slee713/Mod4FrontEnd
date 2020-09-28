import React, { Component } from 'react'
import RestCollection from './RestCollection'
import RestMap from './RestMap'
import Sort from '../components/Sort'
import './RestContainer.css'
import Search from '../components/Search'
import Filter from '../components/Filter'

class RestContainer extends Component {
    state={
        restaurants: [],
        displayRestaurants: [],
        start: 0,
        sort: "",
        cuisines: 0,
        cuisineRest: [],
        loading: true
    }

    // componentDidMount(){
    //     let pages = [0, 20, 40,60, 80]      
    //     for (let i=0; i < pages.length; i++) {
    //         fetch(this.props.restUrl+`?start=${pages[i]}`)
    //         .then(res => res.json())
    //         .then(restaurants => {
    //             this.setState({
    //                 restaurants : [ ...this.state.restaurants, ...restaurants],
    //                 displayRestaurants: [ ...this.state.restaurants, ...restaurants],
    //                 loading:false
    //             })
    //         })
    //     }  
    // }

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
        let cuisines = this.state.cuisines
        if (cuisines === 0)
            return this.state.displayRestaurants.slice(this.state.start, this.state.start + 20)
        else if (cuisines>0){
            return this.state.cuisineRest.slice(this.state.start, this.state.start + 20)
        }
    }
    
    cuisineFilter = (value) => {
        console.log(value)
        this.setState({loading: true})
        if (value > 0){
            this.setState({cuisineRest: []})
            let pages = [0, 20, 40, 60, 80]
            for (let i=0; i < pages.length; i++) {
                fetch(this.props.restUrl+`?cuisines=${value}&start=${pages[i]}`)
                .then( res => res.json())
                .then(cuisineRest => {
                    this.setState({
                        cuisineRest:[ ...this.state.cuisineRest, ...cuisineRest],
                        cuisines: value,
                    })
                })
            }
            this.setState({
                loading: false
            })
        }
    }
   

    render(){

        
        return(
            
            <div className="restContainer">
                
                
                <div>
                    <Search search={this.search}/>
                </div>
                { true ? 
                    <div>
                        <div className="sort">
                            <Sort sortBy={this.sortBy} />
                            <button onClick={this.previousPage} > Previous Page</button>
                            <button onClick={() => this.nextPage()}>Next Page</button>
                        </div>
                        <div className='body'>
                            <div className='filter'>
                            <Filter cuisineFilter={this.cuisineFilter}/>
                            </div>
                            {this.state.loading ? 
                            <div> Loading </div>
                            :
                            <RestCollection 
                                status={this.props.status}
                                restaurants={this.displayTwenty()}
                                nextPage={this.nextPage}
                                previousPage={this.previousPage}
                            /> }
                        </div>
                    </div>
                :
                <RestMap />}
            
            </div>
        )
    
    }
}

export default RestContainer