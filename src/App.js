import './App.css';
import MyFirstComponet from './components/MyFirstComponent/MyFirstComponet';
import Header from "./components/Header/Header";
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';



function App() {
  let names = ['Vasyl','Vasyl', 'Anna', 'Anna', 'Boris', 'Tetiana', 'Igor'];
  return (
    <div className="App">
      <Header title = "learning react"/>
      <MyFirstComponet arr = {names}/>
      <Counter />
      <Button />
    </div>
  );
}

export default App;
