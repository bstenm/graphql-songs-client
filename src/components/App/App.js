import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import queries from '../../config/queries';
import SongList from '../SongList';
import MusicPlayer from '../MusicPlayer';
import './App.css';

const App = props => (
      <div className="App">
            <Query
                  query={queries.songs}
                  variables={{ artist: 'jamiroquai', nb: 10 }}
            >
                  {({ data, loading, error }) => {
                        if (loading) {
                              return <div className="loader" />;
                        }
                        if (error) {
                              return (
                                    <div className="error">
                                          Something went wrong :(
                                    </div>
                              );
                        }

                        const { selected, playSong } = props;

                        return (
                              <div className="App">
                                    <SongList
                                          list={data.songs}
                                          onClickSongItem={playSong}
                                    />
                                    {selected !== null && (
                                          <MusicPlayer
                                                data={data.songs[selected]}
                                          />
                                    )}
                              </div>
                        );
                  }}
            </Query>
      </div>
);

App.defaultProps = {
      selected: null,
};

App.propTypes = {
      selected: PropTypes.number,
      playSong: PropTypes.func.isRequired,
};

export default App;
