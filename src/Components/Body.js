import '../App.css';
import React, { useState } from 'react';
import mobile from '../images/mobile.jpg'
import AddLinkPart from './AddLinkPart';

const Body = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSave = () => {
        console.log(selectedOption);
    };
    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='bodyPart'>

            <div className='body-container'>
                <div className='leftPart'>
                    <div className='mobile-element'>
                        <img src={mobile} alt="logo" className='mobileImage' />
                        <div className='grey-circle'></div>
                        <div className='userName-greyPart'></div>
                        <div className='email-greyPart'></div>
                        <div className='choice1-greyPart'>
                            <div className='choice-name'>{selectedOption}</div>
                            <div className='arrow-icon'>→</div>
                        </div>
                        <div className='choice2-greyPart'>
                            <div className='choice-name'></div>
                            <div className='arrow-icon'>→</div>
                        </div>
                        <div className='choice3-greyPart'>
                            <div className='choice-name'></div>
                            <div className='arrow-icon'>→</div>
                        </div>
                        <div className='choice4-greyPart'>
                            <div className='choice-name'></div>
                            <div className='arrow-icon'>→</div>
                        </div>

                    </div>
                </div>
                <div className='rightPart'>
                    <div className='rightPart-head'>
                        <h2 className='line-spacing'>Customize your links</h2>
                        <p className='line-spacing'>Add/edit/remove links below and then share all your profiles with the world!</p>
                    </div>
                    <AddLinkPart
                        selectedOption={selectedOption}
                        handleSelectOption={handleSelectOption}
                    />
                    <div className='saveBtn-element'>
                        <button className='saveBtn' onClick={handleSave}>Save</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Body;
