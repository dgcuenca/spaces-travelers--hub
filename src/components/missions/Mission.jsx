import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missions }) => (
  missions.map((mission) => (
    <li key={mission.mission_id}>
      <p>{mission.mission_name}</p>
      <p>{mission.mission_description}</p>
      <div>
        <button
          type="button"
        >
          NOT A MEMBER
        </button>
      </div>
      <div>
        <button
          type="button"
        >
          Join Mission
        </button>
      </div>
    </li>
  ))
);

Mission.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default Mission;
