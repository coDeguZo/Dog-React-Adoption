import React from "react"

export default class Dog extends React.Component {

    render(){
        const {name, image, age, isAdopted, description, gender, size} = this.props.dogObj
        return(
          <div>
              <div className="ui card">
                  <div className="image">
                      <img src={image} width="100" height="100" display="inline-grid"/>
                  </div>
                  <div className="content">
                      <a className="header">{name}</a>
                        <div className="meta">
                             <span className="date">{age} year old - {gender} - {size}</span>
                        </div>
                        <div className="description">
                          {description}
                        </div>
                  </div>
                    <div className="extra content">
                      <i className="paw icon"></i>
                     {isAdopted?   "Adopted!" : <button onClick={() => this.props.adopt(this.props.dogObj.id)} className="primary">Adopt this dog!</button>}
                    </div>
              </div>
          </div>
        )
    }
}