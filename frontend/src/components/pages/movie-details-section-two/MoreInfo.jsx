import React from 'react'
import {MdAvTimer, MdLanguage, MdOutlineDoubleArrow} from 'react-icons/md'
import { BsCalendarDate } from 'react-icons/bs'
import HorizontalScrolling from '../scroll-bar/HorizontalScrolling'

function MoreInfo({
  tagline,
  genres,
  release_date,
  spoken_languages,
  runtime,
  production_companies
}) {
  return (
    <div style={{width:'700px'}}>
      <h5>"{tagline}"</h5>
      <div className="genres-line">
        <h5><MdOutlineDoubleArrow /> Genres : </h5>
        {genres.map(genre => {
          return <h5 key={genre.id} style={{color:'#81ecec'}}>| {genre.name} |</h5>
        })}
      </div>
      <h5><BsCalendarDate /> Released Date : {release_date}</h5>
      <h5><MdLanguage /> Spoken Langauge : {spoken_languages?spoken_languages[0].english_name:"not found"}</h5>
      <h5><MdAvTimer /> Runtime : {runtime?runtime:"..."} minute</h5>
      <h5 style={{marginBottom:'5vh'}}><MdOutlineDoubleArrow /> Productions Companies :</h5>
      {production_companies.length !== 0?
      <HorizontalScrolling items={production_companies} company={true} />
      :
      <>Companies not found</>
      }
    </div>
  )
}

export default MoreInfo