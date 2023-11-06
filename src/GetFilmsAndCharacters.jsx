import React, { useEffect, useState } from 'react';
import PageContainer from './PageContainer';

const GetFilmsAndCharacters = () => {
    
  const [films, setFilms] = useState([]);
  const filmsApiUrl = 'data/films.json';
  const charactersApiUrl = 'data/characters.json';
  useEffect(() => {
    try {
      fetch(filmsApiUrl)
        .then(response1 => response1.json())
        .then(
          result1 => {
            fetch(charactersApiUrl)
              .then(response2 => response2.json())
              .then(
                result2 => {
                  const results = result1.map(res1 => { return { ...res1, characters: result2.find(res2 => res1.characters === res2.name).characters, showCharacters: false }; });
                  setFilms(results);
                },
                error2 => console.log(error2)
              )
          },
          error1 => console.log(error1)
        )
    } catch (error) { console.log(error); }
  }, []);

  const toggleShowCharacters = (filmname) => {
    const updatedFilms = films.map(film => film.name === filmname ? {...film, showCharacters: !film.showCharacters} : film);
    setFilms(updatedFilms);
  }
console.log(films);
  return (
    <PageContainer 
        title='Get Films and Characters from API'
        description='Get Films and Characters from API'>        
        <div>Films: </div> 
        <ul className="films">
            { films && films.length !== 0 && films.map(film => 
              <li key={film.name}>{film.name}
                <button onClick={() => toggleShowCharacters(film.name)}>
                  {film.showCharacters ? '-' : '+'}
                </button>
                {film.showCharacters && film.characters.map(character => <div>{character}</div>)}
              </li>)}
        </ul>
    </PageContainer>)     
}

export default GetFilmsAndCharacters;