export interface ISidebarRoute {
  id: number;
  title: string;
  routes: {
    routeTitle: string;
    routePath: string;
  }[];
}

export class SidebarData {
  public static readonly SidebarRoutes: ISidebarRoute[] = [
    {
      id: 1,
      title: 'Session-3',
      routes: [
        {
          routeTitle: 'Data Binding',
          routePath: 'one-way-bind',
        },
        {
          routeTitle: 'Two Way bind',
          routePath: 'Two-way-bind',
        },
        {
          routeTitle: 'Card',
          routePath: 'course-card',
        },
      ],
    },
    {
      id: 2,
      title: 'Session-4',
      routes: [
        {
          routeTitle: 'Data Binding',
          routePath: 'one-way-bind',
        },
      ],
    },
  ];
}
