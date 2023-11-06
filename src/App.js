import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BracketMatch from '../src/BracketMatch';
import CanWinNim from '../src/CanWinNim';
import ClockTicker from '../src/ClockTicker';
import ComponentComposition from './ComponentComposition';
import Counter from '../src/Counter';
import DecimalToHexadecimal from '../src/DecimalToHexadecimal';
import ES6Promise from '../src/ES6Promise';
import HammingDistance from '../src/HammingDistance';
import KanbanDND from './KanbanDND/KanbanDND';
import LeastPositiveNumberNotInArray from '../src/LeastPositiveNumberNotInArray';
import MinimumNumberOfGates from '../src/MinimumNumberOfGates';
import MostFrequentChar from '../src/MostFrequentChar';
import NumberOfIslands from '../src/NumberOfIslands';
import Palindrome from '../src/Palindrome';
import PrimeNumberCheck from '../src/PrimeNumberCheck';
import RandomColor from '../src/RandomColor';
import RotationOfArray from '../src/RotationOfArray';
import GetFirstUniqueStringInAnArray from './GetFirstUniqueStringInAnArray';
import GetAllPermutationOfAString from './GetAllPermutationOfAString';
import GetAllNodeIdsFromAnAPIReturningJSONData from './GetAllNodeIdsFromAnAPIReturningJSONData';
import GetMostPopularNameInAnArray from './GetMostPopularNameInAnArray';
import AppendFormInputToAnArray from './AppendFormInputToAnArray';
import TicTacToe from './TicTacToe';
import ShowToast from './ShowToast';
import GetSmallestPositiveIntegerNotInArray from './GetSmallestPositiveIntegerNotInArray';
import './css/App.css';

const SpacedLink = styled.div`
  flex-basis: 20%;
  width: 100%;
`;

const PlaygroundTitle = styled.h2`
  text-align: center;
  font-family: cursive;
  font-style: italic;
  text-transform: uppercase;
`;

function App() {
  return <>
    <PlaygroundTitle>
      <span>R</span>
      <span>a</span>
      <span>i</span>
      <span>n</span>
      <span>b</span>
      <span>o</span>
      <span>w</span>
      <span> </span>
      <span>P</span>
      <span>l</span>
      <span>a</span>
      <span>y</span>
      <span>g</span>
      <span>r</span>
      <span>o</span>
      <span>u</span>
      <span>n</span>
      <span>d</span>
    </PlaygroundTitle>
    <hr />
    <div className='content'>
      <div className='links'>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/AppendFormInputToAnArray">AppendFormInputToAnArray</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/BracketMatch">BracketMatch</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/CanWinNim">CanWinNim</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/ClockTicker">ClockTicker</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/ComponentComposition">ComponentComposition</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/Counter">Counter</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/DecimalToHexadecimal">DecimalToHexadecimal</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/ES6Promise">ES6Promise</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/GetAllPermutationOfAString">GetAllPermutationOfAString</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/GetAllNodeIdsFromAnAPIReturningJSONData">GetAllNodeIdsFromAnAPIRetruningJSONData</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/GetFirstUniqueStringInAnArray">GetFirstUniqueStringInAnArray</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/GetMostPopularNameInAnArray">GetMostPopularNameInAnArray</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/GetSmallestPositiveIntegerNotInArray">GetSmallestPositiveIntegerNotInArray</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/HammingDistance">HammingDistance</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/KanbanDND">Kanban DND</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/LeastPositiveNumberNotInArray">Least Positive Number Not In Array </NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/MinimumNumberOfGates">MinimumNumberOfGates</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/MostFrequentChar">MostFrequentChar</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/NumberOfIslands">NumberOfIslands</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/Palindrome">Palindrome</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/PrimeNumberCheck">PrimeNumberCheck</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/RandomColor">RandomColor</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/RotationOfArray">RotationOfArray</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/ShowToast">ShowToast</NavLink></SpacedLink>
        <SpacedLink><NavLink activeStyle={{ color: "green" }} to="/TicTacToe">TicTacToe</NavLink></SpacedLink>
      </div>
      <Switch>
        <Route path="/AppendFormInputToAnArray" component={AppendFormInputToAnArray} />
        <Route path="/BracketMatch" component={BracketMatch} />
        <Route path="/CanWinNim" component={CanWinNim} />
        <Route path="/ClockTicker" component={ClockTicker} />
        <Route path="/ComponentComposition" component={ComponentComposition} />
        <Route path="/Counter" component={Counter} />
        <Route path="/DecimalToHexadecimal" component={DecimalToHexadecimal} />
        <Route path="/ES6Promise" component={ES6Promise} />
        <Route path="/GetAllPermutationOfAString" component={GetAllPermutationOfAString} />
        <Route path="/GetAllNodeIdsFromAnAPIReturningJSONData" component={GetAllNodeIdsFromAnAPIReturningJSONData} />
        <Route path="/GetFirstUniqueStringInAnArray" component={GetFirstUniqueStringInAnArray} />
        <Route path="/GetMostPopularNameInAnArray" component={GetMostPopularNameInAnArray} />
        <Route path="/GetSmallestPositiveIntegerNotInArray" component={GetSmallestPositiveIntegerNotInArray} />
        <Route path="/HammingDistance" component={HammingDistance} />
        <Route path="/LeastPositiveNumberNotInArray" component={LeastPositiveNumberNotInArray} />
        <Route path="/MinimumNumberOfGates" component={MinimumNumberOfGates} />
        <Route path="/MostFrequentChar" component={MostFrequentChar} />
        <Route path="/NumberOfIslands" component={NumberOfIslands} />
        <Route path="/Palindrome" component={Palindrome} />
        <Route path="/PrimeNumberCheck" component={PrimeNumberCheck} />
        <Route path="/RandomColor" component={RandomColor} />
        <Route path="/RotationOfArray" component={RotationOfArray} />
        <Route path="/ShowToast" component={ShowToast} />
        <Route path="/TicTacToe" component={TicTacToe} />
        <Route path="/" component={KanbanDND} />
      </Switch>
    </div>
  </>;
}
      
export default App;
