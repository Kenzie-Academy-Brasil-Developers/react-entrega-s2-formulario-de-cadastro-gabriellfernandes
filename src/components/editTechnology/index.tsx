import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { BsBackspaceFill } from "react-icons/bs";
import { ModalConteiner } from "../../styles/modalStyle";
import { motion } from "framer-motion"
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

function EditTechnology(){
    const { register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const { editTech, deletTech} = useContext(AuthContext)
    
    return(
            <ModalConteiner>
                <div className="conteiner-modal"> 
                    <motion.div 
                        initial={{width: "0%"}}
                        animate={{width: "100%"}}
                        exit={{x: window.innerWidth, transition: {duration: 1}}}
                    >
                        <div className="conteiner-modal-header">
                            <h2>Editar Tecnologia</h2>
                            <BsBackspaceFill className="button-back" onClick={() => navigate("/dashboard")}/>
                        </div>
                        <form onSubmit={handleSubmit(editTech)}>
                            <label htmlFor="status">Selecionar status</label>
                            <select id="status" {...register('status')}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <button type="submit">Edit Tecnologia</button>
                            <button className="button-delete" type="button" onClick={() => deletTech()}>Deletar</button>
                        </form>
                    </motion.div>
                </div>
            </ModalConteiner>
    )
}

export default EditTechnology