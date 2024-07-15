import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, Button, Avatar, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuBar from './MenuBar';
import EditData from './EditData';
import Doubt from './Doubt';

const MainContent = styled(Box)({
  padding: '32px',
  flexGrow: 1,
});

const ProfilePaper = styled(Paper)({
  padding: '32px',
  textAlign: 'center',
  marginBottom: '32px',
});

const TitleTypography = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'left',
});

const DataTypography = styled(Typography)({
  fontSize: '1.2rem',
  marginBottom: '8px',
  textAlign: 'left',
});

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    nome: 'Kateriny Bispo',
    crq: '123456',
    email: 'kateriny@example.com',
    cpf: '123.456.789-00',
    cargo: 'Desenvolvedora',
    dataAdmissao: '2021-01-01',
  });

  const [editOpen, setEditOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [doubtOpen, setDoubtOpen] = useState(false);
  const [doubtConfirmOpen, setDoubtConfirmOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = (editedData) => {
    // Lógica para salvar os dados editados
    console.log(editedData);
    setProfileData(editedData);
    setEditOpen(false);
    setConfirmOpen(true);
  };

  const handleEditClick = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleDoubtClick = () => {
    setDoubtOpen(true);
  };

  const handleDoubtClose = () => {
    setDoubtOpen(false);
  };

  const handleDoubtConfirm = () => {
    setDoubtConfirmOpen(true);
  };

  const handleDoubtConfirmClose = () => {
    setDoubtConfirmOpen(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Lógica para atualizar a foto de perfil
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box display="flex">
      <MenuBar />
      <MainContent>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ProfilePaper elevation={3}>
              <Typography variant="h6">Foto de Perfil</Typography>
              <Avatar
                alt="Kateriny Bispo"
                src="https://via.placeholder.com/150"
                sx={{ width: 120, height: 120, margin: '16px auto' }}
              />
              <Typography variant="h6">Kateriny Bispo</Typography>
              <Typography variant="body1">ID: 785420</Typography>
              <IconButton color="primary" component="label">
                <EditIcon />
                <input type="file" hidden onChange={handleProfilePicChange} />
              </IconButton>
            </ProfilePaper>
            <ProfilePaper elevation={3}>
              <HelpOutlineIcon fontSize="large" />
              <Typography variant="h6">Dúvidas?</Typography>
              <Typography variant="body1">Acesse a nossa Central de Ajuda.</Typography>
              <Button variant="outlined" color="primary" style={{ marginTop: '16px' }} onClick={handleDoubtClick}>Acessar</Button>
            </ProfilePaper>
          </Grid>
          <Grid item xs={12} md={8}>
            <ProfilePaper elevation={3} style={{ textAlign: 'left' }}>
              <TitleTypography>Dados Pessoais</TitleTypography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <DataTypography><strong>Nome:</strong> {profileData.nome}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <DataTypography><strong>CRQ:</strong> {profileData.crq}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <DataTypography><strong>E-mail:</strong> {profileData.email}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <DataTypography><strong>CPF:</strong> {profileData.cpf}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <DataTypography><strong>Cargo:</strong> {profileData.cargo}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <DataTypography><strong>Data de Admissão:</strong> {profileData.dataAdmissao}</DataTypography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '16px', backgroundColor: '#B2D235' }}
                    onClick={handleEditClick}
                  >
                    Editar Dados
                  </Button>
                </Grid>
              </Grid>
            </ProfilePaper>
          </Grid>
        </Grid>
        <EditData
          open={editOpen}
          handleClose={handleEditClose}
          profileData={profileData}
          handleSave={handleSave}
        />
        <Dialog open={confirmOpen} onClose={handleConfirmClose}>
          <DialogTitle>Dados Salvos</DialogTitle>
          <DialogContent>
            <Typography>Seus dados foram salvos com sucesso!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose} color="primary">OK</Button>
          </DialogActions>
        </Dialog>
        <Doubt
          open={doubtOpen}
          handleClose={handleDoubtClose}
          handleConfirm={handleDoubtConfirm}
        />
        <Dialog open={doubtConfirmOpen} onClose={handleDoubtConfirmClose}>
          <DialogTitle>Dúvida Enviada</DialogTitle>
          <DialogContent>
            <Typography>Sua dúvida foi enviada com sucesso!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDoubtConfirmClose} color="primary">OK</Button>
          </DialogActions>
        </Dialog>
      </MainContent>
    </Box>
  );
};

export default ProfilePage;
