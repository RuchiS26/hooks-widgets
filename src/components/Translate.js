// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM - works only on port 3000
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="container-fluid">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language" 
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options} 
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} langugage={language} />
        </div>
    );
};

export default Translate;