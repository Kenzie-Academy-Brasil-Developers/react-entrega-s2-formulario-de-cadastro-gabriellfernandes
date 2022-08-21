import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BsBackspaceFill } from "react-icons/bs";
import React from "react";
import { ModalConteiner } from "../../styles/modalStyle";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/authContext";

function NewTechnology() {
  const formSchema = yup.object().shape({
    title: yup.string().required("Nome Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const navigate = useNavigate();

  const { creatTech } = useContext(AuthContext);

  return (
    <ModalConteiner>
      <div className="conteiner-modal">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 1 } }}
        >
          <div className="conteiner-modal-header">
            <h2>Cadastrar Tecnologia</h2>
            <BsBackspaceFill
              className="button-back"
              onClick={() => navigate("/dashboard")}
            />
          </div>
          <form onSubmit={handleSubmit(creatTech)}>
            <label htmlFor="nameTech">Nome</label>
            <input
              type="text"
              id="nameTech"
              {...register("title")}
              placeholder="Nome da Tecnologia"
            />
            <span><>{errors.title?.message}</></span>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </form>
        </motion.div>
      </div>
    </ModalConteiner>
  );
}

export default NewTechnology;
