import MainPage        from './components/MainPage';
import Transfer        from './components/Transfer';
import Company         from './components/Company';
import planeImg        from '../src/img/plane.png';
import './App.css';


function App() {

  return (
    <div className='App-wrapper'>
      <header className='App-header'>
        <img src={planeImg} alt="./img/plane.png" />
        <p>Поиск авиабилетов</p>
      </header>
      <main className='App-main'>
        <div className='App-main_aside'>
          <div className="App-transfer">
            <Transfer colorScheme={false} />
          </div>
          <div className="App-company">
            <Company colorScheme={false} />
          </div>
        </div>
        <div className='App-main_main'>
          <MainPage />
        </div>
      </main>
    </div>
  )
}

export default App
