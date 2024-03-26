import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  //console.log(searchField)

  console.log('render');

  //since the users is coming from the outside through the API URL, it is a different array in memory. Hence infinite re-rendering
  fetch('https://jsonplaceholder.typicode.com/users') //it's a promise - asynchronous programming
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    );

  const onSearchChange = (event) => {
    console.log('render')
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={'Search Monsters'}
        className={'monsters-search-box'} />
      <CardList monsters={filteredMonsters} />

    </div >)
}

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ' '
//     }

//   }

//   // the moment your component gets placed on the DOM is when you want to make an API request, so that we can display stuff asap
//   componentDidMount() {
// fetch('https://jsonplaceholder.typicode.com/users') //it's a promise - asynchronous programming
//   .then((response) => response.json())
//   .then((users) => this.setState(() => {
//     return { monsters: users }
//   }

//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )
//   };

//   render() {

//     console.log('render for AppJS')
//     //destructuring - makes variables look shorter and makes things easier to read
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (

//     );
//   }
// }

export default App;
