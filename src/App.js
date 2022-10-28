import './App.css';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div className='App'>
      <PersonCard fName={ "Janice" } lName={ "Doe" } age={ 32 } hairColor={ "Black" }  initialFollowers={3}/>
      <PersonCard fName={ "Smith" } lName={ "John" } age={ 88 } hairColor={ "None" } initialFollowers={0} />
      <PersonCard fName={ "Fillmore" } lName={ "Millard" } age={ 50 } hairColor={ "Brown" } initialFollowers={88} />
      <PersonCard fName={ "Smith" } lName={ "Maria" } age={ 62 } hairColor={ "Brown" } initialFollowers={330} />
    </div>
  );
}

export default App;
