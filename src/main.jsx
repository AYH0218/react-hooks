import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const personalInfo = {
  name: 'User Name',
  age: 20,
};
// useContext 階層を跨いで直接渡せる
const PersonalInfoContext = createContext(personalInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersonalInfoContext.Provider value={personalInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PersonalInfoContext.Provider>
);

export default PersonalInfoContext;
