import React from 'react';
import PropTypes from 'prop-types';

const SongItem = ({ data: { title }, onClickItem }) => (
      <li
            onClick={onClickItem}
            // accessibility rule
            onKeyPress={onClickItem}
            // accessibility rule
            tabIndex={0}
            // accessibility rule
            role="menuitem"
      >
            {title}
      </li>
);

SongItem.propTypes = {
      onClickItem: PropTypes.func.isRequired,
      data: PropTypes.shape({
            title: PropTypes.string.isRequired,
      }).isRequired,
};

export default SongItem;
