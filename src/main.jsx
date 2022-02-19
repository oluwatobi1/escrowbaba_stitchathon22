import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import config from './config';



ReactDOM.render(
            <BrowserRouter basename={config.basename}>
                <App />
            </BrowserRouter>,
    document.getElementById('root')
);
