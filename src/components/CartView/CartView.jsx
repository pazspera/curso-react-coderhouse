import Cart from "../Cart/Cart";
import { Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"; 


export default function CartView() {
  // componente de presentación

  return (
    <>
      {<Container>
        <Grid container rowSpacing={2} sx={{marginTop: 4, padding: 3, border: '1px solid red'}}>
          <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}}>
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Producto</TableCell>
                  <TableCell>Producto</TableCell>                  
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          

        </Grid>
      </Container>}
      
    </>
  )
}