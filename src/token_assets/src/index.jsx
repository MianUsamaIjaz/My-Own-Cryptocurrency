import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';
import { Principal } from "@dfinity/principal"

const init = async () => { 

  try {
    const identity = await authClient.getIdentity();
    const userPrincipal = identity._principal.toString();
    console.log(userPrincipal);
    ReactDOM.render(<App loggedInPrincipal={userPrincipal} />, document.getElementById("root"));
  } catch (error) {
    console.error("Error:", error);
  }

}

async function handleAuthenticated(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);
  ReactDOM.render(<App loggedInPrincipal={userPrincipal}/>, document.getElementById("root"));
}

init();


