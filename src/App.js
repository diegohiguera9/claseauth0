import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, user, isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {  isAuthenticated ? (
          <>
          <h1>Hola {user.name}</h1>
          <div>
            <img src={user.picture} alt={user.name} loading="lazy"/>
          </div>
          <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            {/* <button onClick={() => loginWithPopup()}>LogIn Email</button> */}
            <button onClick={() => loginWithPopup({ connection: "google-oauth2" })}>LogIn Gmail</button>
          </>
        )

        }
    </div>
  );
}

export default App;
