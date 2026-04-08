import React from 'react'
import { useEffect, useState } from "react";

export default function CountUp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const target1 = 550;
  const target2 = 50;
  const target3 = 100;
  const duration = 2000;

  useEffect(() => {
    let start1 = 0;
    let start2 = 0;
    let start3 = 0;

    const increment1 = target1 / (duration / 16);
    const increment2 = target2 / (duration / 16);
    const increment3 = target3 / (duration / 16);

    const timer = setInterval(() => {
      start1 += increment1;
      start2 += increment2;
      start3 += increment3;

      if (start1 >= target1 && start2 >= target2 && start3 >= target3) {
        setCount1(target1);
        setCount2(target2);
        setCount3(target3);
        clearInterval(timer);
      } else {
        if (start1 < target1) setCount1(Math.floor(start1));
        if (start2 < target2) setCount2(Math.floor(start2));
        if (start3 < target3) setCount3(Math.floor(start3));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-20">
      <div className="flex justify-between text-center">
        <div>
          <h1 className="text-[35px] md:text-[45] lg:text-[60px] font-bold">{count1}+</h1>
          <p className="mt-4 text-lg">Customers</p>
        </div>

        <div>
          <h1 className="text-[35px] md:text-[45] lg:text-[60px] font-bold">{count2}+</h1>
          <p className="mt-4 text-lg">Offices</p>
        </div>

        <div>
          <h1 className="text-[35px] md:text-[45] lg:text-[60px] font-bold">{count3}+</h1>
          <p className="mt-4 text-lg">Students</p>
        </div>
      </div>
    </div>
  );
}