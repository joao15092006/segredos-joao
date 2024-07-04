import React from 'react';

import {app} from '../config.firebase'
import { 
  getAuth, 
  signInWithEmailAndPassword
} from 'firebase/auth';

export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
  const [email, setEmail] = React.useState('');
  const [nome, setNome] = React.useState('')
  const [senha, setSenha] = React.useState('');
  const [logado, setLogado] = React.useState(false)

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function fazerLogin() {
    const auth = getAuth(app)
    signUpWithEmailAndPassword(auth, email, senha)
    .then( user => setLogado(true))
    .catch( erro => console.log("erro no login, tente novamente" + erro))
  }
  function cadastrar() {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email, senha)
    .then( user => hideModal())
    .catch( erro => console.log("erro no login, tente novamente" + erro))
  }

  return (
    <UserContextGlobal.Provider
      value={{
        email,
        setEmail,
        senha,
        setSenha,
        logado,
        fazerLogin,
        visible,
        showModal,
        hideModal,
        nome,
        setNome,
        cadastrar
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}
