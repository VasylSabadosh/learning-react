import './App.css';
import MyFirstComponet from './components/MyFirstComponent/MyFirstComponet';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header title = "learning react"/>
      <MyFirstComponet message = "1task-2"/>
      <MyFirstComponet message = "2task-2"/>
      <MyFirstComponet message = "3task-2"/>
      <MyFirstComponet message = "4task-2"/>

    </div>
  );
}

export default App;
