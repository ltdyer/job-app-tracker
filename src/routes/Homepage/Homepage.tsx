import { TextField, CoolButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css"

export const Homepage = () => {

  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Hello, please enter a job:</h1>
      <div className="textfields">
        <TextField label="name"></TextField>
        <TextField label="status"></TextField>
      </div>
      <div className="submit-button">
        <CoolButton buttonText="Click!" onClick={() => navigate("/saved-jobs")}></CoolButton>
      </div>
    </div>
  )
}