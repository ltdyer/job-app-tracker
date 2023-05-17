import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import { useMemo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CoolButton, DarkThemeButton } from "../../components";
import './SavedJobsPage.css';
import { Job } from "../../types/Job";
import { useThemes } from "../../hooks/useThemes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const SavedJobsPage = () => {

  const [ data, setData ] = useState<Job[]>([]);
  const navigate = useNavigate();
  const { useTheme } = useThemes();
  const darkTheme = useTheme();
  const darkThemeStyle = {
    backgroundColor: darkTheme ? '#1B1B1B' : '#FFF',
    color: darkTheme ? '#FFF' : "#000" 
  }

  const callApiCallback = useCallback(async () => {
    try {
      let response = await fetch("http://localhost:5000/get-jobs");
      if (response.ok) {
        let results = await response.json();
        return results;
      } else {
        console.log("should error");
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      // should be caught from 500 error but isn't
      console.log(error);
      throw error;
    }
  }, []);


  useEffect(() => {
    callApiCallback()
      .then((results: Job[]) => {
        // why is it letting us do this??
        console.log(results);
        setData(results);
      })
      .catch(err => { 
        alert(err); 
      });
  }, [callApiCallback]);

  const tableColoring = 
    createTheme({
      palette: {
        mode: darkTheme ? 'dark' : 'light'
        // background: {
        //   default: darkThemeStyle.backgroundColor
        // }
      },

    })
  

  const columns = useMemo<MRT_ColumnDef<Job>[]>(
    () => [
      {
        header: "Company",
        accessorKey: "company"
      },
      {
        header: "Title",
        accessorKey: "title"
      },
      {
        header: "Status",
        accessorKey: "status"
      }
    ], []
  );

    // should definitely add a total jobs counter
  return (
    <div style={darkThemeStyle}>
      <ThemeProvider theme={tableColoring}>
        <MaterialReactTable 
          columns={columns} 
          data={data || []} 
        />
      </ThemeProvider>
      
      <div className="back-button-row">
        <CoolButton buttonText="Back" onClick={() => navigate("/")}></CoolButton>
        <DarkThemeButton/>
      </div>
    </div>

  )
}