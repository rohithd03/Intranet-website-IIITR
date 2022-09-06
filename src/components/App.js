import './App.css';
import Card from './Card.js';
import data from '../resources/data.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IIITR Intranet Website</h1>
      </header>
      <div>
        {data.map((d, i) => {
          return <div className='card'><Card key={i} url={d.imageURL} title={d.title} description={d.description} link={d.link} /></div>
        })}
      </div>
    </div>
  );
}

export default App;
