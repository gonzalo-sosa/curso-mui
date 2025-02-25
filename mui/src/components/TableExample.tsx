import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const TableExample = () => {
  return (
    <TableContainer sx={{ maxHeight: "300px" }} component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Fecha de Nacimiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                {row.date_of_birth.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Beret",
    last_name: "Lennard",
    email: "blennard0@pcworld.com",
    date_of_birth: new Date("1995-01-01"),
  },
  {
    id: 2,
    first_name: "Tera",
    last_name: "Choke",
    email: "tchoke1@theatlantic.com",
    date_of_birth: new Date("1997-07-01"),
  },
  {
    id: 3,
    first_name: "Lyn",
    last_name: "Bowart",
    email: "lbowart2@odnoklassniki.ru",
    date_of_birth: new Date("1993-03-01"),
  },
  {
    id: 4,
    first_name: "Bert",
    last_name: "Huckett",
    email: "bhuckett3@tinypic.com",
    date_of_birth: new Date("1999-09-01"),
  },
  {
    id: 5,
    first_name: "Drew",
    last_name: "Jenicke",
    email: "djenicke4@businessinsider.com",
    date_of_birth: new Date("1994-05-01"),
  },
  {
    id: 6,
    first_name: "Deloria",
    last_name: "Pepperill",
    email: "dpepperill5@meetup.com",
    date_of_birth: new Date("1998-11-01"),
  },
  {
    id: 7,
    first_name: "Spense",
    last_name: "Ivashnyov",
    email: "sivashnyov6@hexun.com",
    date_of_birth: new Date("1996-01-01"),
  },
  {
    id: 8,
    first_name: "Elden",
    last_name: "Chaucer",
    email: "echaucer7@mozilla.com",
    date_of_birth: new Date("1997-03-01"),
  },
  {
    id: 9,
    first_name: "Sholom",
    last_name: "Deetch",
    email: "sdeetch8@so-net.ne.jp",
    date_of_birth: new Date("1999-01-01"),
  },
  {
    id: 10,
    first_name: "Genovera",
    last_name: "Colby",
    email: "gcolby9@dagondesign.com",
    date_of_birth: new Date("1998-07-01"),
  },
];
