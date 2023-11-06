import React, { useState } from 'react';
import PageContainer from './PageContainer';

const ShowToast = () => {
  const [userInput, setUserInput] = useState('');
  const [toastTextArr, setToastTextArr] = useState([]);
  function handleChange (e) {
    setUserInput(e.target.value);
  }
  function handleClick () {
    if (userInput === '') return;

    setToastTextArr([userInput, ...toastTextArr]);
    setUserInput('');
  }
  function handleDelete(ind) {
    const updatedToastTextArr = toastTextArr.filter((_, index) => index !== ind);
    console.log(`ind: ${ind}; toastTextArr: ${toastTextArr.join(',')}; updatedToastTextArr: ${updatedToastTextArr.join(',')};`)
    setToastTextArr(updatedToastTextArr);
  }

  return (
      <div className='toast-display-container'>
        <PageContainer 
            title='Show Toast'
            description='Show toast messages, latest on top'
            plainbackground={true} >
            <div className='toast-display-container'>
                <div>
                    <input type="text" value={userInput} onChange={handleChange}/>
                    <button onClick={handleClick} >Show toast</button>
                </div>
                <div className='toast-wrapper'>
                    {toastTextArr.map((toast,index) => (
                        <div className='toast' key={toast}>
                            <span>{toast}</span>
                            <button onClick={() => handleDelete(index)} className='toast-remove'>x</button>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    </div>
  )     
}

export default ShowToast;