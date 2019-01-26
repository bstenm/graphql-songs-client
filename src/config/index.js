const env = process.env.NODE_ENV;

const grapqhQLendPoint =
      env === 'development'
            ? 'http://localhost:4000'
            : 'https://react-song-list.herokuapp.com/';

const filePath = 'https://s3.amazonaws.com/funky-songs/';

export default { filePath, grapqhQLendPoint };
