import React from 'react'
import RestDesc from './RestDesc'

// const RestCard = props => {

//     const {name, location, rating, thumb} = props.restaurant

//     return(
//         <div>
//             <h2>{name}</h2>
//             <img src={thumb}/>
//             <h3>Rating: {rating}</h3>
//             <p>{location.address}</p>
//             <RestDesc restaurant={props.restaurant}/>
//         </div>
//     )
// }

// export default RestCard
import { Card, Image } from 'semantic-ui-react'

const RestCard = (props) => {
    const {name, location, rating, thumb, price_range} = props.restaurant
    return(
    <Card>
    <Image src={thumb} wrapped ui={false} />
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
        <RestDesc restaurant={props.restaurant}/>
      </a>
    </Card.Content>
  </Card>
    )
}

export default RestCard
