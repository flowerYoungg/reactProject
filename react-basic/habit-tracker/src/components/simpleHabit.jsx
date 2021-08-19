import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  //setCount : count를 업데이트함
  //useState : React Hook 에서 제공하는 API, 메모리에 값을 저장하고 있음
  const [count, setCount] = useState(0);
  //useRef : 한 번 만들고 재사용
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });
  //useEffect : component가 처음 마운트되었을 때나 업데이트(count가 변경되면) 될 때마다 호출
  useEffect(() => {
    console.log(`mounted & updated : ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
