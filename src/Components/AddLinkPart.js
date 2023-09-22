
import React, { useState } from 'react';

const AddLinkPart = ({ handleSelectOption }) => {
  const [linkBlocks, setLinkBlocks] = useState([{ platform: 'GitHub', link: '' }]);
  const [selectedOption, setSelectedOption] = useState('GitHub'); 
  const [errorMessages, setErrorMessages] = useState(['']); 

  const addLinkBlock = () => {
    setLinkBlocks([...linkBlocks, { platform: 'GitHub', link: '' }]);
    setErrorMessages([...errorMessages, '']); 
  };

  const removeLinkBlock = (index) => {
    const updatedBlocks = [...linkBlocks];
    updatedBlocks.splice(index, 1);
    setLinkBlocks(updatedBlocks);
    const updatedErrorMessages = [...errorMessages];
    updatedErrorMessages.splice(index, 1);
    setErrorMessages(updatedErrorMessages);
  };

  const handleChangePlatform = (index, selectedPlatform) => {
    const updatedBlocks = [...linkBlocks];
    updatedBlocks[index].platform = selectedPlatform;
    setLinkBlocks(updatedBlocks);
    handleSelectOption(selectedPlatform);
  };

  const handleChangeLink = (index, newLink) => {
    const updatedBlocks = [...linkBlocks];
    updatedBlocks[index].link = newLink;
    setLinkBlocks(updatedBlocks);

    // Check if the selected platform is "GitHub" and validate the link
    if (linkBlocks[index].platform === 'GitHub') {
      if (!newLink.toLowerCase().includes('github')) {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = ' ❌This is not a GitHub link';
          return updatedErrors;
        });
      } else {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = '';
          return updatedErrors;
        });
      }
    }
    if (linkBlocks[index].platform === 'Facebook') {
      if (!newLink.toLowerCase().includes('facebook')) {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = ' ❌This is not a Facebook link';
          return updatedErrors;
        });
      } else {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = '';
          return updatedErrors;
        });
      }
    }
    if (linkBlocks[index].platform === 'LinkedIn') {
      if (!newLink.toLowerCase().includes('linkedin')) {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = ' ❌This is not a LinkedIn link';
          return updatedErrors;
        });
      } else {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = '';
          return updatedErrors;
        });
      }
    }
    if (linkBlocks[index].platform === 'Youtube') {
      if (!newLink.toLowerCase().includes('github')) {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = ' ❌This is not a youtube link';
          return updatedErrors;
        });
      } else {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = '';
          return updatedErrors;
        });
      }
    }
    if (linkBlocks[index].platform === 'Instagram') {
      if (!newLink.toLowerCase().includes('instagram')) {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = ' ❌This is not a Instagram link';
          return updatedErrors;
        });
      } else {
        setErrorMessages((prevErrors) => {
          const updatedErrors = [...prevErrors];
          updatedErrors[index] = '';
          return updatedErrors;
        });
      }
    }
  };

  return (
    <>
      <div className='addLinks-Btn-element'>
        <button className='addLinks-Btn' onClick={addLinkBlock}> + Add new link</button>
      </div>

      {linkBlocks.map((block, index) => (
        <div className='addOneLink-element' key={index}>
          <div className='addOneLink-head'>
            <h5> = Link #{index + 1} </h5>
            <a onClick={() => removeLinkBlock(index)}>Remove</a>
          </div>
          <div className='addOneLink'>
            <div className='input-element'>
              <label htmlFor={`platform-${index}`} className='inputTitle'>Platform</label>
              <select
                id={`platform-${index}`}
                className='input'
                value={block.platform}
                onChange={(e) => handleChangePlatform(index, e.target.value)}
              >
                <option value="GitHub">GitHub</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Youtube">Youtube</option>
              </select>
            </div>
            <div className='input-element'>
              <label htmlFor={`link-${index}`} className='inputTitle'>Link</label>
              <input
                type="text"
                id={`link-${index}`}
                className='input'
                placeholder="🔗"
                defaultValue={block.link}
                onChange={(e) => handleChangeLink(index, e.target.value)}
              />
              {errorMessages[index] && (
                <div className="error-message">{errorMessages[index]}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AddLinkPart;

