
import { useNavigate } from "react-router-dom";

export const MenuBar: React.FC = () => {

  const navigate = useNavigate();

  return (
   <div>
      <button onClick={()=>navigate('/home')}>Home</button>
      <button onClick={()=>navigate('/home/about')}>About</button>
      <button onClick={()=>navigate('/dashbord')}>dashbord</button>
   </div>
  )

}