import { useEffect, useState } from "react";
import { BsPlusSquareFill, BsBackspaceFill } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast";
import Api from "../../services/api";

function Technology() {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTech, setNewTech] = useState([])
  const [idTech, setIdTech] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
    setLoading(true)
    Api.get(`/users/${window.localStorage.getItem("idUser")}`)
    .then((res) => setTech(res.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [newTech]);
  
  return (
    <>
      <Outlet context={[setNewTech, idTech]}/>

      <div>
        <h2>Tecnologia</h2>
        <BsPlusSquareFill onClick={() => {navigate("tech/new")}}/>
      </div>
      <div>
        
        {!loading ? (
            tech.techs.length ? 
            <ul>
                {tech.techs.map((elem) => {
                return (
                    <li key={elem.id} onClick={() => {
                        setIdTech(elem.id)
                        navigate("tech/edit")
                    }}>
                        <h3>{elem.title}</h3>
                        <span>{elem.status}</span>
                        <BsBackspaceFill onClick={() => {
                            Api.delete(`/users/techs/${elem.id}`,
                            {
                            headers: {
                              'Authorization': `Bearer ${window.localStorage.getItem("token")}` 
                            },
                            })
                            .then(() => {
                                toast.success("Tecnlogias removida com sucesso", toastStyle)
                                setNewTech((oldItens) => [...oldItens, {title: elem.title, status: elem.status}])
                            })
                            .catch(res => console.log(res))
                    }}/>
                    </li>);
                })}
            </ul>
            :
            <div>
                <h2>Voce ainda não tem tecnlogias</h2>
            </div>
        ) :
            <div>
                <h2>Carregando :D</h2>
            </div>
        }
      </div>
    </>
  );
}

export default Technology;
