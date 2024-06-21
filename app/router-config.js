import { VendrControllers } from "./controllers/VendrControllers.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [VendrControllers],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])