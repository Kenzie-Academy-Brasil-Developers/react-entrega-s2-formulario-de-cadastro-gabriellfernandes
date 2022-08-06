import { useEffect, useState } from "react";
import { BsPlusSquareFill, BsBackspaceFill } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import Api from "../../services/api";

function Technology() {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTech, setNewTech] = useState([])
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
      <Outlet context={[setNewTech]}/>

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
                    <li key={elem.id}>
                        <h3>{elem.title}</h3>
                        <span>{elem.status}</span>
                        <BsBackspaceFill />
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
