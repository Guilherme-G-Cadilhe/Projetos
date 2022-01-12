import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../components/MainContainer';

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate('/step2');
  };

  return (
    <h1>Step 2</h1>
    // <MainContainer>
    //   <h2>Step 2</h2>
    //   <form onSubmit={onSubmit}>
    //     <input ref={register} type="text" name="firstName" placeholder="First Name"></input>
    //     <input ref={register} type="text" name="lastName" placeholder="Last Name"></input>
    //     <button type="submit">Next</button>
    //   </form>
    // </MainContainer>
  );
}

export default Step1;
