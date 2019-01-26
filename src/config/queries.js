import gql from 'graphql-tag';

export default {
      songs: gql`
            query songs($artist: String!, $nb: Int) {
                  songs(artist: $artist, nb: $nb) {
                        title
                  }
            }
      `,
};
