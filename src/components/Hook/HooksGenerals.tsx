import { useNavigate } from "react-router-dom"
import { ParamsPintar } from "./TypeAtributos/types"

export function useRegresarMenu() {
  const navigate = useNavigate();
  return () => navigate("/");
}

export function pintarBoton(params: ParamsPintar) {
  switch (params.isHome) {
    case 0:
      return (
        <div>{params.text}</div>
      )
    case 1:
      return (
        <div className="mt-3">
          <button className="bg-primary w-40 h-16 hover:cursor-pointer hover:bg-secondary">Book Now</button>
        </div>
      )
    default:
      return null
  }
}