import './App.css';
import EmployerForm from './employer/EmployerForm'
import EmpForm from './components/EmpForm'

function App() {
  return (
    <div className="App">
      { /*signup for employees*/ }
      <EmpForm />
      { /*signup for employers*/ }
      {/* <EmployerForm /> */}
    </div>
  );
}

export default App;
