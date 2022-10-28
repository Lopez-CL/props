import './App.css';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div className='App'>
      <PersonCard fName={ "Janice" } lName={ "Doe" } lName={ 32 } hairColor={ "Black" } />
      <PersonCard fName={ "Smith" } lName={ "John" } age={ 88 } hairColor={ "None" } />
      <PersonCard fName={ "Fillmore" } lName={ "Millard" } age={ 50 } hairColor={ "Brown" } />
      <PersonCard fName={ "Smith" } lName={ "Maria" } age={ 62 } hairColor={ "Brown" } />
    </div>
  );
}

export default App;
