import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function ({ min, max }) {
  const [count, setCount] = useState(min);

  function increment() {
    if (count >= max) {
      return;
    }

    setCount(count + 1);
  }

  function decrement() {
    if (count <= min) {
      return;
    }

    setCount(count - 1);
  }

  function set(value) {
    if (value > max) {
      setCount(max);
    } else if (value < min) {
      setCount(min);
    } else {
      setCount(value);
    }
  }

  return {
    current: count,
    increment: increment,
    decrement: decrement,
    set: set,
  };
}
