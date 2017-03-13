import React from 'react';
import ReactDOM from 'react-dom';


import Main from './Main';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Main></Main>, document.getElementById('app'));
