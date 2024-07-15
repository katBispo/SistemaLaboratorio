import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, MenuItem, Snackbar } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MuiAlert from '@mui/material/Alert';
import MenuBar from '../MenuBar';

const UserRegistration = () => {
  const [userName, setUserName] = useState('');
  const [CRQNumber, setCRQNumber] = useState('');
  const [email, setEmail] = useState('');
  const [generationDate, setGenerationDate] = useState(null);
  const [userType, setUserType] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRegister = () => {
    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    // Lógica para lidar com o envio do formulário
    console.log({
      userName,
      CRQNumber,
      generationDate,
      email,
      userType,
      cpf,
      password,
    });
    setOpenSnackbar(true);
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
            Cadastro de Usuários
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome Completo"
                fullWidth
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CRQ"
                fullWidth
                value={CRQNumber}
                onChange={(e) => setCRQNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="E-mail"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data Admissão"
                  value={generationDate}
                  onChange={(date) => setGenerationDate(date)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Tipo Usuário"
                fullWidth
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value="Técnico">Técnico</MenuItem>
                <MenuItem value="Aluno">Aluno</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CPF"
                fullWidth
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Senha"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirmar Senha"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Usuário cadastrado com sucesso!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default UserRegistration;
