import CatalogueList from '../views/pages/catalogue-list';
import Detail from '../views/pages/detail';

const routes = {
    '/': CatalogueList,
    '/home': CatalogueList,
    '/detail/id': Detail,
};

export default routes;