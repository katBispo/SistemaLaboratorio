import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, MenuItem, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { jsPDF } from 'jspdf';
import MenuBar from '../MenuBar';
import MuiAlert from '@mui/material/Alert';

const ReagentRegistration = () => {
  const [wasteName, setWasteName] = useState('');
  const [generationDate, setGenerationDate] = useState(null);
  const [reagentName, setReagentName] = useState('');
  const [reagentState, setReagentState] = useState('');
  const [reagentType, setReagentType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reagentLot, setReagentLot] = useState('');



  const [classification, setClassification] = useState({
    Corrosivo: false,
    Inflamável: false,
    Reativo: false,
    Patogênico: false,
    Tóxico: false,
    Outro: false,
  });
  const [responsible, setResponsible] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRegister = () => {
    // Função para lidar com o envio do formulário
    console.log({
      reagentName,
      generationDate,
      classification,
      responsible,
      reagentState,
      reagentType,
      reagentLot,
    });
    setOpenSnackbar(true);
  };

  const handleClassificationChange = (event) => {
    setClassification({
      ...classification,
      [event.target.name]: event.target.checked,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Cadastro de Resíduos', 10, 10);
    doc.text(`Nome do Resíduo: ${wasteName}`, 10, 20);
    doc.text(`Data da Geração: ${generationDate ? generationDate.toLocaleDateString() : ''}`, 10, 30);
    doc.text('Classificação:', 10, 60);
    Object.keys(classification).forEach((key, index) => {
      if (classification[key]) {
        doc.text(`- ${key}`, 10, 70 + (index * 10));
      }
    });
    doc.text(`Responsável pelo Geração: ${responsible}`, 10, 130);
    doc.save('cadastro_residuos.pdf');
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '16px' }}>
      <div style={{ marginRight: '150px' }}>
        <MenuBar />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Paper elevation={3} style={{ padding: '16px', maxWidth: '600px', marginBottom: '32px' }}>
          <Typography variant="h5" gutterBottom>
            Cadastro de Reagentes
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome do Reagente"
                fullWidth
                value={reagentName}
                onChange={(e) => setReagentName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantidade"
                fullWidth
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lote"
                fullWidth
                value={reagentLot}
                onChange={(e) => setReagentLot(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data Validade"
                  value={generationDate}
                  onChange={(date) => setGenerationDate(date)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Tipo de Reagente"
                fullWidth
                value={reagentType}
                onChange={(e) => setReagentType(e.target.value)}
              >
                <MenuItem value="Sal">Sal</MenuItem>
                <MenuItem value="Ácido">Ácido</MenuItem>
                <MenuItem value="Base">Base</MenuItem>
                <MenuItem value="Óxido">Óxido</MenuItem>
                <MenuItem value="Outro">Outro</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Estado Reagente"
                fullWidth
                value={reagentState}
                onChange={(e) => setReagentState(e.target.value)}
              >
                <MenuItem value="Sólido">Sólido</MenuItem>
                <MenuItem value="Líquido">Líquido</MenuItem>
               
              </TextField>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Classificação</FormLabel>
                <FormGroup>
                  {Object.keys(classification).map((key) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={classification[key]}
                          onChange={handleClassificationChange}
                          name={key}
                        />
                      }
                      label={key}
                      key={key}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Grid>
        
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleRegister}
                style={{ backgroundColor: '#4caf50' }}
              >
                Cadastrar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={generatePDF}
                style={{ marginTop: '16px' }}
              >
                Gerar PDF
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Reagente cadastrado com sucesso!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ReagentRegistration;
