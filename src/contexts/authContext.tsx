import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../services/api";
import { toastStyle } from "../styles/styleToast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FieldValue } from "react-hook-form";

interface AuthContext {
  singIn: (data: FieldValue<SingInData>) => void;
  registerIn: (data: FieldValue<RegisterIn>) => void;
  creatTech: (tech: FieldValue<CreateTech>) => void;
  editTech: (tech: FieldValue<CreateTech>) => void;
  deletTech: () => void;
  user: User;
  loading: boolean;
  newTech: CreateTech[];
  idTech: string;
  setNewTech: React.Dispatch<React.SetStateAction<CreateTech[]>>;
  setIdTech: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface AuthProvider {
  children: ReactNode
}


interface SingInData {
  email: string;
  password: string;
}

interface SingInResponse {
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      course_module: string;
      bio: string;
      contact: string;
      created_at: string;
      updated_at: string;
      techs: [
        {
          id: string;
          title: string;
          status: string;
          created_at: string;
          updated_at: string;
        } 
      ] | [];
      works: [
        {
          id: string,
          title: string,
          description: string;
          deploy_url: string;
          created_at: string;
          updated_at: string;
        } 
      ] | [];
      avatar_url: null
    }
    token: string;
  }
}

interface RegisterIn {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface User {
  id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: [
      {
        id: string;
        title: string;
        status: string;
        created_at: string;
        updated_at: string;
      } 
    ] | [];
    works: [
    {
      id: string,
      title: string,
      description: string;
      deploy_url: string;
      created_at: string;
      updated_at: string;
    } 
  ] | [];
    created_at: string;
    updated_at: string;
    avatar_url: null | string
}

interface UserId {
  data: {
      id: string;
      name: string;
      email: string;
      course_module: string;
      bio: string;
      contact: string;
      techs: [
        {
          id: string;
          title: string;
          status: string;
          created_at: string;
          updated_at: string;
        } 
      ] | [];
      works: [
      {
        id: string,
        title: string,
        description: string;
        deploy_url: string;
        created_at: string;
        updated_at: string;
      } 
    ] | [];
      created_at: string;
      updated_at: string;
      avatar_url: null | string
  }
}

interface CreateTech {
  title?: string;
  status: string;
}

interface Error{
  response: {
    data: {
      message: string;
    }
  }
}




const AuthProvider = ({ children }: AuthProvider) => {
  const navigate = useNavigate();
  const [user, SetUser] = useState<User>({} as User);
  const [idTech, setIdTech] = useState("");
  const [newTech, setNewTech] = useState<CreateTech[]>([] as CreateTech[]);
  const [loading, setLoading] = useState(true);

  const singIn = (data: FieldValue<SingInData>) => {
    Api.post("/sessions", data)
      .then((res: SingInResponse) => {
        toast.success("Logado Com sucesso", toastStyle);
        window.localStorage.clear();
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("idUser", res.data.user.id);
        SetUser(res.data.user);
        navigate("/dashboard");
      })
      .catch(
        (res: Error) =>
          res.response.data.message ===
            "Incorrect email / password combination" &&
          toast.error("Email ou Senha incorreto", toastStyle)
      );
  };

  useEffect(() => {
    const idUser = window.localStorage.getItem("idUser");
    Api.get(`/users/${idUser}`)
      .then((res: UserId) => {
        SetUser(res.data);
      })
      .catch(() => console.clear())
      .finally(() => setLoading(false));
  }, [newTech]);

  const registerIn = (data: FieldValue<RegisterIn>) => {
    Api.post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso", toastStyle);
        navigate("/login");
      })
      .catch(
        (res: Error) =>
          res.response.data.message === "Email already exists" &&
          toast.error("Email já existe", toastStyle)
      );
  };

  const creatTech = (data: FieldValue<CreateTech>) => {
    Api.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        toast.success("Tecnologia criada com sucesso", toastStyle);
        setNewTech(old => [...old, {status: "teste"}]);
        navigate("/dashboard");
      })
      .catch((res) => console.log(res));
  };

  const editTech = (tech: FieldValue<CreateTech>) => {
    const token = window.localStorage.getItem("token");
    if (idTech !== "") {
      Api.put(`/users/techs/${idTech}`, tech, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(() => {
          setNewTech(old => [...old, {status: "teste"}]);
          toast.success("Tecnologia alterada com sucesso", toastStyle);
          navigate("/dashboard");
        })
        .catch((res: Error) => console.log(res.response.data.message));
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
