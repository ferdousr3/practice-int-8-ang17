export interface ICourse {
  id: number;
  courseName: string;
  courseDetails: string;
  courseType: string;
  price: number;
  isRegistration: boolean;
  img?:string;
}

export class SessionThreeData {
  public static readonly courses: ICourse[] = [
    {
      id: 1,
      courseName: 'Professional Programming with C#',
      courseDetails:
        'In this course we will learn all the things that we need to have a good understanding to make ourselves as a good quality software developer, through lots of practice with C# programming language.',
      courseType: 'Beginner',
      price: 500,
      isRegistration: true,
      img: './assets/images/courses/csharp.png',
    },
    {
      id: 2,
      courseName: 'Full Stack Asp.net Core MVC Web Development ',
      courseDetails:
        'This course is designed to fill up important gaps in your journey to become a professional software engineer. In this course you learn about industry good practices and professional software development.',
      courseType: 'Intermediate',
      price: 800,
      isRegistration: false,
      img: './assets/images/courses/dotnetcore.png',
    },
    {
      id: 3,
      courseName: 'ReactJs - The Complete Guide ',
      courseDetails:
        'Learn React or dive deeper into it. Learn the "What", "Why" and "How" of ReactJs, solve assignments, practice in demo projects, and build one big application that is improved throughout the course.',
      courseType: 'Intermediate',
      price: 400,
      isRegistration: true,
      img: './assets/images/courses/reactjs.png',
    },
    {
      id: 4,
      courseName: 'Docker Essentials  ',
      courseDetails:
        'Docker Essentials Course will help you to learn how to develop and deploy web applications with Docker technologies. Take your DevOps skills to the next level. Course highlight: Clear and complete',
      courseType: 'Intermediate',
      price: 400,
      isRegistration: true,
      img: './assets/images/courses/docker.jpg',
    },
    {
      id: 5,
      courseName: 'Professional Programming With Python ',
      courseDetails:
        'Professional Programming With Python- course is for those who want to be job ready or to strengthen their CV. This course provides all the python knowledge that someone needs to apply to real-world ap',
      courseType: 'Beginner',
      price: 600,
      isRegistration: false,
      img: './assets/images/courses/python.png',
    },
  ];
}
