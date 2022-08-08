import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "animate.css";

function CardName() {
  const { user } = useContext(AuthContext)
  return (
    <div className="conteiner-user">
      <h2 className="animate__backInLeft">Olá, {user.name}</h2>
      <p className="animate__backInRight">{user.course_module}</p>
    </div>
  );
}

export default CardName;
