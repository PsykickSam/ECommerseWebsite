import { ICategoryData } from 'interface/ICategoryData';

const CategoriesData: Array<ICategoryData> = [
  {
    id: 1,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.4',
    title: 'COMPUTERS ',
  },
  {
    id: 2,
    image: process.env.REACT_APP_IMAGE_SERVER + 'cloths.1',
    title: 'CLOTHS',
  },
  {
    id: 3,
    image: process.env.REACT_APP_IMAGE_SERVER + 'books.1',
    title: 'BOOKS',
  }
];

export default CategoriesData;
