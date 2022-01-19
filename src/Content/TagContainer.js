import React from "react";
import "./TagContainer.css";
import { Divider } from "@mui/material";
import Tag from "./Tag";
import { useRef, useEffect } from "react";


function TagContainer() {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="tagContainer" ref={scrollRef}>
      <div className="tagContainer_col"  >
          <Tag title="전체"/>
          <Tag title="실시간"/>
          <Tag title="음악"/>
          <Tag title="ASMR"/>
          <Tag title="믹스"/>
          <Tag title="애니메이션"/>
          <Tag title="게임"/>
          <Tag title="부동산"/>
          <Tag title="포켓몬"/>
          <Tag title="자연"/>
          <Tag title="공예"/>
          <Tag title="미용"/>
          <Tag title="피트니스"/>
          <Tag title="액션 어드벤처 게임"/>
          <Tag title="요리"/>
          <Tag title="최근에 업로드된 동영상"/>
          <Tag title="감상한 동영상"/>

      </div>
    </div>
  );
}

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

export default TagContainer;
