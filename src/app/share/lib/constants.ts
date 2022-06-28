import { RouteLink } from '../models/route-link.model';

export class Constans {
  constructor() {}

  static DEV_NAME = 'vane';

  static TOP_BAR_LINKS: RouteLink[] = [
    {
      name: 'Inicio',
      route: '/',
    },
    {
      name: 'Empleados',
      route: '/empleados',
    },
    {
      name: 'Grupos',
      route: '/grupos',
    },
  ];
}
