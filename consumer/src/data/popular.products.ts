export interface PopularProductDataInterface {
  id: number;
  image: string;
}

const PopularProductsData: Array<PopularProductDataInterface> = [
  {
    id: 1,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.5',
  },
  {
    id: 2,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.6',
  },
  {
    id: 3,
    image: process.env.REACT_APP_IMAGE_SERVER + 'phone.2',
  },
  {
    id: 4,
    image: process.env.REACT_APP_IMAGE_SERVER + 'headphone.2',
  },
  {
    id: 5,
    image: process.env.REACT_APP_IMAGE_SERVER + 'clock.5',
  },
  {
    id: 6,
    image: process.env.REACT_APP_IMAGE_SERVER + 'watch.4',
  },
  {
    id: 7,
    image: process.env.REACT_APP_IMAGE_SERVER + 'phone.1',
  },
  {
    id: 8,
    image: process.env.REACT_APP_IMAGE_SERVER + 'clock.4',
  }
];

export default PopularProductsData;
