import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Não Autorizado!</h1>
      <br />
      <p>Você não tem permissão para acessar a página requisitada.</p>
      <div className="flexGrow">
        <button onClick={goBack}>Voltar</button>
      </div>
    </section>
  )
}

export default Unauthorized