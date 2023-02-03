import React,{useState} from 'react'
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../db/firebaseConfig';

export  const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () =>{     
       const auth = getAuth()
       await createUserWithEmailAndPassword(auth,email,password)
       .then((userCredential)=>{
        const user = userCredential.user
        console.log(user);
       })
       
    }
  return (
    <div>
        <form>
            <label htmlFor='email'>Correo electronico</label>
            <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)}></input>
            <label htmlFor='password'>Contraseña</label>
            <input type="password" id='password'onChange={(ev)=>setPassword(ev.target.value)}></input>
            <button  onClick={submit}>Iniciar Sesion</button>
        </form>
    </div>
  )
}
