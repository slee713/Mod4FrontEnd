import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

class Filter extends React.Component {
    state={
        value: 0
    }

    handleChange = (e, { value }) => {
        let cuisineId = parseInt(value)
        this.setState({value: cuisineId})
        this.props.cuisineFilter(cuisineId)
    }

    render(){
    return(
      <div >
        <p>Filter By Cuisine</p>
          <Form>
          <Form.Field>
            <Checkbox radio label='American' name='1' value='1' checked={this.state.value === 1} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Afghan' name='1035' value='1035' checked={this.state.value === 1035} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Chinese' name='25' value='25' checked={this.state.value === 25} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='French' name='45' value='45' checked={this.state.value === 45} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Greek' name='156' value='156' checked={this.state.value === 156} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Indian' name='148' value='148' checked={this.state.value === 148} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Italian' name='55' value='55' checked={this.state.value === 55} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Korean' name='67' value='67' checked={this.state.value === 67} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Mexican' name='73' value='73' checked={this.state.value === 73} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Middle Eastern' name='137' value='137' checked={this.state.value === 137} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Pakistani' name='139' value='139' checked={this.state.value === 139} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Seafood' name='83' value='83' checked={this.state.value === 83} onClick={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Thai' name='95' value='95' checked={this.state.value === 95} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Turkish' name='142' value='142' checked={this.state.value === 142} onClick={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Vegetarian' name='308' value='308' checked={this.state.value === 308} onClick={this.handleChange} />
          </Form.Field>
        </Form>
      </div>
    )
    }
}

export default Filter
