import { createContext, useEffect, useState } from "react";
import Api from "../services/api";
import { toastStyle } from "../styles/styleToast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, SetUser] = useState({});
  const [idTech, setIdTech] = useState("");
  const [newTech, setNewTech] = useState([]);
  const [loading, setLoading] = useState(true);

  const singIn = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        toast.success("Logado Com sucesso", toastStyle);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("idUser", res.data.user.id);
        const { user: Usuario } = res.data;
        SetUser(Usuario);
        navigate("/dashboard");
      })
      .catch(
        (res) =>
          res.response.data.message ===
            "Incorrect email / password combination" &&
          toast.error("Email ou Senha incorreto", toastStyle)
      );
  };

  useEffect(() => {
    const idUser = window.localStorage.getItem("idUser");
    Api.get(`/users/${idUser}`)
      .then((res) => {
        SetUser(res.data);
      })
      .catch(() => console.clear())
      .finally(() => setLoading(false));
  }, [newTech]);

  const registerIn = (data) => {
    Api.post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso", toastStyle);
        navigate("/login");
      })
      .catch(
        (res) =>
          res.response.data.message === "Email already exists" &&
          toast.error("Email já existe", toastStyle)
      );
  };

  const creatTech = (data) => {
    Api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        toast.success("Tecnologia criada com sucesso", toastStyle);
        setNewTech((oldItens) => [...oldItens, data]);
        navigate("/dashboard");
      })
      .catch((res) => console.log(res));
  };

  const editTech = (tech) => {
    const token = window.localStorage.getItem("token");
    if (idTech !== "") {
      Api.put(`/users/techs/${idTech}`, tech, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setNewTech((old) => [...old, res]);
          toast.success("Tecnologia alterada com sucesso", toastStyle);
          navigate("/dashboard");
        })
        .catch((res) => console.log(res.message));
    } else {
      toast.error(
        "Tecnologia não encontrada porfavor tente denovo",
        toastStyle
      );
      navigate("/dashboard");
    }
  };

  const deletTech = () => {
    Api.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        toast.success("Tecnlogias removida com sucesso", toastStyle);
        setNewTech((oldItens) => [
          ...oldItens,
          { title: "item removido", status: "removido" },
        ]);
        navigate("/dashboard");
      })
      .catch((res) => console.log(res));
  };

  return (
    <AuthContext.Provider
      value={{
        singIn,
        registerIn,
        creatTech,
        editTech,
        deletTech,
        user,
        loading,
        newTech,
        setNewTech,
        idTech,
        setIdTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
