import logo from './logo.svg';
import './App.css';

const number = 111;
const singers = [
  { name: 'mahafuzur', job: 'singer' },
  { name: 'Eva Rohaman', job: 'singra' }
]
const singerStyle = {
  color: 'red',
  backgroundColor: 'white'
}


function App() {
  const nayoks = ['Amir', 'bappraz', 'kuber', 'alu'];
  return (

    <div className="App">
      {
        nayoks.map(nayok => <li>name:  {nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok} ></Person>)
      }
      {
        singers.map(singer => <Player name={singer.name}>  </Player>)
      }

      {/* <Person name={nayoks[0]} nayka="musumi" ></Person>
      <Person name={nayoks[1]} nayka="shekha" ></Person> */}
      <h2>I am single</h2>
      <h5>What happend</h5>


      <Player> </Player>
    </div>
  );
}
function Person(props) {

  return (
    <div className='person' >
      <h1>{props.name}</h1>
      <p>Nayoka</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='friend' >
      <h3> al kayda </h3>
      <p> yill baba </p>
    </div>
  )
}

function Player(props) {
  return (
    <div className='player'>
      <h3></h3>
    </div>
  )

}



export default App;
