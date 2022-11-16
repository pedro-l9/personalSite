import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import './index.css';
import './i18n';
import App from './App';

const app = initializeApp({
  apiKey: 'AIzaSyClRaDww0-eBeMyWgvqTlWhGOzVb1ptJOI',
  projectId: 'personalsite-94754',
  messagingSenderId: '441431197153',
  appId: '1:441431197153:web:7dd096e74cb6ab94463ea0',
  measurementId: 'G-B7TW4Z6NT1',
});

export const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById('root'));
