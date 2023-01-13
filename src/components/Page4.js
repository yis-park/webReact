import { useEffect, useState } from "react";

function Page4() {
  let [count1, setCount] = useState(850);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(130);
  let [count4, setCount4] = useState(1980);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count1 == 8500) {
        clearInterval(count1);
        return false;
      }
      setCount(count1 + 850);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [count1]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count2 == 99) {
        clearInterval(count2);
        return false;
      }
      setCount2(count2 + 11);
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [count2]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count3 == 146) {
        clearInterval(count3);
        return false;
      }
      setCount3(count3 + 1);
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [count3]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count4 == 2022) {
        clearInterval(count4);
        return false;
      }
      setCount4(count4 + 2);
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [count4]);

  // let countBox3 = document.querySelector(".count3");
  // let count3 = 0;
  // let counting3 = setInterval(function () {
  //   if (count3 == 150) {
  //     clearInterval(counting3);
  //     return false;
  //   }
  //   count3 += 15;
  //   countBox3.innerHTML = new Intl.NumberFormat().format(count3) + " +";
  // }, 100);

  // let countBox4 = document.querySelector(".count4");
  // let count4 = 1980;
  // let counting4 = setInterval(function () {
  //   if (count4 == 2022) {
  //     clearInterval(counting4);
  //     return false;
  //   }
  //   count4 += 2;
  //   countBox4.innerHTML = new Intl.NumberFormat().format(count4);
  // }, 50);
  return (
    <section className="contents5">
      <div className="flex_list">
        <div className="flex_list_fr flex">
          <span className="material-symbols-rounded"> corporate_fare </span>
          <br />
          <span className="count1 count">{count1} m</span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
        <div className="flex_list_se flex">
          <span className="material-symbols-rounded"> group </span>
          <br />
          <span className="count2 count">{count2} %</span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
        <div className="flex_list_th flex">
          <span className="material-symbols-rounded"> join </span>
          <br />
          <span className="count3 count">{count3} +</span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
        <div className="flex_list_fo flex">
          <span className="material-symbols-rounded"> nest_eco_leaf </span>
          <br />
          <span className="count4 count">{count4}</span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
      </div>
      {/* <Page4Counter /> */}
    </section>
  );
}

export default Page4;
