 import React from 'react';
 import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';

function App() {
  return (
    <>
      <ul>
        <li><a href="#">GPA</a></li>
        <li><a href="#">Professor</a></li>
        <li><a href="#">Course</a></li>
      </ul>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </>
  );
}

export default App;
