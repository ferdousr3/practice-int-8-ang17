export interface IRoute {
  title: string;
  path: string;
}

export class PublicRoutes {
  //   public static readonly routes:IRoute = {
  //    {
  //       title:'Home',
  //       path:''
  //    },

  // {
  //    title:'Contact',
  //    path:'contact',
  // }
  //   };
  public static readonly homeRoute: IRoute = {
    title: 'Home',
    path: '',
  };
  public static readonly contactRoute: IRoute = {
    title: 'Contact',
    path: 'contact',
  };
}
