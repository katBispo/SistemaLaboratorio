import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const Doubt = ({ open, handleClose, handleConfirm }) => {
  const [formData, setFormData] = useState({
    assunto: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário
    console.log(formData);
    handleConfirm();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enviar Dúvida</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Descrição"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSubmit} color="primary">Enviar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Doubt;
