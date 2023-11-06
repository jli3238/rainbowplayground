import React, { useState } from 'react';
import { useEffect } from 'react';
import PageContainer from './PageContainer';

const TicTacToe = () => {
  const [board, setBoard] = useState(['','','','','','','','','']);
  const [curPlayer, setCurPlayer] = useState('x');
  const [winner, setWinner] = useState('');

  function handleClick(n) {
    if (board[n] === '' && winner === '') {
      const updatedBoard = board.map((ele, index) => {
          if (index === n && ele === '') return curPlayer;
          return ele;
        });
      setBoard(updatedBoard);
      setCurPlayer((curPlayer === 'x') ? 'o' : 'x');
      console.log('winner: ', winner);
    }
  }

  useEffect(() => {
       // row and col
       for (let i = 0; i < 3; ++i) {
        let wonR = true;
        let wonC = true;
        for (let j = 1; j < 3; ++j) {
          wonR = wonR && board[3*i] !== '' && (board[j-1 + 3*i] === board[j + 3*i]);
          wonC = wonC && board[i] !== '' && (board[i + 3*(j-1)] === board[i + 3*j]);
        }
        if (wonR) {
            setWinner(board[3*i]);
            return;
        } else if (wonC) {
            setWinner(board[i]);
            return;
        }
    }
    // diag
    let wonDiag1 = true;
    let wonDiag2 = true;
    for (let i = 1; i < 3; ++i) {
      wonDiag1 = wonDiag1 && board[4] !== '' && (board[i-1 + 3*(i-1)] === board[i + 3*i]);
      wonDiag2 = wonDiag2 && board[4] !== '' && (board[3-i + 3*(i-1)] === board[2-i + 3*i])
    }
    if (wonDiag1 || wonDiag2) {
        setWinner(board[4]);
    }
  }, [board]);
  return (
    <PageContainer 
        title='Shall We Play Tic Tac Toe?'
        description='Tic Tac Toe'>        
        <div className='winner'><div>Winner is: </div><div className="algorithm-result winnerResult">{` ${winner ? winner : '...upcoming...'}`}</div></div>
        <div className='board'>
            <div className='row'>
                <div className='cell' onClick={() => handleClick(0)}>{board[0]}</div>
                <div className='cell' onClick={() => handleClick(1)}>{board[1]}</div>
                <div className='cell' onClick={() => handleClick(2)}>{board[2]}</div>
            </div>
            <div className='row'>
                <div className='cell' onClick={() => handleClick(3)}>{board[3]}</div>
                <div className='cell' onClick={() => handleClick(4)}>{board[4]}</div>
                <div className='cell' onClick={() => handleClick(5)}>{board[5]}</div>
            </div>
            <div className='row'>
                <div className='cell' onClick={() => handleClick(6)}>{board[6]}</div>
                <div className='cell' onClick={() => handleClick(7)}>{board[7]}</div>
                <div className='cell' onClick={() => handleClick(8)}>{board[8]}</div>
            </div>
        </div>
    </PageContainer>
  )     
}

export default TicTacToe;