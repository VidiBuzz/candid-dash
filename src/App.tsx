import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Language as LanguageIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  AttachMoney as AttachMoneyIcon,
  Mic as MicIcon,
  PlayCircleOutline as PlayIcon,
  Announcement as AnnouncementIcon,
  QuestionAnswer as QuestionAnswerIcon,
  School as SchoolIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // blue
    },
    secondary: {
      main: '#10b981', // green
    },
    background: {
      default: '#0a0f1e', // dark gray
      paper: 'rgba(255, 255, 255, 0.03)', // subtle glass
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "Roboto", sans-serif',
    h5: {
      fontSize: '1.375rem', // 22px (reduced from default ~24px)
    },
    h6: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem', // 18px (reduced from default ~20px)
    },
    body2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '10pt',
    },
    body1: {
      fontSize: '0.875rem', // 14px (reduced from default 16px)
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '20px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-12px) scale(1.03)',
            boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.5), 0 0 40px 0 rgba(59, 130, 246, 0.3)',
            background: 'rgba(255, 255, 255, 0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1e3a8a 0%, #5ca3ff 50%, #1e3a8a 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
        },
      },
    },
  },
});

const colors = [
  'linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(29, 78, 216, 0.4) 100%)', // blue
  'linear-gradient(135deg, rgba(16, 185, 129, 0.6) 0%, rgba(5, 150, 105, 0.4) 100%)', // green
  'linear-gradient(135deg, rgba(245, 158, 11, 0.6) 0%, rgba(217, 119, 6, 0.4) 100%)', // yellow
  'linear-gradient(135deg, rgba(239, 68, 68, 0.6) 0%, rgba(220, 38, 38, 0.4) 100%)', // red
  'linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(124, 58, 237, 0.4) 100%)', // purple
  'linear-gradient(135deg, rgba(6, 182, 212, 0.6) 0%, rgba(8, 145, 178, 0.4) 100%)', // cyan
  'linear-gradient(135deg, rgba(249, 115, 22, 0.6) 0%, rgba(234, 88, 12, 0.4) 100%)', // orange
  'linear-gradient(135deg, rgba(236, 72, 153, 0.6) 0%, rgba(219, 39, 119, 0.4) 100%)', // pink
];

const apps = [
  {
    name: 'Candid SmartChannel',
    icon: <PhotoCameraIcon />,
    url: 'https://media.candidstudios.net',
    description: 'Cloudflare Workers R2 File Explorer with OIDC authentication for secure file management across 4 R2 buckets.',
    color: colors[0],
  },
  {
    name: 'Candid WebSite',
    icon: <LanguageIcon />,
    url: 'https://www.candidstudios.net',
    description: 'Main WordPress CMS site with photography portfolio, client galleries, booking system, and blog.',
    color: colors[1],
  },
  {
    name: 'Candid Cloud',
    icon: <CloudIcon />,
    url: 'https://www.vidiblast.net',
    description: 'Nextcloud AIO for file sharing, collaboration hub, calendar/contacts sync, and office document editing.',
    color: colors[2],
  },
  {
    name: 'Candid CRM',
    icon: <BusinessIcon />,
    url: 'https://app.candidstudios.net',
    description: 'Customer relationship management for sales pipeline, marketing automation, and communication tracking.',
    color: colors[3],
  },
  {
    name: 'Candid Earn',
    icon: <AttachMoneyIcon />,
    url: 'https://earn.candidstudios.net',
    description: 'AffiliateWP platform for referral link generation, commission tracking, payout management, and performance analytics.',
    color: colors[4],
  },
  {
    name: 'Candid Answer Engine',
    icon: <QuestionAnswerIcon />,
    url: 'https://answer.candidstudios.net',
    description: 'AI-powered answer engine with knowledge base and semantic knowledge graph featuring AI visual RAG search for intelligent queries.',
    color: colors[5],
  },
  {
    name: 'Candid Learning (LMS)',
    icon: <SchoolIcon />,
    url: 'https://ModalityVector.com',
    description: 'Learning Management System for online courses, training modules, and educational content delivery.',
    color: colors[6],
  },
  {
    name: 'Candid Agent',
    icon: <MicIcon />,
    url: 'https://voice.candidstudios.net',
    description: 'VAPI/LiveKit implementation for AI-powered voice interactions, automated call handling, and voice-based workflows.',
    color: colors[7],
  },
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAppClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const drawer = (
      <Box sx={{ width: 250, background: '#1a1a1a', height: '100%' }}>
        <Toolbar />
        <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedSection('dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedSection('videos')}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Latest Videos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedSection('announcements')}>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary="Announcements" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              Welcome to Candid Studios Main Menu
            </Typography>
            <Typography variant="body2" paragraph>
              Your central hub for all Candid Studios applications and resources, powered by Keycloak SSO for secure access.
            </Typography>
            <Grid container spacing={3}>
              {apps.map((app) => (
                <Grid item xs={12} sm={6} md={3} key={app.name} className="app-card">
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: app.color, color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)', marginRight: '10px' }}>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ 
                          mr: 2, 
                          p: 1.5, 
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}>
                          {React.cloneElement(app.icon, { 
                            sx: { fontSize: 16, color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }
                          })}
                        </Box>
                        <Typography variant="h6" component="div" sx={{ 
                          fontWeight: 600,
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                          lineHeight: 1.2,
                        }}>
                          {app.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ 
                        opacity: 0.9,
                        fontSize: '10pt',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        lineHeight: 1.5,
                      }}>
                        {app.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button 
                        size="small" 
                        variant="contained"
                        fullWidth
                        onClick={() => handleAppClick(app.url)}
                        sx={{ 
                          background: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.3)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                          },
                        }}
                      >
                        Launch
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        );
      case 'videos':
        return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Latest Videos
            </Typography>
            <Typography variant="body1" paragraph>
              Stay updated with our latest content and tutorials.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">Dashboard Tutorial</Typography>
                    <Typography variant="body2">
                      Learn how to navigate and use the Candid Studios Dashboard effectively.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'white' }}>Watch Now</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">App Integration Guide</Typography>
                    <Typography variant="body2">
                      Step-by-step guide to integrating with our applications.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: 'white' }}>Watch Now</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        );
      case 'announcements':
        return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Announcements
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">New Feature Release!</Typography>
                    <Typography variant="body2" paragraph>
                      We've added new features to the R2 SmartChannel. Check it out!
                    </Typography>
                    <Typography variant="body2">
                      - Product Team
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(135deg, #ff5722 0%, #e64a19 100%)', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h6">Maintenance Schedule</Typography>
                    <Typography variant="body2" paragraph>
                      Scheduled maintenance for Nextcloud on Sunday 2-4 PM EST.
                    </Typography>
                    <Typography variant="body2">
                      - IT Team
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Welcome New Team Members!</Typography>
                    <Typography variant="body2" paragraph>
                      We're excited to have you on board. Please explore all the applications and reach out if you have any questions.
                    </Typography>
                    <Typography variant="body2">
                      - Candid Studios Team
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #7c3aed 100%)' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ 
              fontFamily: '"Kumbh Sans", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}>
              Candid Cloud
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: 250 }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 250px)` }, background: 'radial-gradient(circle at center, #1e3a8a 0%, #0f172a 50%, #1a1a2e 100%)', minHeight: '100vh' }}
        >
          <Toolbar />
          {renderContent()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
