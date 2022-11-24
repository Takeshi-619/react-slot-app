import React from "react";
import img1 from "/img/number/777.png"
import img2 from "/img/number/budou.png"
import img3 from "/img/number/chery.png"
import img4 from "/img/number/piero_1.png"
import img5 from "/img/number/sai.png"
import img6 from "/img/number/suzu.png"
import img7 from "/img/number/taiger.png"
import { memo } from "react";

const imgs = [null, img1, img2, img3, img4, img5, img6, img7];


const Scroll = memo(React.forwardRef(({ csn, data = []}, ref) => {
  return (
    <div className={csn}>
      <div className='reelP'>
        <ul ref={ref}>
          {data.map((item, index) => (
            <li key={index}>
            <img src={imgs[item]} className='numbersImgs' /> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}));

export default Scroll;
