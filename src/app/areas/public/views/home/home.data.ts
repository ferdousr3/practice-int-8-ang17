export interface IBlog {
  id: number;
  date: string;
  topic: string;
  title: string;
  details: string;
  userName: string;
  userProfilePic: string;
  userDesignation: string;
}

export class HomeData {
  public static readonly blogs: IBlog[] = [
    {
      id: 1,
      date: 'Mar 16, 2020',
      topic: 'Marketing',
      title: ' Boost your conversion rate',
      details: `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
      userName: 'Co-Founder / CTO',
      userProfilePic: `https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
      userDesignation: ' Michael Foster',
    },
    {
      id: 2,
      date: 'Mar 10, 2020',
      topic: 'Sales',
      title: 'How to use search engine optimization to drive sales',
      details: `Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.`,
      userName: 'Front-end Developer',
      userProfilePic: `https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
      userDesignation: ' Lindsay Walton',
    },
    {
      id: 3,
      date: 'Feb 16, 2020',
      topic: 'Business',
      title: 'Improve your customer experience',
      details: `Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.`,
      userName: 'Director of Product',
      userProfilePic: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
      userDesignation: ' Tom Cook',
    },
  ];
}
