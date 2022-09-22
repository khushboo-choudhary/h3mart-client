import NavBar from './components/NavBar';
import TableBox from './components/Tablebox';
import SecondNav from './components/SecondNav';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SecondNav/>
      <div className="content">
        <TableBox/>
      </div>
    </div>
  );
}

export default App;
