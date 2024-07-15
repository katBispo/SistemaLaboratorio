import React, { useState } from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Badge, Dialog, DialogContent, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Ícone para "Histórico de Acessos ao Laboratório"
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 

const Sidebar = styled(Paper)({
  height: '100vh',
  padding: '16px',
  backgroundColor: '#6C7A52',
  color: 'white',
});

const MenuBar = () => {
  const [openDashboards, setOpenDashboards] = useState(false);
  const [openCadastros, setOpenCadastros] = useState(false);
  

  const [openListas, setOpenListas] = useState(false);



  const handleOpenDashboards = () => {
    setOpenDashboards(true);
  };

  const handleCloseDashboards = () => {
    setOpenDashboards(false);
  };

  const handleOpenCadastros = () => {
    setOpenCadastros(true);
  };

  const handleCloseCadastros = () => {
    setOpenCadastros(false);
  };


  
  const handleOpenListas = () => {
    setOpenListas(true);
  };

  const handleCloseListas = () => {
    setOpenListas(false);
  };

  return (
    <Box display="flex">
      <Sidebar elevation={3}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          <Avatar alt="Kateriny B." src="https://via.placeholder.com/150" sx={{ width: 56, height: 56 }} />
          <Typography variant="h6">Kateriny B.</Typography>
        </Box>
        <List>
          <ListItem button component={Link} to="/dashboard"> {/* Link para "/menu" */}
            <ListItemIcon>
              <HomeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Menu Principal" />
          </ListItem>
          <ListItem button onClick={handleOpenDashboards}>
            <ListItemIcon>
              <DashboardIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboards" />
          </ListItem>
          <ListItem button onClick={handleOpenCadastros}>
            <ListItemIcon>
              <ListAltIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Cadastros" />
          </ListItem>
          <ListItem button  onClick={handleOpenListas}>
            <ListItemIcon>
              <DashboardIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Listas" />
          </ListItem>
          <ListItem button component={Link} to="/perfil"> {/* Link para "/perfil" */}
            <ListItemIcon>
              <NotificationsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
            <Badge badgeContent={3} color="secondary" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
          <ListItem button component={Link} to="/AcessHistory"> {/* Link para "/historico-acessos" */}
            <ListItemIcon>
              <AccessTimeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Histórico de Entradas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </Sidebar>
      
      <Dialog open={openDashboards} onClose={handleCloseDashboards}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>Selecione um Dashboard</Typography>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/dashboard-reagentes">Dashboard Reagentes</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/dashboard-usuarios">Dashboard Usuários</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/dashboard-residuos">Dashboard Resíduos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/dashboard-acessos">Dashboard Acessos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/dashboard-equipamentos">Dashboard Equipamentos</Button>

        </DialogContent>
      </Dialog>

      <Dialog open={openCadastros} onClose={handleCloseCadastros}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>Selecione um Cadastro</Typography>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/cadastroReagente">Cadastro Reagentes</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/cadastroUsuario">Cadastro Usuários</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/cadastroResiduo">Cadastro Resíduos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/cadastro-acessos">Cadastro Acessos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/cadastroEquipamento">Cadastro Equipamentos</Button>

        </DialogContent>
      </Dialog>

      <Dialog open={openListas} onClose={handleCloseListas}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>Selecione uma Lista</Typography>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/Lista-reagentes">Lista Reagentes</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/Lista-usuarios">Lista Usuários</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/Lista-residuos">Lista Resíduos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/Lista-acessos">Lista Acessos</Button>
          <Button variant="contained" color="primary" style={{ margin: '8px' }} component={Link} to="/Lista-equipamentos">Lista Equipamentos</Button>

        </DialogContent>
      </Dialog>
     

    </Box>
  );
};

export default MenuBar;
