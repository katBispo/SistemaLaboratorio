import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import MenuBar from '../MenuBar';
import apiService from '../../api';  

const EquipmentRegistration = () => {
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentModel, setEquipmentModel] = useState('');
  const [brandEquipment, setBrandEquipment] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleRegister = async () => {
    if (!equipmentName || !equipmentModel || !brandEquipment) {
      setOpenSnackbar(true);
      setSnackbarMessage('Preencha todos os campos.');
      setSnackbarSeverity('error');
      return;
    }

    const newEquipment = {
      nomeEquipamento: equipmentName,
      modelo: equipmentModel,
      marca: brandEquipment,
    };

    console.log('Enviando equipamento:', newEquipment);

    try {
      await apiService.postEquipamento(newEquipment);  // Usando a instância da classe ApiService para chamar o método

      setOpenSnackbar(true);
      setSnackbarMessage('Equipamento cadastrado com sucesso!');
      setSnackbarSeverity('success');
      setEquipmentName('');
      setEquipmentModel('');
      setBrandEquipment('');
    } catch (error) {
      console.error('Erro ao cadastrar equipamento:', error);
      console.error('Status do erro:', error.response?.status);
      console.error('Dados do erro:', error.response?.data);

      setOpenSnackbar(true);
      setSnackbarMessage(
        error.response?.data?.message ||
        'Erro ao cadastrar equipamento. Verifique os dados e tente novamente.'
      );
      setSnackbarSeverity('error');
    }
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
            Cadastro de Equipamentos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome Equipamento"
                fullWidth
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Modelo"
                fullWidth
                value={equipmentModel}
                onChange={(e) => setEquipmentModel(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Marca"
                fullWidth
                value={brandEquipment}
                onChange={(e) => setBrandEquipment(e.target.value)}
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
          </Grid>
        </Paper>
      </div>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default EquipmentRegistration;
