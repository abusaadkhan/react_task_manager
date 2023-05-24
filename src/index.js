import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Task from './components/Task'
import { useSelector } from 'react-redux';
//const user = useSelector(state => state.user)


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
      children: [
        // {
        //   path: '/',
        //   element: <App/>
        // },
        {
          path: '/signin',
          element: <SignIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        // {
        //   path: '/task',
        //   element:  (user === undefined) ? <Navigate to='/' /> : <Task/>
        // },
        {
          path: '/task',
          element: <Task/>
        }
        
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
