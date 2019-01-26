import React from 'react';
import { Query } from 'react-apollo';
import queries from '../../config/queries';
import App from './App';

const AppContainer = () => (
      <div className="AppContainer">
            <Query query={queries.songs}>
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

                        return <App />;
                  }}
            </Query>
      </div>
);

export default AppContainer;
