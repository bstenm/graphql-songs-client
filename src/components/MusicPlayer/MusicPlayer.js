import React from 'react';
import PropTypes from 'prop-types';
import cf from '../../config';

class MusicPlayer extends React.Component {
      constructor(props) {
            super(props);
            this.audioRef = React.createRef();
      }

      componentDidUpdate() {
            this.audioRef.current.load();
      }

      render() {
            const { title } = this.props.data;

            // the absolute path to the file
            const src = `${cf.filePath}${title.split(' ').join('+')}.mp3`;
            console.log(src);

            return (
                  <div className="MusicPlayer">
                        <audio
                              ref={this.audioRef}
                              controls
                              autoPlay
                              style={{ width: '400px' }}
                        >
                              <track src={src} kind="captions" />
                              <source src={src} type="audio/mpeg" />
                        </audio>
                  </div>
            );
      }
}

MusicPlayer.propTypes = {
      data: PropTypes.shape({
            title: PropTypes.string.isRequired,
      }).isRequired,
};

export default MusicPlayer;
