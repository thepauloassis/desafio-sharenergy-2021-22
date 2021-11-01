import React from 'react';
import './style.css';

import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';

import { Link, NavLink, useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  const [t, i18n] = useTranslation();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('DesafioSharenergy:JWT_TOKEN');

    history.push('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: '#1ba2a1', color: '#fff' }}
        position="static"
      >
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={'/home'}
              >
                <Typography pr={2} variant="h7" component="div">
                  {t('headerHome')}
                </Typography>
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={'/customer'}
              >
                <Typography variant="h7" component="div">
                  {t('headerCustomer')}
                </Typography>
              </NavLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LanguageSelector />
              <Link className="nav-link" onClick={handleLogout} to={'/'}>
                <Typography variant="h7" component="div">
                  {t('headerLogout')}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

/*
PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
 */
export default Header;
