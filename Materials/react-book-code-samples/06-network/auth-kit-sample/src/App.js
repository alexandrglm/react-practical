import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Protected from './Protected';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/signin' } element={<SignIn />}/>
          <Route path={'/protected'} element={
            <RequireAuth loginPath={'/signin'}>
              <Protected/>
            </RequireAuth>
          }/>
          <Route path={'/signout' } element={<SignOut />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
