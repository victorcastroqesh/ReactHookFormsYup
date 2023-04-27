import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input';
import { FormValues } from './Form.structure';
import { useNavigate } from "react-router-dom";


  //esse é o schema do Yup. É o que vai validar os campos
  const schema = Yup.object({
     name: Yup.string().required("Preencha o nome"),
     surName: Yup.string().required("Preencha o sobrenome"),
  });
const Form = () => {

  //essa const register é o que vai ser passado para o componente Input para registrar os campos
  //essa const errors é o que vai ser passado para o componente Input para mostrar os erros
  //essa const handleSubmit é o que vai ser passado para o form para fazer o submit
  const { register, handleSubmit, formState: { errors } } =
    useForm<FormValues>({ resolver: yupResolver(schema) })
  
  //essa const navigate é o que vai ser usado para navegar entre as páginas
  const navigate = useNavigate();

//essa função é chamada quando o usuário clica no botão submit
  const onSubmit = (data) => {
    console.log(data);

    //essa função navigate é o que vai navegar entre as páginas e passar os dados
     navigate('/displayform', { state: { data: data } })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="h-screen w-screen bg-gray-400 p-20
         flex flex-col items-center justify-center gap-20"
      >   
        <Input label='nome' register={register('name')} error={errors.name?.message} />
  
        <Input label='sobrenome' register={register('surName')} error={errors.surName?.message} />

        <button
          className="rounded-lg bg-gray-800 flex p-2 text-gray-200
          justify-between items-center relative"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;