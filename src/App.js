import logo from './logo.svg';
import './App.css';
import Header from'./components/Header/Header'
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer'
import Topstore from './components/Topstore/Topstore'
import Casbackincrese from './components/Casbackincrese/Casbackincrese'
import Lokingformore from './components/Lokingformore/Lokingformore'
import Aboutcopon from './components/Aboutcopon/Aboutcopon'
import Askques from './components/Askques/Askques'
// import  Homehighcasback from './components/Homehighcasback/Homehighcasback'
import Highcasback from './components/Highcasback/Highcasback';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Topstore/>
      <Highcasback/>
      <Casbackincrese/>
      <Lokingformore/>
      <Aboutcopon/>
      <Askques/>
      <Footer/>
    
    </div>
  );
}

export default App;
