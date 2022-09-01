import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import notfound from './../../../assets/user-avatar.png'
import anonymousCompany from './../../../assets/anonymous-company.jpg'

function HorizontalScrolling({items,company}) {
  return (
    <>
    <ScrollMenu 
    LeftArrow={LeftArrow} 
    RightArrow={RightArrow} 
    scrollContainerClassName="scroll-bar"
    >
      {company?
      items.map(({ id,logo_path,name }) => (
        <div key={id}>
          {logo_path?
          <img src={"https://image.tmdb.org/t/p/w500/"+logo_path} className="company-photo"/>
          :
          <img src={anonymousCompany} className="company-photo"/>
          }

        <div style={{textAlign:'center'}}>{name}</div>
      </div>
      ))
      :
      items.map(({ id,profile_path,name }) => (
        <div key={id}>
          {profile_path?
          <img src={"https://image.tmdb.org/t/p/w500/"+profile_path} className="actor-photo"/>
          :
          <img src={notfound} className="actor-photo"/>
          }

        <div>{name}</div>
      </div>
      ))
      }
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