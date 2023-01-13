import React from "react";

function Page4() {
  let countBox1 = document.querySelector(".count1");
  let count1 = 0;

  let counting1 = setInterval(function () {
    if (count1 == 8500) {
      clearInterval(counting1);
      return false;
    }
    count1 += 850;
    countBox1.innerHTML = new Intl.NumberFormat().format(count1) + "m";
  }, 100);

  let countBox2 = document.querySelector(".count2");
  let count2 = 0;
  let counting2 = setInterval(function () {
    if (count2 == 99) {
      clearInterval(counting2);
      return false;
    }
    count2 += 11;
    countBox2.innerHTML = new Intl.NumberFormat().format(count2) + "%";
  }, 50);

  let countBox3 = document.querySelector(".count3");
  let count3 = 0;
  let counting3 = setInterval(function () {
    if (count3 == 150) {
      clearInterval(counting3);
      return false;
    }
    count3 += 15;
    countBox3.innerHTML = new Intl.NumberFormat().format(count3) + "+";
  }, 100);

  let countBox4 = document.querySelector(".count4");
  let count4 = 1980;
  let counting4 = setInterval(function () {
    if (count4 == 2022) {
      clearInterval(counting4);
      return false;
    }
    count4 += 2;
    countBox4.innerHTML = new Intl.NumberFormat().format(count4);
  }, 50);
  return (
    <section className="contents5">
      <div className="flex_list">
        <div className="flex_list_fr flex">
          <span className="material-symbols-rounded"> corporate_fare </span>
          <br />
          <span className="count1 count"></span>
          <p>품질은 양보다 더 중요하다.</p>
        </div>
        <div className="flex_list_se flex">
          <span className="material-symbols-rounded"> group </span>
          <br />
          <span className="count2 count"></span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
        <div className="flex_list_th flex">
          <span className="material-symbols-rounded"> join </span>
          <br />
          <span className="count3 count"></span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
        <div className="flex_list_fo flex">
          <span className="material-symbols-rounded"> nest_eco_leaf </span>
          <br />
          <span className="count4 count"></span>
          <p>품질은 양보다 더 중요하다</p>
        </div>
      </div>
    </section>
  );
}

export default Page4;
