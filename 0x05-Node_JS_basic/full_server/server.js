import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;
module.exports = app;
