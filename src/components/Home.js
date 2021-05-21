import React from 'react';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="ui text">
                <p>This Project is all about creating 4 basic Widgets by using Hooks, useState and useEffect</p>
                <p>The 4 widgets are:</p><i>1. Accordian <br /> 2. Search <br /> 3. Dropdown <br /> 4. Translate</i><br/>
                <p>More number of languages and colors can be added to the translate and dropdown widgets respectievely</p>
                <p><i><b>The wikipedia API used in this project for the Search Widget will work only on localhost:3000</b></i></p>
            </div>
        </div>
    );
};

export default Home;