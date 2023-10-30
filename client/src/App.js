
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nb from './Components/Nb';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Display from './Components/Display';
import AddStu from './Components/AddStu';

function App() {
  return (
    <div>
    
    
    <Nb/>
      <Routes>
        <Route path="/Display" element={<Display/>}></Route>
        <Route path="/Add" element={<AddStu/>}></Route>
        
       </Routes>
    
    
    
   
    </div>
  );
}

export default App;
