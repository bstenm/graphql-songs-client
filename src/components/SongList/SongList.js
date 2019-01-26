import './SongList.css';
import React from 'react';
import PropTypes from 'prop-types';
import SongItem from '../SongItem';

const SongList = ({ list, onClickSongItem }) => (
      <ul className="SongList">
            {list.map((e, idx) => (
                  <SongItem
                        key={e.title}
                        data={e}
                        onClickItem={() => onClickSongItem(idx)}
                  />
            ))}
      </ul>
);

SongList.defaultProps = {
      list: PropTypes.array,
};

SongList.propTypes = {
      list: PropTypes.array,
      onClickSongItem: PropTypes.func.isRequired,
};

export default SongList;
