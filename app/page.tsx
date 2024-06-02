"use client";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Home() {
  const splineRef = useRef(null);

  function onLoad(spline) {
    const obj = spline.findObjectByName("Cube");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    cube.current = obj;
  }

  return (
    <div className="flex w-screen h-screen">
      <Spline
        scene="https://prod.spline.design/sU52wUizHmGnbAwh/scene.splinecode"
        className="w-screen h-screen"
        ref={splineRef}
        onLoad={onLoad}
      />
    </div>
  );
}
