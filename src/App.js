import './App.css';

import Employees from './Employees';
function App() {
  const employees=[
    {id:"e1",name:"shvswm",experience:9,date:new Date(2023,6,9)},
    {id:"e2",name:"sowmya",experience:8,date:new Date(2022,1,14)},
    {id:"e3",name:"supriya",experience:4,date:new Date(2017,2,29)},
    {id:"e4",name:"ankitha",experience:3,date:new Date(2020,9,6)}
  ]
  return (
    
    <div>
    <h1>employees Data</h1>
    <Employees items={employees}/>
    </div>
  );
}

export default App;
