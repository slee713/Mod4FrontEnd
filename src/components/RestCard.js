import React from 'react'
import RestDesc from './RestDesc'
import './RestCard.css'

// hash = {
//   "American": "image"
// }
import { Card, Image } from 'semantic-ui-react'

const RestCard = (props) => {
  
    const {name, location, rating, thumb, price_range} = props.restaurant
    
    
    const rest_cuisine = props.restaurant.cuisines.split(',')[0].toLowerCase()
    const available_cuisines = ['american', 'afghan', 'chinese', 'french', 'greek', 'indian', 'italian', 'korean', 'mexican', 'middle eastern', 'pakistani', 'seafood', 'thai', 'turkish', 'vegetarian']
    

    return(
    <Card className ="card">
    <Image className="img" src={thumb ? thumb : available_cuisines.includes(rest_cuisine) ? require(`../cuisine_images/${rest_cuisine}.jpg`) : props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        <p>{`${location.address}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Price Range: ${price_range}`}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <RestDesc status={props.status} restaurant={props.restaurant} image={props.image}/>
      </a>
    </Card.Content>
  </Card>
    )
}
// hash[cuisine.split(", ")[0]]

RestCard.defaultProps = {
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
  };

export default RestCard
