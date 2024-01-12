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
      title: 'session three',
      routes: [
        {
          routeTitle: 'Data Binding',
          routePath: 'session-three/one-way-bind',
        },
        {
          routeTitle: 'Two Way bind',
          routePath: 'session-three/Two-way-bind',
        },
        {
          routeTitle: 'Card',
          routePath: 'session-three/course-card',
        },
      ],
    },
    {
      id: 2,
      title: 'session four',
      routes: [
        {
          routeTitle: 'Template-Ref-Var',
          routePath: 'sessionFour/template-ref-va',
        },
        {
          routeTitle: 'view child & children',
          routePath: 'sessionFour/view-child-children',
        },
        {
          routeTitle: 'Services',
          routePath: 'sessionFour/all-services',
        },
        {
          routePath: 'sessionFour/css',
          routeTitle: 'css',
        },
      ],
    },
    {
      id: 3,
      title: 'session five',
      routes: [
        {
          routeTitle: 'Forms types',
          routePath: 'forms-types',
        },
        {
          routeTitle: 'Reactive Forms',
          routePath: 'reactive-forms',
        },
        {
          routeTitle: 'Single Form',
          routePath: 'single-form',
        },
      ],
    },
    {
      id: 4,
      title: 'session six',
      routes: [
        {
          routeTitle: 'Pipes Details',
          routePath: 'pipe-details',
        },
        {
          routeTitle: 'Pipes',
          routePath: 'pipes',
        },
        {
          routeTitle: 'Observable Concept',
          routePath: 'observable-concept',
        },
        {
          routeTitle: 'Observable',
          routePath: 'observable',
        },
        {
          routePath: 'observable-of-from',
          routeTitle: 'observable of and from',
        },
        {
          routePath: 'observable-filter-map',
          routeTitle: 'observable filter  and map',
        },
        {
          routePath: 'observable-subject',
          routeTitle: 'observable subject',
        },
      ],
    },
    {
      id: 5,
      title: 'session seven',
      routes: [
        {
          routeTitle: 'Post Data',
          routePath: 'http-post',
        },
        {
          routeTitle: 'Get Data',
          routePath: 'http-get',
        },
       
      ],
    },
  ];
}
