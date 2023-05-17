import { TextField, CoolButton, DarkThemeButton } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Status } from '../../types/Job';
import { HomepageValidationOptions } from '../../types/HomepageErrorMap';
import { useButtonPress } from '../../hooks/useButtonPress';
import { useThemes } from '../../hooks/useThemes';
import "./Homepage.css"

export const Homepage = () => {

  const navigate = useNavigate();

  const [company, setCompany] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const { useTheme } = useThemes();

  const logButtonName = useButtonPress();

  const darkTheme = useTheme();
  const darkThemeStyle = {
    backgroundColor: darkTheme ? '#1B1B1B' : '#FFF',
    color: darkTheme ? '#FFF' : "#000" 
  }
  // make a test context next time
  // add a total job counter
  // let us edit existing jobs: maybe make/bring up a modal or something

  const addJob = async () => {
    try {
      const response = await fetch("http://localhost:5000/add-job", {
        method: "POST",
        body: JSON.stringify({
          company: company,
          title: title,
          status: status
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        return;
      } else {
        // look up alternatives to bubling this error up
        // I know at FareDrop, they had some sort of context in App as a catch all, so maybe something like that
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      throw error;
    }
  }

  const validateFields = (): HomepageValidationOptions => {
    // validation
    console.log(company, title, status);
    if (!company || !title || !status) {
      return HomepageValidationOptions.empty;
    } else if (!isStatus(status)) {
      return HomepageValidationOptions.notValidStatus;
    }
    return HomepageValidationOptions.ok;
  };

  const isStatus = (statusField: string): statusField is Status  => {
    return statusField in Status;
  }

  const handleAdd = () => {
    logButtonName("submit job");
    const validateAnswer = validateFields();
    // console.log(validateAnswer);
    if (validateAnswer === HomepageValidationOptions.ok) {
      console.log("should be valid");
      addJob()
      .then(() => {
        // navigate
        navigate("/saved-jobs")
      })
      .catch((error) => {
        alert(error.message);
      })
    } else {
      alert(validateAnswer)
    }
  }

  const handleViewSavedJobs = () => {
    logButtonName("view saved jobs");
    navigate("/saved-jobs");
  }

  const onCompanyChange = (company: string) => {
    setCompany(company);
  }

  const onTitleChange = (title: string) => {
    setTitle(title);
  }

  const onStatusChange = (status: string) => {
    setStatus(status);
  }

  return (
    <div className="homepage" style={darkThemeStyle}>
      <h1>Hello, please enter a job:</h1>
      <div className="textfields">
        <TextField label="company" onChange={onCompanyChange}></TextField>
        <TextField label="title" onChange={onTitleChange}></TextField>
        <TextField label="status" onChange={onStatusChange}></TextField>
      </div>
      <div className="submit-button">
        <CoolButton buttonText="Submit Job!" 
        onClick={handleAdd}></CoolButton>
        <CoolButton buttonText="View Saved Jobs"
        onClick={handleViewSavedJobs}></CoolButton>
      </div>
      <div className='dark-theme-area'>
        <DarkThemeButton/>
      </div>
    </div>
  )
}