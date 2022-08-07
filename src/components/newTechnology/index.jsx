import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast";
import { useNavigate, useOutletContext } from "react-router-dom"
import { BsBackspaceFill } from "react-icons/bs";
import React from "react";
import { ModalConteiner } from "../../styles/modalStyle";
import { motion } from "framer-motion"

function NewTechnology(){
    const formSchema = yup.object().shape({
        title: yup.string().required("Nome Obrigatorio")
      });
    
    const { register,handleSubmit, formState: { errors },} = useForm({ resolver: yupResolver(formSchema) })
    const navigate = useNavigate()
   
    const [ idTech , setNewTech ] = useOutletContext()
   
    const onSubmitFunction = (data) => {
        Api.post("/users/techs", data,
            {
            headers: {
              'Authorization': `Bearer ${window.localStorage.getItem("token")}` 
            },
        })
          .then(() => {
            toast.success('Tecnologia criada com sucesso', toastStyle);
            setNewTech(oldItens => [...oldItens, data])
            navigate("/dashboard")
          })
          .catch((res) => console.log(res));
      };
    return(
        <ModalConteiner>
            <div className="conteiner-modal">
                <motion.div 
                            initial={{width: "0%"}}
                            animate={{width: "100%"}}
                            exit={{x: window.innerWidth, transition: {duration: 1}}}
                        >
                    <div className="conteiner-modal-header">
                        <h2>Cadastrar Tecnologia</h2>
                        <BsBackspaceFill className="button-back" onClick={() => navigate("/dashboard")}/>
                    </div>
                    <form onSubmit={handleSubmit(onSubmitFunction)}>
                        <label htmlFor="nameTech">Nome</label>
                        <input type="text" id="nameTech" {...register('title')} placeholder="Nome da Tecnologia"/>
                        <span>{errors.title?.message}</span>
                        <label htmlFor="status">Selecionar status</label>
                        <select name="" id="status" {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button>Cadastrar Tecnologia</button>
                    </form>
                </motion.div>
            </div>
        </ModalConteiner>
    )
}

export default NewTechnology