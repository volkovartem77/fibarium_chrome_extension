import React from 'react';
import reducer from "./store/reducers";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import DefaultPage from "./components/DefaultPage";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
          <div>
              <DefaultPage/>
          </div>
      </Provider>
  );
}

export default App;


// "content_scripts": [
//     {
//         "matches": ["http://*/*", "https://*/*"],
//         "js": ["./static/js/main.js"]
//     }
// ],