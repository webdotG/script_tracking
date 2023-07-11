import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import './fonts/Bebas_Neue_Pro_Bold.otf'
import './fonts/PPPangramSans-Medium.otf'
import './fonts/PPPangramSans-Bold.otf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
		<React.StrictMode>
				<BrowserRouter>
						<Provider store={store}>
										<App/>
						</Provider>
				</BrowserRouter>
		</React.StrictMode>
);

