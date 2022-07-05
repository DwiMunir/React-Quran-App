import React, { useEffect, useState } from 'react'
import apiRepository from '../../repository/api.repository'
import CardQuran from '../Card'
import useDebounce from '../utils/debounce'

function Home() {
  const [listSurah, setListSurah] = useState([])
  const [master, setMaster] = useState([])
  const [keyword, setKeyword] = useState('')

  const search = useDebounce(keyword, 500)

  const allSurah = async () => {
    const data = await apiRepository.get('surah')
      .then((res) => res)
      .catch((err) => console.log(err))

    if (data.status === 200) {
      setListSurah(data.data.data)
      setMaster(data.data.data)
    }
  }

  useEffect(() => {
    if (master) {
      const data = master.filter((item) => {
        return JSON.stringify(item.name).toLowerCase().includes(search.toLowerCase())
        // return JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
      })
      setListSurah(data)
    }
  }, [master, search])

  useEffect(() => {
    allSurah()
  }, [])
  return (
    <div>
      <div className="w-full h-60 bg-gradient-to-br from-green-500 to-blue-500 flex justify-center py-12">
        <div className="title text-white font-semibold text-3xl">AL-QUR'AN APP</div>
      </div>
      <div className="serach flex justify-center relative -top-7">
        <input
          type="text"
          className='w-2/4 bg-white rounded-full shadow-lg py-4 px-4 focus:outline-none'
          placeholder='Cari surah...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="container mx-auto py-10 flex justify-start flex-wrap">
        {
          listSurah ? listSurah.map((item, index) => {
            return (
              <div className='w-3/12 px-2 my-2' key={index}>
                <CardQuran data={item} />
              </div>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export default Home