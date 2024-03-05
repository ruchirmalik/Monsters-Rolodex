import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {

  constructor() {
    super();
    this.state = {
      drivers: [
        {
          firstName: 'Lewis',
          lastName: 'Hamilton',
          id: '01'
        },
        {
          firstName: 'George',
          lastName: 'Russell',
          id: '02'
        },
        {
          firstName: 'Max',
          lastName: 'Verstappen',
          id: '03'
        },
        {
          firstName: 'Sergio',
          lastName: 'Perez',
          id: '04'
        }
      ]

    }
  }


  render() {
    return (
      <div className="App">

        {/* <h1> {this.state.driver1.firstName} {this.state.driver1.lastName}</h1>
        <h1> {this.state.driver2.firstName} {this.state.driver2.lastName}</h1>
        <h1> {this.state.driver3.firstName} {this.state.driver3.lastName}</h1>
        <h1> {this.state.driver4.firstName} {this.state.driver4.lastName}</h1> */}
        {
          this.state.drivers.map((driver) => {
            return (
              <div key={driver.id}>
                <h1>{driver.firstName}</h1>
              </div>
            );
          })
        }


        {/* <button
          onClick={() => {
            this.setState(
              () => {
                return {
                  drivers: { firstName: 'Asavari', lastName: 'Hari' },
                };
              },
              () => { }
            );
          }}>
          Change Name
        </button> */}

      </div >
    );
  }
}

export default App;
