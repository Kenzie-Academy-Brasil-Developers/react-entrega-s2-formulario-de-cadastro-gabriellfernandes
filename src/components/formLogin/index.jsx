import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { Link, useHistory } from "react-router-dom";
import { Conteiner } from "./style";
import logo from "../../assets/img/Logo.png"

function LoginForm() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        console.log(res.data);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("idUser", res.data.user.id);
        history.push("/dashbord");
      })
      .catch((res) => console.log(res.response.data.message));
  };

  return (
    <Conteiner>
        <img src={logo} alt="logo da kenziehub"/>
        <div className="conteiner-login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email")} placeholder="Email" id="email"/>
                {errors.email?.message}
                <label htmlFor="password">Senha</label>
                <input type="password" {...register("password")} placeholder="Senha" id="password"/>
                {errors.password?.message}
                <button type="submit">Entrar</button>
            </form>
            <div>
                <span>Ainda não possui uma conta?</span>
                <Link to={"register"} className="register">Registrar-se</Link>
            </div>
      </div>
    </Conteiner>
  );
}

export default LoginForm;
