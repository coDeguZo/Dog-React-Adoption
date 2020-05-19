import React from "react"
import {Form} from 'semantic-ui-react'


export default class DogForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            gender: "",
            size: null,
            about: "",
            image: "",
            age: null
            // agree: false
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onGenderChange = (event) => {
        this.setState({ gender: event.target.innerText })
    }

    onSizeChange = (event) => {
        this.setState({ size: event.target.innerText })
    }

    onAboutChange = (event) => {
        this.setState({ about: event.target.value })
    }

    onAgeChange = (event) => {
        this.setState({ age: event.target.value})
    }

    onImageChange = (event) => {
        this.setState({ image: event.target.value })
    }


    render(){
        const options = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
          ]
        return (
            <div>
            <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid label='name' placeholder='name' value={this.state.name} onChange={this.onNameChange}/>
                <Form.Input fluid label='age' placeholder='age' value={this.state.age} onChange={this.onAgeChange} />
                <Form.Input fluid label='image' placeholder='image' value={this.state.image} onChange={this.onImageChange} />
                <Form.Select
                    fluid
                    label='gender'
                    innerText={this.state.gender}
                    options= {options}
                    placeholder='Gender'
                    onChange={this.onGenderChange}
                />
                </Form.Group>
                <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                    label='Small'
                    value='small'
                    checked={this.state.size === 'Small'}
                    onChange={this.onSizeChange}
                />
                <Form.Radio
                    label='Medium'
                    value='medium'
                    checked={this.state.size === 'Medium'}
                    onChange={this.onSizeChange}
                />
                <Form.Radio
                    label='Large'
                    value='large'
                    checked={this.state.size === 'Large'}
                    onChange={this.onSizeChange}
                />
                </Form.Group>
                <Form.TextArea label='About' placeholder='Tell us more about you...' value={this.state.description} onChange={this.onAboutChange} />
                <Form.Checkbox label='I agree to the Terms and Conditions' checked={null} />
                <Form.Button onClick={() => this.props.handleSubmit(this.state)} >Submit</Form.Button>
            </Form>
            </div>
        )
    }
}