import { useForm } from "react-hook-form";
import Api from "../../services/api";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast";
import { useNavigate, useOutletContext } from "react-router-dom"
import { BsBackspaceFill } from "react-icons/bs";
import { ModalConteiner } from "../../styles/modalStyle";
import { motion } from "framer-motion"


function EditTechnology(){
    const { register, handleSubmit} = useForm()
    const token = window.localStorage.getItem("token")
    const navigate = useNavigate()
    const [ idTech, setNewTech] = useOutletContext()
    const onSubmitFunction = (tech) => {
        Api.put(`/users/techs/${idTech}`, tech, {
            headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => {
            setNewTech((old) => [...old, res])
            toast.success('Tecnologia alterada com sucesso', toastStyle);
            navigate("/dashboard")
          })
          .catch((res) => console.log(res.message));
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
                            <h2>Editar Tecnologia</h2>
                            <BsBackspaceFill className="button-back" onClick={() => navigate("/dashboard")}/>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitFunction)}>
                            <label htmlFor="status">Selecionar status</label>
                            <select name="" id="status" {...register('status')}>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <button type="submit">Edit Tecnologia</button>
                            <button className="button-delete" type="button" onClick={() => {
                                Api.delete(`/users/techs/${idTech}`,
                                {
                                    headers: {
                                        'Authorization': `Bearer ${window.localStorage.getItem("token")}` 
                                    },
                                })
                                .then(() => {
                                    toast.success("Tecnlogias removida com sucesso", toastStyle)
                                    setNewTech((oldItens) => [...oldItens, {title: "item removido", status: "removido"}])
                                    navigate("/dashboard")
                                })
                                .catch(res => console.log(res))
                            }}>Deletar</button>
                        </form>
                    </motion.div>
                </div>
            </ModalConteiner>
    )
}

export default EditTechnology