import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'

const famille = {
  membre1: {
    nom: 'Toto',
    age: 27
  },
  membre2: {
    nom: 'Titi',
    age: 29
  },
  membre3: {
    nom: 'Tutu',
    age: 15
  },
  membre4: {
    nom: 'Le chien',
    age: 10
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = () => {
    const famille = { ... this.state.famille }
    famille.membre1.age += 1
    this.setState({ famille })
  }

  render() {
    const { famille } = this.state

    return (
      <div className='App'>
        <h1>React App</h1>
        <Membre
          age={famille.membre1.age}
          name={famille.membre1.nom} />
        <Membre
          age={famille.membre2.age}
          name={famille.membre2.nom} />
        <Membre
          age={famille.membre3.age}
          name={famille.membre3.nom} />
        <Membre
          age={famille.membre4.age}
          name={famille.membre4.nom}>
          <em>Je suis un chien.</em>
        </Membre>
      </div>
    )
  }
}

export default App;
