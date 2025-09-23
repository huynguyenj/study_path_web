import type { CourseType } from './types/courses-type'

export const tableFakeCourses: CourseType[] = [
     {
    id: 1,
    title: 'React for Beginners',
    organization: 'Udemy',
    description: 'Learn the fundamentals of React.js including hooks, state management, and component-based architecture.',
    star: 4.7,
    reviews: 15420,
    image: 'https://images.viblo.asia/548b7fea-3301-4c27-b436-2d3a70606d81.png',
    price: 350000,
    type: 'Programming'
  },
  {
    id: 2,
    title: 'Introduction to Machine Learning',
    organization: 'Coursera',
    description: 'A hands-on introduction to supervised and unsupervised learning, regression, classification, and clustering.',
    star: 4.8,
    reviews: 8750,
    image: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/167853/Originals/machine-learning-1.jpg',
    price: 550000,
    type: 'Data Science'
  },
  {
    id: 3,
    title: 'UI/UX Design Essentials',
    organization: 'Skillshare',
    description: 'Master the basics of user interface and user experience design with practical Figma projects.',
    star: 4.5,
    reviews: 4300,
    image: 'https://example.com/images/uiux-course.jpg',
    price: 800000,
    type: 'Design'
  },
  {
    id: 4,
    title: 'iOS App Development with Swift',
    organization: 'Udacity',
    description: 'Build iOS applications from scratch using Swift and Xcode, covering UIKit and SwiftUI.',
    star: 4.6,
    reviews: 6900,
    image: 'https://images.viblo.asia/d03ca5d7-9fea-4d12-83fe-5eeaf08c0d0f.png',
    price: 150000,
    type: 'Mobile Development'
  },
  {
    id: 5,
    title: 'Digital Marketing Strategy',
    organization: 'edX',
    description: 'Develop data-driven digital marketing campaigns using SEO, SEM, and social media strategies.',
    star: 4.4,
    reviews: 5200,
    image: 'https://caodang.fpt.edu.vn/wp-content/uploads/11112.jpg',
    price: 200000,
    type: 'Marketing'
  }
]