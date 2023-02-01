import React from 'react';
import PropTypes from 'prop-types';
import Mission from './Mission';

const Missiones = ({ missions }) => (
  <>
    <header>
      <ul>
        <li>Mission</li>
        <li>Descrition</li>
        <li>Status</li>
        <li />
      </ul>
    </header>
    <ul>
      <Mission missions={missions} />
    </ul>

  </>
);

Missiones.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Missiones;
