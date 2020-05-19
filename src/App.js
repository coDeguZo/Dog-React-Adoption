import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import DogContainer from "./Container/DogContainer"
import DogForm from "./Components/DogForm"

class App extends Component{
  constructor(){
    super()
    this.state = {
      dogs: [],
    }
  }

  adoptADog = (dog) => {
    const obj = {
      isAdopted: true
    }
    fetch(`http://localhost:3000/dogs/${dog}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    }).then(resp => resp.json())
    .then(updatedDog => {
      const updatedDogArray = this.state.dogs.map(dog => {
        if (dog.id === updatedDog.id){
          return updatedDog
        }
        return dog 
      })
      this.setState({
        dogs: updatedDogArray
      })

    })
  }

  componentDidMount(){
    const url = "http://localhost:3000/dogs"
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        dogs: data
      })
    })
  }

  handleSubmit = (dog) => {
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dog)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({ dogs: [...this.state.dogs, data] })
    })
  }

  render(){
    return (
      <div>
        <Header />
        {/* <SearchBar handleClick={this.fetchDogs}/> */}
        <DogForm handleSubmit={this.handleSubmit}/>
        <div className="Title">
          <h1 className="title-header">Dogs For Adoption!</h1>
        </div>
        <br/>
        <DogContainer dogs={this.state.dogs.filter(dog => !dog.isAdopted)} adoptADog={this.adoptADog}/>
        <div className="Title">
          <h1 className="title-header">Adopted Dogs!</h1>
        </div>
        <br/>
        <DogContainer dogs={this.state.dogs.filter(dog=> dog.isAdopted)}/>
      </div>
    );
  }
}

export default App;
