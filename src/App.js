import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ' '
    }

  }

  // the moment your component gets placed on the DOM is when you want to make an API request, so that we can display stuff asap
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //it's a promise - asynchronous programming
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }

      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField }
      }
    )
  };

  render() {

    console.log('render for AppJS')
    //destructuring - makes variables look shorter and makes things easier to read
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <input className='searchbox' type='search' placeholder='search monsters'
          onChange={onSearchChange} />

        <CardList monsters={filteredMonsters} />

      </div >
    );
  }
}

export default App;
