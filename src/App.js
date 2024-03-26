import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //since the users is coming from the outside through the API URL, it is a different array in memory. Hence infinite re-rendering
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') //it's a promise - asynchronous programming
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    console.log('effect fired');
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
