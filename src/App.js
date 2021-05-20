import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Frontend Javascript Framework'
    },
    {
        title: 'Why do we use React?',
        content: 'React is a favourite JS Library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
];

const options = [
    {
        label: 'The Color of Blood',
        value: 'Red'
    },
    {
        label: 'The Color of Leaf',
        value: 'Green'
    },
    {
        label: 'The Color of Sky',
        value: 'Blue'
    },
];

export default () => {
    {/*const [selected, setSelected] = useState(options[0]);
    const [showDropdown,setshowDropdown] = useState(true);*/}

    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
           {/* <button onClick={() => setshowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options} 
                /> : null
            }*/}
            <Translate />
        </div>
    );
};