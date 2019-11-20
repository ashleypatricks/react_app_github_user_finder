import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Destructure 'user' from props and then destructure other properties off of the user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

/*
    See shortcuts for typing out proptypes from the snippets plugin - video 11, 01:15.
*/
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
