import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Home from './components/Home';

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
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Home />
            </Route> 
            <Route path="/accordian">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label = "Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};