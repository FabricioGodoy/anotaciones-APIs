import { useState, useEffect } from "react";
import Axios from "axios";
import "./apiDoceCuotas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";

const URL = " http://localhost:4000/doceCuotas";
const columnas = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "SKU",
    selector: "alias",
    sortable: true,
    center: true,
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
    center: true
  },
  {
    name: "Position",
    selector: "position",
    sortable: true,
    right: true
  }
];

const aginacionOpciones = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const ApiDoceCuotas = () => {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    Axios.get(URL).then((res) => {
      setProducto(res.data);

      console.log(res.data);
    });
  }, []);


  return (
    <div className=" tablasCuotas">
      <DataTable
        columns={columnas}
        data={producto}
        title="Doce Cuotas"
        pagination
        paginationComponentOptions={aginacionOpciones}
        fixedHeader
      />
    </div>
  );
};
export default ApiDoceCuotas;
