import React from "react"

class SearchBar extends React.Component {

    render() {
        return (
            <div className="topnav">
                <input type="text" placeholder="Search Dogs..." />
                <button onClick={this.props.handleClick}>Find Dogs!</button>
                <br/>
                <br/>
            </div>
        )
    }
}

export default SearchBar