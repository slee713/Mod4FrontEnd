import React from 'react'
import RestDesc from './RestDesc'
import './RestCard.css'

// hash = {
//   "American": "image"
// }
import { Card, Image } from 'semantic-ui-react'

const RestCard = (props) => {
    const {name, location, rating, thumb, price_range} = props.restaurant
    return(
    <Card className ="card">
    <Image className="img" src={thumb ? thumb : props.image} wrapped ui={false} />
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
    image: "https://library.kissclipart.com/20181211/lke/kissclipart-home-in-a-circle-icon-clipart-computer-icons-house-e3d4f94631e5fbef.jpg"
  };

export default RestCard
