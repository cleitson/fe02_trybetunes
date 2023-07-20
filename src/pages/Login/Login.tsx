import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../../components/Loading/Loading';

function Login() {
  type InputData = {
    name: string
  };
  const initialState = {
    name: '',
  };
  const navigate = useNavigate();

  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [inputData, setInputData] = useState<InputData>(initialState);
  const [load, setLoad] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value });
    if (inputData.name.length < 2) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  };

  const handleSubmit = async () => {
    setLoad(true);
    await createUser({ name: inputData.name });
    navigate('/search');
  };

  return (
    <div>
      { load ? <Loading /> : (
        <div className="login-container">
          <h1> TrybeTunes </h1>
          <div className="login">
            <input
              data-testid="login-name-input"
              name="name"
              value={ inputData.name }
              onChange={ handleChange }
              required
            />
            <button
              data-testid="login-submit-button"
              disabled={ buttonDisable }
              onClick={ handleSubmit }
            >
              ENTRAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
