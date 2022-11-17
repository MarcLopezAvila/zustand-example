import Add from './components/add';
import Counter from './components/counter';
import './App.css';

function App() {
    return (
        <div className="App">
            <Counter />
            <section>
                <Add amount={5}/>
                <Add amount={10}/>
                <Add amount={20}/>
            </section>
        </div>
    )
}

export default App
