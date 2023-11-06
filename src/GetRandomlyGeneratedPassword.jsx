import React from 'react';
import PageContainer from '../src/PageContainer';

const GetRandomlyGeneratedPassword = () => {
    function getRandomlyGeneratedPassword() {
      // between 8-32 characters in length
      // with at least one lowercase, uppercase, special character, and number
      const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
      let pass = '';
      //1 Uppercase
      pass += str.charAt(Math.floor(Math.random() * (25 - 0 + 1)) + 0);
      //1 Lowercase
      pass += str.charAt(Math.floor(Math.random() * (51 - 26 + 1)) + 26);
      //1 Number
      pass += str.charAt(Math.floor(Math.random() * (61 - 52 + 1)) + 52);
      //1 Special Char 
      pass += str.charAt(Math.floor(Math.random() * (str.length - 62 + 1)) + 62);
      
      const numberOfCharacters = Math.floor(Math.random() * (32 - 8 + 1)) + 8;
      //remaining
      for (let i = 1; i <= numberOfCharacters - 4; i++) {
        const charPos = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(charPos);
      }
      //randomize pass
      //const shuffle = v=>[...v].sort(()=>Math.random()-0.5).join('');
      // using Array sort and Math.random
      //const shuffledArr = array => array.sort(() => 0.5 - Math.random());
      const shuffleFY = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          [array[i], array[rand]] = [array[rand], array[i]];
        }
        return array;
      };
      return shuffleFY(pass);
    }

    return (
        <PageContainer 
            title='Get Randomly Generated Password' 
            description='Get randomly generated password.'
            resultDescription='It is: '
            result={`${getRandomlyGeneratedPassword()}`} >
        </PageContainer>)
}

export default GetRandomlyGeneratedPassword;