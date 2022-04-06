import "./App.css";
import app from "./firebase.init";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
function App() {
  const [user, setUser] = useState({});
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const singOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className="App">
      <div className="mt-5">
        {user.uid ? (
          <button className="btn btn-danger fs-3" onClick={singOut}>
            Logout
          </button>
        ) : (
          <>
            <button className="btn btn-primary fs-4 m-3" onClick={loginWithGoogle}>
              Login With Google
            </button>
            <button className="btn btn-primary fs-4 m-3" onClick={loginWithGithub}>
              Login With Github
            </button>
            <button className="btn btn-primary fs-4 m-3" onClick={loginWithFacebook}>
              Login With Facebook
            </button>
          </>
        )}
      </div>
      <div className="p-4 mt-4">
        <img className="rounded-circle" src={user.photoURL} alt="" />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default App;
