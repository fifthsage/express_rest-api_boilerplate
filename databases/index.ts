import minimist from 'minimist';
import databaseConn, {closeDatabaseConn} from '../src/helpers/databaseConn';

const argv = minimist(process.argv.slice(2));

const startSeed = async () => {
  try {
    await databaseConn();

    if (argv._.length > 0) {
      const what = argv._[0];
      argv._ = argv._.slice(1);
      if (argv._.length > 0) {
        await Promise.all(
          argv._.map(async arg => {
            const excute = await import(`./${what}/${arg}`);
            return await excute.default;
          }),
        );
      } else {
        const excute = await import(`./${what}`);
        await excute.default;
      }
    }

    await closeDatabaseConn();
  } catch (err) {
    throw new Error(err);
  }
};

export default startSeed();
