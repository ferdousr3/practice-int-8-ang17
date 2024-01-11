export type IFeature = {
   id: number;
   img: string;
   title: string;
   description: string;

}

export const features: IFeature[] = [
   {
      id: 1,
      img: `bi bi-lock`,
      title: 'Push to deploy',
      description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.'
   },
   {
      id: 2,
      img: `bi bi-cloud-arrow-up`,
      title: 'SSL certificates',
      description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.'
   },
   {
      id: 3,
      img: `bi bi-arrow-repeat`,
      title: 'Simple queues',
      description: 'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.'
   },
   {
      id: 4,
      img: `bi bi-fingerprint`,
      title: 'Advanced security',
      description: 'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.'
   },
]