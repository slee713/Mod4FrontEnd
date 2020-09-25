import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const RestDesc = props => {
    const [open, setOpen] = React.useState(false)
    const {name, location, featured_img, cuisines, phone_numbers, price_range, rating} = props.restaurant
    return(
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>More Info</Button>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={featured_img} wrapped />
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
          
        <Button color='green' positive onClick={() => setOpen(false)}>
          Make Reservation
        </Button>

        <Button color='red' onClick={() => setOpen(false)}>
          Close
        </Button>
        
      </Modal.Actions>
    </Modal>
    )
}
export default RestDesc