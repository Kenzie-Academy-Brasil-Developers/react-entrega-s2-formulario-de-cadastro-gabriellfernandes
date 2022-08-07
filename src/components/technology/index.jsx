import { useEffect, useState } from "react";
import { BsPlusSquareFill, BsBackspaceFill } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from "../../styles/styleToast";
import Api from "../../services/api";
import { TechnologyWrapper } from "./style";
import { motion } from "framer-motion"

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
      <Outlet context={[idTech, setNewTech ]}/>
      
      <TechnologyWrapper>
        <div className="header-tech animate__backInLeft">
          <h2>Tecnologia</h2>
          <BsPlusSquareFill className="button-add animate__backInRight" onClick={() => {navigate("tech/new")}}/>
        </div>
        <div className="conteiner-tech animate__backInUp">
          
          {!loading ? (
              tech.techs.length ? 
              <ul>
                  {tech.techs.map((elem) => {
                  return (
                      <motion.li key={elem.id} className="animate__fadeInDown animate__delay-5s" 
                      initial={{width: "0%"}}
                      animate={{width: "100%"}}
                      exit={{x: window.innerWidth, transition: {duration: 1}}}>
                          <button onClick={() => 
                          {
                            setIdTech(elem.id)
                            navigate("tech/edit")
                          }}>
                            <h3>{elem.title}</h3>
                            <span>{elem.status}</span>
                          </button>
                          <BsBackspaceFill className="remove-tech" onClick={() => {
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
                      </motion.li>);
                  })}
              </ul>
              :
              <div>
                  <h2>Você ainda não tem technologia</h2>
                  <span>Adicione suas technologias</span>
              </div>
          ) :
              <>
              </>
          }
        </div>
      </TechnologyWrapper>
    </>
  );
}

export default Technology;
