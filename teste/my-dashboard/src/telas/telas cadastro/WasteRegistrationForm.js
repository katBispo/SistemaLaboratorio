import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, MenuItem, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { jsPDF } from 'jspdf';
import MenuBar from '../MenuBar';
import MuiAlert from '@mui/material/Alert';

const WasteRegistrationForm = () => {
  const [wasteName, setWasteName] = useState('');
  const [generationDate, setGenerationDate] = useState(null);
  const [wasteType, setWasteType] = useState('');
  const [casNumber, setCasNumber] = useState('');
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
      wasteName,
      generationDate,
      wasteType,
      casNumber,
      classification,
      responsible,
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
    doc.text(`Tipo de Resíduo: ${wasteType}`, 10, 40);
    doc.text(`Número CAS: ${casNumber}`, 10, 50);
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
            Cadastro de Resíduos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome do Resíduo"
                fullWidth
                value={wasteName}
                onChange={(e) => setWasteName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data da Geração"
                  value={generationDate}
                  onChange={(date) => setGenerationDate(date)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Tipo de Resíduo"
                fullWidth
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
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
                label="Número CAS"
                fullWidth
                value={casNumber}
                onChange={(e) => setCasNumber(e.target.value)}
              />
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
              <TextField
                label="Responsável pelo Geração"
                fullWidth
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
              />
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
          Resíduo cadastrado com sucesso!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default WasteRegistrationForm;
