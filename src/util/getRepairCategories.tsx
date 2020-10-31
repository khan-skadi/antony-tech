import { repairServices } from '../util/constants';

import repImg1 from '../assets/images/repair/desktop.png';
import repImg2 from '../assets/images/repair/laptop.png';
import repImg3 from '../assets/images/repair/macbook.png';
import repImg4 from '../assets/images/repair/ipad.png';
import repImg5 from '../assets/images/repair/iphone.png';
import repImg6 from '../assets/images/repair/smartphone.png';

interface ArrayProps {
  image: string;
  text: string;
}

const getRepairCategories = () => {
  const repImg: string[] = [
    repImg1,
    repImg2,
    repImg3,
    repImg4,
    repImg5,
    repImg6
  ];
  let arr: Array<ArrayProps> = [];
  const repairValues: string[] = Object.values(repairServices);

  for (let i = 0; i < repImg.length; i++) {
    arr.push({
      image: repImg[i],
      text: repairValues[i]
    });
  }

  return arr;
};

export default getRepairCategories;
