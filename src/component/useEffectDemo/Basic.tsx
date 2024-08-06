import { useEffect } from "react";
import React, { useState } from "react";

/*
    1. useEffect的 effect(side-effect) 代表副作用, 用來處理與 react無關的事, ex: fetch、log...
    2. useEffect的執行時機是 
          I.  畫面初始化的時候 invoke -> in jsx -> useEffect
          II. useEffect((callback(clean up function())), [dependencies]) 裡面的 dependencies value 有無改變
    3. Promise

*/

export default function Basic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    return () =>{
      console.log("clean up");
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      console.log("effect");
    }, 500);
    // clean up function
    return () => {
      console.log("clean up")
      timer && clearInterval(timer);
    }
  }, [count]);

  const addCount = () =>{
    setCount(count + 1);
  }

  console.log("component render");

  return (
    <>
      <h1>count: {count}</h1>
        {console.log("in jsx")}
      <button name="count" onClick={addCount}>add</button>
    </>
  );
}
