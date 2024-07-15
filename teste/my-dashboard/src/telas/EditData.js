import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditData = ({ open, handleClose, profileData, handleSave }) => {
  const [editedData, setEditedData] = useState({ ...profileData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveClick = () => {
    handleSave(editedData);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Dados Pessoais</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={editedData.nome}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="CRQ"
          name="crq"
          value={editedData.crq}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="E-mail"
          name="email"
          value={editedData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="CPF"
          name="cpf"
          value={editedData.cpf}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Cargo"
          name="cargo"
          value={editedData.cargo}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Data de Admissão"
          name="dataAdmissao"
          type="date"
          value={editedData.dataAdmissao}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSaveClick} color="primary">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditData;
