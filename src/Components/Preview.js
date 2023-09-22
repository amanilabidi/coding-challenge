import '../App.css';
import React from 'react';
const Preview = ({ selectedFile, firstName, lastName , email, onBackToEditorClick}) => {
  const handleShareLinksClick = () => {
    window.alert('Your personal links are shared');
    setTimeout(() => {
      window.location.reload(); 
    }, 1000); 
  };
  return (
    <>
      <div className='preview'>
        <div className='preview-firstPart'>
          <button className='backBtn'onClick={onBackToEditorClick}  > ⇐ Back to editor</button>
          <button className='shareBtn' onClick={handleShareLinksClick}>Share Links ⇒</button>
        </div>
        <div className='preview-firstPartRes'>
          <button className='backBtnRes'onClick={onBackToEditorClick} > ⇐ </button>
          <button className='shareBtnRes'onClick={handleShareLinksClick}> ⇒</button>
        </div>
        <div className='emptyPart'></div>
      </div>
      <div className='userInfo'>
        <div className='circular-image'>
          {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="User" />}
        </div>
        <p className='userFullName'>{firstName} {lastName}</p>
        <p >{email}</p>
      </div>
    </>

  );
};

export default Preview;
