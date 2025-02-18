import  { useState, useEffect, useCallback } from 'react';
import { App, AppTitle, AppSettings, AppButton, AppPeople } from './App.styles';
import PersonComponent from './Person';
import SearchFormComponent from './SearchForm';
import axios from 'axios';

function AppComponent () {
  const [people, setPeople] = useState([]);
  const [gender, setGender] = useState();
  const [country, setCountry] = useState('US');
  
  const findPeople =  useCallback(async () => {
    const url = `https://randomuser.me/api/?results=12&gender=${gender}&nat=${country}`;
    const { data: { results } } = await axios.get(url);
    console.log("Get: ", url, gender, country)
    setPeople(results);
  }, [gender, country])

  useEffect(() => {
    findPeople();
  }, [gender, country, findPeople])



  const handleGender = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  }

  const handleCountry = (event) => {
    setCountry(event.target.value);
  }

  return (
    <App>
      <AppTitle>Random People</AppTitle>
      <AppSettings>
        <div>Gender: {gender || "all"}</div>
        <div>Country: {country}</div>
      </AppSettings>
      <SearchFormComponent 
        handleGender={handleGender} 
        handleCountry={handleCountry}
        country={country}
      />
      <AppButton><button onClick={findPeople}>Search again</button></AppButton>
      <AppPeople>
        { 
          people.map((person) => {
            return <PersonComponent key={person.login.uuid} person={person} />
          })
        }
      </AppPeople>
    </App>
  );
}

export default AppComponent;
