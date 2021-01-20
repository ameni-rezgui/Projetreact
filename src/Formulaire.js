import React, { Component } from "react";

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2,
          username: '',
          age: null,
          errormessage: '',
          description: 'The content of a textarea goes in the value attribute',
          specialite: 'Génie logiciel',
          value:''

        };
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
  
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
          if (val !="" && !Number(val)) {
            err = <strong>Your age must be a number</strong>;
          }
        }

        
        this.setState({errormessage: err});
        this.setState({[nam]: val});
        this.setState({specialite: event.target.specialite});
      }
    
     
     

      handleSubmit(event) {
        alert('Le formulaire a été soumis : ' + this.state.username);
        event.preventDefault();
      }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
              <p>Nom:
              <input
              type='text'
             name='username'
             onChange={this.myChangeHandler}
             /></p>
             <label>
            Participe :
            <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
            </label>
             <p>Age:
             <input
             type='text'
              name='age'
              onChange={this.myChangeHandler}
              />
                {this.state.errormessage}</p>
            
            <br />
             Commentaire: <textarea value={this.state.description} />
              
            <br />
            <p>
            Spécialité :
            <select value={this.state.specialite} onChange={this.myChangeHandler}>
            <option value="Génie logiciel">Génie logiciel</option>
            <option value="Electronique">Electronique</option>
            <option value="Marketing">Marketing</option>
            <option value="Data science">Data science</option>
            </select></p>
            <br />
            <input type="submit" value="Envoyer" />
            <br />
           
          </form>
        )
    }
}
export default Formulaire;