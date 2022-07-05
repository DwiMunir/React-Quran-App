import React from 'react'
import {Badge, Card} from 'antd'


function CardQuran({
  data,
  key
}) {

  return (
    <Badge.Ribbon 
      color="cyan"
      className='rounded border relative hover:shadow-md duration-300 text-xs'
      text={`${data.numberOfVerses} Surah`}
      
    >
      <Card 
        className='rounded-lg hover:shadow-md duration-300 cursor-pointer'
      >
        <span></span>
        <h2 className='text-center text-lg mt-5'>{data.name.short}</h2>
        <p className='text-center text-slate-500 text-sm mt-3 mb-1'>{data.name.transliteration.id}</p>
        <p className='text-center text-slate-400 text-xs mt-0'>({data.name.translation.id})</p>
      </Card>
    </Badge.Ribbon>
  )
}

export default CardQuran