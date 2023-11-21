import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";


//  console.log(valut);
function App() {
  const {data, setData} = useState([]);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(res => res.json()).then(setData)}, [])

      const valutes = Object.values(data.Valute);
    for (let i = 0; i < valutes.length; i++) {
      const valut = valutes[i];
      console.log(valut);
    }
  return (
    <div className='App'>
      <Box>
        <Paper sx={{background: 'DimGrey		', color: " Purple"}}>
          <Toolbar sx={{ textAlign: "center", justifyContent: "center" }}>
            <h1> конвертер валют</h1>
          </Toolbar>
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <th><h3>Валюта</h3></th>
                  <th><h3>Название валют</h3></th>
                  <th><h3>Курс</h3></th>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <td>{}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
