import {Button} from "semantic-ui-react";
import {useAuth} from "@/hooks";

export default function Index() {
  const { user, logout } = useAuth();

  
  return (
    <div>
      <h2>
        SmellGood Shop
      </h2>
      <Button primary> Ir al login</Button>
      {user? (
        <div>
          <p>HOla, {user.firstname} {user.lastname}</p>
          <Button onClick={logout}>Cerrar Sesión</Button>
        </div>
      ):(
      <div>
        <a href="/join/sign-in">Iniciar sesión</a>
        </div>
      )}
    </div>
  );
}
