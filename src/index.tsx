import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import { MainComponent } from './components/main/main.component';
import history from './router/router.history';
import './main.style.css';

ReactDOM.render(
	<Router history={history}>
		<MainComponent/>
	</Router>,
	document.getElementById('iEatWhat') as HTMLElement
);
registerServiceWorker();
