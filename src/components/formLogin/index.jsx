import React from "react"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Api from "../../services/api";
import { Link } from "react-router-dom";

function LoginForm(){
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatório"),
      });

      const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(formSchema)});
    
      const onSubmitFunction = (data) => {
        Api.post("/sessions", data).then(res => 
          {
              window.localStorage.clear()
              window.localStorage.setItem("token", res.data.token)
              window.localStorage.setItem("idUser", res.data.id)
          }).catch(res => console.log(res))
      }
    
    return(
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input type="text" {...register("email")} placeholder="Email"/>
                {errors.email?.message}
                <input type="text" {...register("password")} placeholder="Senha"/>
                {errors.password?.message}
                <button type="submit">Logar-se</button>
            </form>

            <Link to={"register"}>Registrar-se</Link>
        </>

        
    )
}

export default LoginForm