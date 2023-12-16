export interface IRoute {
  title: string;
  path: string;
}

export class PublicRoutes {
  public static readonly homeRoute: IRoute = {
    title: 'Home',
    path: '',
  };
  public static readonly contactRoute: IRoute = {
    title: 'Contact',
    path: 'contact',
  };
  public static readonly oneWayBindRoute: IRoute = {
    title: 'Data bind',
    path: 'one-way-bind',
  };
  public static readonly twoWayBindRoute: IRoute = {
    title: 'Two Way bind',
    path: 'Two-way-bind',
  };
}
