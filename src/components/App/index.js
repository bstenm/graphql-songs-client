import { connect } from 'react-redux';
import Component from './App';
import { playSong } from '../../actions/songs';

export default connect(
      ({ songs: { selected } }) => ({ selected }),
      { playSong },
)(Component);
