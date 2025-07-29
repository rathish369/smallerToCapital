import'./App.css';
import Navbar from './components/Navbar';
import Form from './components/form';
let a="rathish";
function App() {
  return (
   <>
   
<Navbar title="rat" search="alert"></Navbar>
<div className='cointainer'>
<Form zip="pincode" Data="info"/>
</div>
</>
  );
}

export default App;
