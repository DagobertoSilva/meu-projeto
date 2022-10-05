import './App.css';
import HellWord from './components/HelloWorld';

function App() {
  const name = 'Dagoberto'



function sum(a,b){
  return a + b
}

const url = "https://via.placeholder.com/150"

  const newname = name.toUpperCase()
  return (
    
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>olá, {newname}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src ={url} alt="minha imagem" />

    <HellWord/>
    </div>
  );
}

export default App;
