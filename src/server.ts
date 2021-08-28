import app from './App';
import colors from 'colors';

try {
  app.listen(process.env.PORT, () => {
    console.log(colors.green(`Server listening on port ${process.env.PORT}`));
  });
} catch (error) {
  console.log(colors.red(error.message));
}
