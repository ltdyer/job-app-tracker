import { TextField, CoolButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css"

export const Homepage = () => {

  const navigate = useNavigate();

  const addJob = async () => {
    try {
      const response = await fetch("http://localhost:5000/add-job", {
        method: "POST",
        body: JSON.stringify({text: "hi"})
      });
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw error;
    }
  }

  const handleAdd = () => {
    addJob()
      .then((returnVal) => {
        console.log(returnVal);
        // navigate
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const onCompanyChange = (company: string) => {
    console.log(company);
  }

  return (
    <div className="homepage">
      <h1>Hello, please enter a job:</h1>
      <div className="textfields">
        <TextField label="company" onChange={onCompanyChange}></TextField>
        <TextField label="title"></TextField>
        <TextField label="status"></TextField>
      </div>
      <div className="submit-button">
        <CoolButton buttonText="Click!" 
        onClick={handleAdd}></CoolButton>
      </div>
    </div>
  )
}