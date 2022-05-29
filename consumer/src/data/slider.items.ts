export interface SliderItemDataInterface {
  id: number;
  image: string;
  title: string;
  description: string;
  bg: string;
}

const SliderItemsData: Array<SliderItemDataInterface> = [
  {
    id: 1,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.1',
    title: 'BLACK FRIDAY SALE',
    description: 'NEW GAMING RIGS, CLOTHS, HOME APPLIANCES, AND OTHER PRODUCTS WITH GOOD DISCOUNT',
    bg: '000000'
  },
  {
    id: 2,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.2',
    title: 'BLACK FRIDAY SALE',
    description: 'NEW GAMING RIGS, CLOTHS, HOME APPLIANCES, AND OTHER PRODUCTS WITH GOOD DISCOUNT',
    bg: '000000'
  },
  {
    id: 3,
    image: process.env.REACT_APP_IMAGE_SERVER + 'pc.3',
    title: 'BLACK FRIDAY SALE',
    description: 'NEW GAMING RIGS, CLOTHS, HOME APPLIANCES, AND OTHER PRODUCTS WITH GOOD DISCOUNT',
    bg: '000000'
  }
];

export default SliderItemsData;
