import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ReservationForm from './ReservationForm'

const RestDesc = props => {
    const [open, setOpen] = React.useState(false)
    const {name, id, location, featured_img, cuisines, phone_numbers, price_range, rating} = props.restaurant
    return(
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>More Info</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={featured_img ? featured_img : props.image} wrapped />
        <Modal.Description>
          {/* <Header>Default Profile Image</Header> */}
          <p>
            Cuisine: {cuisines}
          </p>
          <p>
              Price range: {price_range}
          </p>
          <p>
              Rating: {rating}
          </p>
          <p>
            {location.address}
          </p>
          <p>
              Phone Number: {phone_numbers}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
 
        <Button color='green' positive> 
          <ReservationForm id={id} onClick={() => setOpen(false)}/>
        </Button>

        <Button color='red' onClick={() => setOpen(false)}>
          Close
        </Button>
        
      </Modal.Actions>
    </Modal>
    )
}
export default RestDesc