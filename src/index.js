import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css" ;
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
    <SpeechProvider appId='2b547803-727f-4198-979b-d7f82cdb30a4' language='en'>
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>,
document.getElementById("root"));

