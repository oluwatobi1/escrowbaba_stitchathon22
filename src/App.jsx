import withContext from './views/hoc/withContext';
import AllRoutes from './views/routes';

const App = () => {
  return (
    <AllRoutes/>
  )
}

export default withContext(App);
