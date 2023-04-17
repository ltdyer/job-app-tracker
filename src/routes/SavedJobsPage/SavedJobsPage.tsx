import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import { useMemo } from 'react';

interface Person {
  name: string,
  age: number
}

export const SavedJobsPage = () => {

  const data: Person[] = [
    {name: "Luke", age: 25},
    {name: "Willie", age: 25}
  ];

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name"
      },
      {
        header: "Age",
        accessorKey: "age"
      }
    ], []);

  return (
    <>
      <MaterialReactTable 
        columns={columns} 
        data={data} 
      /> 
    </>

  )
}