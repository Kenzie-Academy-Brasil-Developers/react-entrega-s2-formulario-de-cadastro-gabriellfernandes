import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Conteiner } from "../../styles/FormStyle";
import logo from "../../assets/img/Logo.png";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import { toastStyle } from "../../styles/styleToast";

function LoginForm() {
  const navigate = useNavigate();
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
        toast.success('Logado Com sucesso', toastStyle);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("idUser", res.data.user.id);
        navigate("/dashboard");
      })
      .catch((res) => res.response.data.message === "Incorrect email / password combination" && toast.error("Email ou Senha incorreto", toastStyle));
  };

  return (
    <Conteiner>
      <motion.div
        initial={{width: "40%"}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration: 1}}}
      >
        <img src={logo} alt="logo da kenziehub"/>
        <div className="conteiner-login">
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email")} placeholder="Email" id="email"/>
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Senha</label>
                <input type="password" {...register("password")} placeholder="Senha" id="password"/>
                <span>{errors.password?.message}</span>
                <button type="submit">Entrar</button>
            </form>
            <div>
                <span>Ainda não possui uma conta?</span>
                <Link to={"/register"} className="register">Registrar-se</Link>
            </div>
      </div>
      </motion.div>
    </Conteiner>
  );
}

export default LoginForm;
