import { AppRoutes } from '../../../../app.routes';
import { PublicRoutes } from '../../public.routes';

export interface IHeaderRoute {
  title: string;
  path: string;
}
export class HeaderRoutes {
  public static readonly Routes: IHeaderRoute[] = [
    {
      title: PublicRoutes.homeRoute.title,
      path: PublicRoutes.homeRoute.path,
    },
    // {
    //   title: PublicRoutes.contactRoute.title,
    //   path: PublicRoutes.contactRoute.path,
    // },
    // {
    //   title: PublicRoutes.oneWayBindRoute.title,
    //   path: PublicRoutes.oneWayBindRoute.path,
    // },
    // {
    //   title: PublicRoutes.twoWayBindRoute.title,
    //   path: PublicRoutes.twoWayBindRoute.path,
    // },
    // {
    //   title: PublicRoutes.courseCardRoute.title,
    //   path: PublicRoutes.courseCardRoute.path,
    // },
    {
      title: AppRoutes.Sessions,
      path: AppRoutes.Sessions,
    },
  ];
}
