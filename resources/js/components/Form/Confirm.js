import React, { useContext } from "react";

import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { UserInputData } from "@/components/Form/AllForm";
import Stack from '@mui/material/Stack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


var item = {
    'checkBox': 'チェックボックス',
    'textBox': 'テキストボックス',
    'pullDown': 'プルダウン',
    'multilineText': 'マルチラインテキスト'
};

export default function Confirm(props) {
  const { currentState } = useContext(UserInputData);
  const onSubmit = () => {
    alert(JSON.stringify(currentState));
  };
  const inputDataLists = [];
  var id = 0;
  for ( var k in currentState) {
    for ( var v in currentState[k]) {
      var value = '';
      if (currentState[k][v] === true) {
        value = 'チェックしました';
      } else if (currentState[k][v] === false) {
        value = 'チェックしていません';
      } else if (currentState[k][v] === '') {
        value = '未入力';
      } else {
        value = currentState[k][v];
      }
      inputDataLists.push(
        {
          "id": id,
          "name": item[v],
          "value": value
        }
      );
      id++;
    }
  }
  
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid sm={2} />
        <Grid lg={8} sm={8} spacing={10}>
          <Table aria-label="Customer Input Data">
            <TableHead>
              <TableRow>
                <TableCell>項目</TableCell>
                <TableCell>入力内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                inputDataLists.map(function(elem) {
                  return (
                    <TableRow key={elem.id}>
                      <TableCell>{elem.name}</TableCell>
                      { elem.value ? <TableCell>{elem.value}</TableCell> : <TableCell>None</TableCell> }
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
          <Box
            mt={2}
            mb={4}
          >
            <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" onClick={props.handleBack}>
            戻る
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
            送信
        </Button>
        </Stack>
        </Box>
          </Grid>
         </Grid>
    </TableContainer>
  );
}