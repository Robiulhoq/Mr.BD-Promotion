import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import login from '../../../src/images/login.png';
import { LoginContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../HomePage/Navbar/Navbar';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}


const Login = () => {
    const [logInUser, setLogInUser] = useContext(LoginContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/odder/:productId" } };

    console.log(logInUser);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const hendleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, email } = result.user;
                const loginUser = {
                    name: displayName,
                    loginEmail: email
                }
                setLogInUser(loginUser)
                history.replace(from)
                console.log(loginUser);
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }
    const [newUser, setNewUser] = useState(true)
    const hendleLogin = () => {
        setNewUser(false)
    }
    const hendleSingUp = () => {
        setNewUser(true)
    }


    const [createdUser, setCreatedUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    console.log(createdUser);
    const hendleBlur = (e) => {
        const inputValue = { ...createdUser }
        inputValue[e.target.name] = e.target.value;
        console.log(e.target.value);
        setCreatedUser(inputValue);
        setLogInUser(inputValue)
    }
    const hendleAccountSingUp = (e) => {
        firebase.auth().createUserWithEmailAndPassword(createdUser.email, createdUser.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                const setUser = firebase.auth().currentUser;
                const {email, displayName} = setUser;
                setUser.updateProfile({
                    displayName: createdUser.name,

                }).then(() => {
                    // Update successful
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                const singInUser = {
                    name: displayName,
                    loginEmail: email
                }
                setLogInUser(singInUser)
                
                history.replace(from)
               
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });

        e.preventDefault();
    }


    const hendleAccountLogin = (event) => {
        firebase.auth().signInWithEmailAndPassword(createdUser.email, createdUser.password)
            .then((userCredential) => {
                var {displayName, email} = userCredential.user;
                    const singIn ={
                        name: displayName,
                        loginEmail: email
                    }
               setLogInUser(singIn)
               history.replace(from)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="login-container">
                <Navbar></Navbar>
                <div className="row">
                    <div className="col">
                        <img src={login} alt="" />
                    </div>
                    <div className="col mt-5">

                        <div className="sing-up">
                            {
                                newUser === true ?
                                    <h5 className="pt-3">Sing Up To Mr.BD Promotion</h5>
                                    :
                                    <h5 className="pt-3">Login To Mr.BD Promotion</h5>
                            }
                            {
                                newUser === true ?
                                    <form action="">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" onBlur={hendleBlur} name="name" placeholder="Enter Your Name" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="gmail" class="form-control" onBlur={hendleBlur} name="email" placeholder="Enter Your Gmail" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="password" class="form-control" onBlur={hendleBlur} name="password" placeholder="Enter Your Password" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <button type="submit" onClick={hendleAccountSingUp} className="btn btn-primary">Created an account</button>
                                        </div>

                                    </form> :
                                    <form action="">
                                        <div class="input-group mb-3">
                                            <input type="gmail" class="form-control" onBlur={hendleBlur} name="email" placeholder="Enter Your Gmail" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="password" class="form-control" onBlur={hendleBlur} name="password" placeholder="Enter Your Password" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <button className="btn btn-primary" onClick={hendleAccountLogin}>Submit</button>
                                        </div>
                                    </form>

                            }
                            <div className="d-flex">
                                {
                                    newUser === true ?
                                        <div>
                                            <p>Have an account?</p>
                                            <div class="input-group mb-3">
                                                <button className="btn btn-primary" onClick={hendleLogin}>Log in</button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <p>Don't Have an account?</p>
                                            <div class="input-group mb-3">
                                                <button className="btn btn-primary" onClick={hendleSingUp}>Sing Up</button>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <button className="btn btn-warning" onClick={hendleGoogleSingIn}>Google Sing In</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;