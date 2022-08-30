import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import notfound from './../../../assets/user-avatar.png'

function HorizontalScrolling({actors}) {
  return (
    <>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollContainerClassName="scroll-bar">
      {actors.map(({ id,profile_path,name }) => (
        <div key={id}>
          {profile_path?
          <img src={"https://image.tmdb.org/t/p/w500/"+profile_path} className="actor-photo"/>
          :
          <img src={notfound} className="actor-photo"/>
          }

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
    <span disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="arrow-btn-scroll">
      <BsFillArrowLeftCircleFill />
    </span>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <span disabled={isLastItemVisible} onClick={() => scrollNext()} className="arrow-btn-scroll">
      <BsFillArrowRightCircleFill/>
    </span>
  );
}


export default HorizontalScrolling;