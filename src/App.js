
import './App.css';
import Exercise from './components/Exercise';
import Header from './components/Header';
import Logo from './components/Logo';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
     <Header />
     < Logo />
     <Sidebar />
     <Exercise data={this.state.data}/>
    </div>
  );
}

export default App;
