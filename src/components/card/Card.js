import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from '../../config/axiosInit';
import styles from "./Card.module.css"



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {

  const [employees, setEmployees] = useState([]);

  const getEmployees = async () =>{
    try {
      const info = await axios.get("/api/employee/getEmployees");
      setEmployees(info.data.employee)
    } catch (error) {
      console.log("Ningun empleado pa");
    }
   }

   useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      {employees.map((employee) => (
          <Card key={employee.id} sx={{ minWidth: 275, marginBottom: 20 }}>
            <CardContent className={styles.contentCard}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {employee.nameEmployee}
              </Typography>
              <Typography variant="h5" component="div">
                {employee.lastName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {employee.salary}
              </Typography>
            </CardContent>
          </Card>
      ))}
    </>
  );
}
