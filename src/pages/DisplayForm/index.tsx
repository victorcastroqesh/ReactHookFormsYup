
import { useLocation } from 'react-router-dom';
import Input from '../../components/Input';
const DisplayForm = () => {

  const location = useLocation();
  //essa const data é o que foi passado no navigate na página Form
  const data = location.state?.data;
  
  return (
      <div
        className="h-screen w-screen bg-gray-400 p-20
         flex flex-col items-center justify-center gap-20"
      >
      <p>Olá, {data?.name} {data?.surName}!</p>
      <p>Você escolheu {data?.beverage}!</p>
      </div>
  );
};
export default DisplayForm;