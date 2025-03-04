// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return 
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    peopleInSpace: data.people.name
                })
            })
    }
}

export default App