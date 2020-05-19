import React from "react"
import Dog from "../Components/Dog"

export default class DogContainer extends React.Component {

    render() {
        console.log(this.props.dogs)
        return(
           
            <div className="ui grid container">
                <br/>
            {this.props.dogs.map(dog => {
                console.log(dog.id)
                return <div className="four wide column"> <Dog dogObj={dog} key={dog.id} adopt={this.props.adoptADog}/> </div>
            }
            )}
            </div>

           
        )
    }
}