import React from "react"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Api from "../../services/api";
import { Link } from "react-router-dom";

function RegisterForm(){
   
    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatório").min(8, "deve conter 8 digitos").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere especial"),
        name: yup.string().required("Nome obrigatório"),
        bio: yup.string().required("Biografia obrigatório").min(8, "deve conter 8 digitos"),
        contact:  yup.string().required("Contato obrigatório"),
        course_module: yup.string().required("Modulo obrigatório")
      });

    const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(formSchema)});
    
    const onSubmitFunction = (data) => {
        Api.post("/users", data).then(res => 
        {
            window.localStorage.clear()
            window.localStorage.setItem("token", res.data.token)
            window.localStorage.setItem("idUser", res.data.id)

        }).catch(res => console.log(res.data.message))
    }
   
    return(
        <>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input type="text" {...register("email")} placeholder="Email"/>
                {errors.email?.message}
                <input type="password" {...register("password")} placeholder="Senha"/>
                {errors.password?.message}
                <input type="text" {...register("name")} placeholder="Nome completo"/>
                {errors.name?.message}
                <input type="text" {...register("bio")} placeholder="Biografia"/>
                {errors.bio?.message}
                <input type="text" {...register("contact")} placeholder="Contato"/>
                {errors.contact?.message}
                <input type="text" {...register("course_module")} placeholder="Modulo atual"/>
                {errors.course_module?.message}
                <button type="submit">Cadastrar</button>
            </form>
            
            <Link to={"/"}>Logar-se</Link>
        </>
    )
}

export default RegisterForm