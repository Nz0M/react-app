import React, { Component } from 'react'

class Test extends Component {
    render(){
        return this.props.nom.map((pres) =>
    <h1 key={pres.id}>{pres.nom} {pres.prenom}</h1> 
        )
    }
}

export default Test;