import common from '../config/common';
import server from './server';

export default server()
  .then(app => {
    console.log(`🚀 Server ready at ${common.port}`);

    return app;
  })
  .catch(e => {
    console.log(e);
  });
