import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import jwtDecode from 'jwt-decode';

function RouteWrapper({
  redirectTo,
  isPrivate,
  component: Component,
  ...rest
}) {
  const authenticated = localStorage.getItem('DesafioSharenergy:JWT_TOKEN');

  if (authenticated) {
    const { exp } = jwtDecode(authenticated);

    if (exp < Date.now() / 1000) {
      localStorage.removeItem('DesafioSharenergy:JWT_TOKEN');
      return <Redirect to={redirectTo} />;
    }
  }

  if (!authenticated && isPrivate) return <Redirect to={redirectTo} />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  redirectTo: '/',
  isPrivate: false,
};

export default RouteWrapper;
