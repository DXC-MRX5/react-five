import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import KeyCounter from './components/KeyCounter';
import PureComp from './components/PureComp';

function App() {
  return (
    <div className="App">
    <PureComp/>
    <hr style={{height:'5px', backgroundColor: 'rgb(0, 47, 255)'}}/>
    <ClickCounter/>
    <hr style={{height:'5px', backgroundColor: 'rgb(0, 47, 255)'}}/>
    <HoverCounter/>
    <hr style={{height:'5px', backgroundColor: 'rgb(0, 47, 255)'}}/>
    <KeyCounter/>
    </div>
  );
}

export default App;
