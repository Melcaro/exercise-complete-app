import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import './App.css';

import ConnectedGallery from './container/Gallery';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedGallery />
      </div>
    </Provider>
  );
}

export default App;
