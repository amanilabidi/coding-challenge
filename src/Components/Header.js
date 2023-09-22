
import '../App.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = ({ onProfileDetailsClick, isProfileDetailsClicked, onPreviewClick}) => {
  return (
    <>
    <div className='headerPart'>
      <div className='logo-element'>
        <img src={logo} alt="logo" className='logoImage' />
        <h1>devlinks</h1>
      </div>
      <div className='links-profileDetails-buttons'>
        <button className={`links-profileDetails-button links-btn ${isProfileDetailsClicked ? 'white-button' : ''}`}>
          <FontAwesomeIcon icon={faLink} className='header-icon' />
          Links
        </button>
        <button
          className={`links-profileDetails-button ${isProfileDetailsClicked ? 'links-btn' : ''}`}
          onClick={onProfileDetailsClick}
        >
          <FontAwesomeIcon icon={faUser} className='header-icon' />
          Profile Details
        </button>
      </div>
      <div className='preview-element'>
        <button className='preview-button' onClick={onPreviewClick}>Preview</button>
      </div>
    </div>
    <div className='headerPartRes'>
      <div className='logo-element'>
        <img src={logo} alt="logo" className='logoImage' />
      </div>
      <div className='links-profileDetails-buttons'>
        <button className={`links-profileDetails-buttonResponsive links-btnResponsive ${isProfileDetailsClicked ? 'white-button' : ''}`}>
          <FontAwesomeIcon icon={faLink} className='header-icon' />
         
        </button>
        <button
          className={`links-profileDetails-buttonResponsive ${isProfileDetailsClicked ? 'links-btnResponsive' : ''}`}
          onClick={onProfileDetailsClick}
        >
          <FontAwesomeIcon icon={faUser} className='header-icon' />
         
        </button>
      </div>
      <div className='preview-element'>
        <button className='preview-buttonResponsive' onClick={onPreviewClick}>➡</button>
      </div>
    </div>
    </>
    
  );
};

export default Header;

