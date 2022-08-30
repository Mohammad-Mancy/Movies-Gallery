import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function HorizontalScrolling({actors}) {
  return (
    <>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="scroll-bar">
      {actors.map(({ id,profile_path,name }) => (
        <div >
        <img src={"https://image.tmdb.org/t/p/w500/"+profile_path} className="actor-photo"/>
        <div>{name}</div>
      </div>
      ))}
    </ScrollMenu>
    </>

  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <span disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </span>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <span disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </span>
  );
}


export default HorizontalScrolling;