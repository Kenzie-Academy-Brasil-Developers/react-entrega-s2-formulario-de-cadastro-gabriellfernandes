import { useForm } from "react-hook-form";
import Api from "../../services/api";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast";
import { useNavigate } from "react-router-dom"
import { BsBackspaceFill } from "react-icons/bs";

function EditTechnology({ id }){
    const { register, handleSubmit} = useForm()
    const navigate = useNavigate()
    
    const onSubmitFunction = (data) => {
        Api.put(`/users/techs/${id}}`, data)
          .then((res) => {
            console.log(res)
            toast.success('Tecnologia alterada com sucesso', toastStyle);
            navigate("/dashboard")
          })
          .catch((res) => console.log(res));
      };

    return(
        <div>
            <div>
                <h2>Cadastrar Tecnologia</h2>
                <BsBackspaceFill onClick={() => navigate("/dashboard")}/>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="status">Selecionar status</label>
                <select name="" id="status" {...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button>Edit Tecnologia</button>
            </form>
        </div>
    )
}

export default EditTechnology