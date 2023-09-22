
import './App.css';
import React, { useState } from 'react';
import Body from './Components/Body';
import Header from './Components/Header';
import mobile from './images/mobile.jpg';
import user from './images/user.png';
import Preview from './Components/Preview';

const App = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProfileDetailsClicked, setIsProfileDetailsClicked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showPreview, setShowPreview] = useState(false); // New state for showing/hiding preview

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
    setIsProfileDetailsClicked(!isProfileDetailsClicked);
    setShowPreview(false); // Close the preview when opening profile details
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview); // Toggle the preview section
    setShowProfileDetails(false); // Close profile details when opening preview
  };
  const onPreviewClick = () => {
    setShowPreview(!showPreview);
    setShowProfileDetails(false);
  };
  const handleBackToEditorClick = () => {
    setShowProfileDetails(true);
  };
  return (
    <div className="App">
      <Header
        onProfileDetailsClick={toggleProfileDetails}
        isProfileDetailsClicked={isProfileDetailsClicked}
        onPreviewClick={togglePreview} // Pass the togglePreview function to the Header component
      />
      <div className="main-content">
        {showProfileDetails ? (
          <div className="profileDetailsContent">
            <div className='body-container'>
              <div className='leftPart'>
                <div className='mobile-element'>
                  <img src={mobile} alt="logo" className='mobileImage' />
                  <div className='grey-circle'>
                    {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="User" className='user-image-inMobile' />}
                  </div>
                  <div className='userName-greyPart center-text-white'>
                    {firstName && lastName && `${firstName} ${lastName}`}
                  </div>
                  <div className='email-greyPart center-text-white'>
                    {email}
                  </div>
                </div>
              </div>
              <div className='rightPart'>
                <div className='rightPart-head'>
                  <h2 className='line-spacing'>Profile Details</h2>
                  <p className='line-spacing'>Add your details to create a personal touch to your profile</p>
                </div>
                <div className='addPersonalImage'>
                  <h4>Personal picture:</h4>
                  <div className="container-picture-part">
                    <img src={selectedFile ? URL.createObjectURL(selectedFile) : user} alt="Avatar" className="image" />
                    <div className="overlay">
                      <div className="text-overlay">
                        <label htmlFor="imageUpload">📂Change Image</label>
                        <input
                          type="file"
                          id="imageUpload"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="image-upload-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='text'>
                    <p>Image must be below 1024*1024px. Use PNG, JPG, or BMP format</p>
                  </div>
                </div>
                <div className='personalInfo'>
                  <div className='input-zone'>
                    <label htmlFor="firstName" className='labeltitle'>First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      className='myinput'
                      value={firstName} // Bind the input value to the firstName state
                      onChange={(e) => setFirstName(e.target.value)} // Update the firstName state when input changes
                    />
                  </div>
                  <div className='input-zone'>
                    <label htmlFor="lastName" className='labeltitle'>Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      className='myinput'
                      value={lastName} // Bind the input value to the lastName state
                      onChange={(e) => setLastName(e.target.value)} // Update the lastName state when input changes
                    />
                  </div>
                  <div className='input-zone'>
                    <label htmlFor="email" className='labeltitle'>Email*</label>
                    <input
                      type="email"
                      id="email"
                      className='myinput'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </div>
                </div>
                <div className='saveBtn-element'>
                  <button className='saveBtn'>Save</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {showPreview ? (
          <Preview
            selectedFile={selectedFile}
            firstName={firstName}
            lastName={lastName}
            email= {email}
            onBackToEditorClick={handleBackToEditorClick}
          />
        ) : null}
        {!showProfileDetails && !showPreview && <Body />}
      </div>
    </div>
  );
};

export default App;
