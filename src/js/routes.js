
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import PhonesPage from '../pages/phones.f7.html';
import PhonesDetailsPage from '../pages/phones-details.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/phones/:id/',
	component: PhonesPage,
},
{
	path: '/phones-details/:brands/:phones/',
	component: PhonesDetailsPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;