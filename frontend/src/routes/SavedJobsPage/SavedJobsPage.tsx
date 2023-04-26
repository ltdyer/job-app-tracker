import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import { useMemo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CoolButton } from "../../components";
import './SavedJobsPage.css';

enum Status {
  Waiting,
  Accepted,
  Rejected
}
interface Job {
  company: string,
  status: Status,
  title: string
}

export const SavedJobsPage = () => {

  const [ data, setData ] = useState<Job[]>();
  const navigate = useNavigate();

  // check our notepad on desktop - idk if this is even the way to use mongodb directly in react. should probably research

  const callApiCallback = useCallback(async () => {
    try {
      let response = await fetch("http://localhost:5000/get-jobs");
      if (response.ok) {
        let results = await response.json();
        return results;
      } else {
        console.log("should error");
        throw new Error(response.statusText);
      }
    } catch (error) {
      // should be caught from 500 error but isn't
      console.log(error);
      throw error;
    }
  }, []);


  useEffect(() => {
    callApiCallback()
      .then((results) => {
        setData(results);
        console.log("done calling api in use effect")
      })
      .catch(err => { 
        alert(err); 
      });
  }, [callApiCallback]);



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
    <>
      <MaterialReactTable 
        columns={columns} 
        data={data || []} 
      />
      <div className="back-button-row">
        <CoolButton buttonText="Back" onClick={() => navigate("/")}></CoolButton>
      </div>
    </>

  )
}