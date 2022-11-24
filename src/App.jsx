import { useState, useRef } from "react";
import "./App.scss";
import Scroll from "./component/Scroll";
import Gogo from './component/Gogo'
import Effct from './component/Effct'

let score = 0;

function App() {
  const [data1, setData1] = useState([3, 2, 1]);
  const [data2, setData2] = useState([3, 2, 1]);
  const [data3, setData3] = useState([3, 2, 1]);
  const [credit, setCredit] = useState(0);
  const timer1 = useRef();
  const timer2 = useRef();
  const timer3 = useRef();
  const leftReel = useRef();
  const centerReel = useRef();
  const rigthReel = useRef();
  const [judge1, setJudge1] = useState(false);
  const [judge2, setJudge2] = useState(false);
  const [judge3, setJudge3] = useState(false);
  const [open,setOpen] = useState(false)
  const myLength = 7;

  const displayHandler = () => setOpen(!open)


  const reels = (setData, secound) => {
    return setInterval(() => {
      setData((data) => {
        return data.map((i) => {
          // console.log(i)
          if (i === myLength) {
            return 1;
          } else {
            return i + 1;
          }
        });
      });
    }, secound);
  };

  const setTime1 = () => {
    return reels(setData1,130);
  };
  const setTime2 = () => {
    return reels(setData2, 120);
  };
  const setTime3 = () => {
    return reels(setData3, 100);
  };

  const btn = (e, i) => {
    if (i === 1) {
      clearInterval(timer1.current);
      timer1.current = null;
      setJudge1(!judge1);
    } else if (i === 2) {
      clearInterval(timer2.current);
      timer2.current = null;
      setJudge2(!judge2);
    } else if (i === 3) {
      clearInterval(timer3.current);
      timer3.current = null;
      setJudge3(!judge3);
    }
    if (
      timer1.current === null &&
      timer2.current === null &&
      timer3.current === null
    ) {
      console.log("全部止まりました。");
      if (data1[1] === data2[1]) {
        if (data2[1] === data3[1]) {
          if (data1[1] === 1) {
            console.log("BIG!!");
            score += 7;
            setCredit(score);
          } else {
            console.log("noBIG!!");
            score += 3;
            console.log(score);
            setCredit(score);
          }
        }
      }
    }
  };
  const reSet = () => {
    timer1.current = setTime1();
    timer2.current = setTime2();
    timer3.current = setTime3();
    setJudge1(false);
    setJudge2(false);
    setJudge3(false);
  };
  return (
    <>
      <div className='App'>
        <div className='contentMachine'>
          <div className='bigChance'>
            {/*Big Chance*/}
            <img src='/img/bigChance.png' alt='Big Chance!'></img>
          </div>

          <div className='luckyNumber' onClick={displayHandler}>
            {/*777,clickで関数動かしたい*/}
            <img src='/img/luckyNum@2x.png' alt='Lucky Number 777'></img>
          </div>

          <div className='slotReel'>
            <Scroll ref={leftReel} csn='leftReel' data={data1} />
            <Scroll ref={centerReel} csn='centerReel' data={data2} />
            <Scroll ref={rigthReel} csn='rigthReel' data={data3}  />
          </div>
            <div className='gogo'>
              <Gogo open={open} />
            </div>

          <div className='credit'>{credit}</div>

          <div className='pushBtn'>
            <button className='lvr' onClick={reSet}></button>

            <div className='btnCover'>
              <button className={`leftBtn ${judge1 ? "active" : ""}`} onClick={(e) => btn(e, 1)}></button>
              <button className={`centerBtn ${judge2 ? "active" : ""}`} onClick={(e) => btn(e, 2)}></button>
              <button className={`rightBtn ${judge3 ? "active" : ""}`} onClick={(e) => btn(e, 3)}></button>
            </div>
          </div>
        </div>
      </div>
      {open && <Effct />}
    </>
  );
}

export default App;
