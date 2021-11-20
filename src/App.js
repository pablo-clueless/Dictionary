import { useState, useEffect } from 'react'
import { FaSearch, FaVolumeUp } from 'react-icons/fa'
import Header from './comps/Header'
import Loading from './comps/Loading'
import NotFound from './comps/NotFound'

function App() {
  const [query,setQuery] = useState('renegade')
  const [data,setData] = useState([])
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(true)

  const fetchData = async () => {
    try{
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`)

      if (!res.ok) {
      throw Error(
        "Word not found, try another entry"
      )
    }
    const data = await res.json()

    setData(data)
    setLoading(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const search = (e) => {
    e.preventDefault()
    setLoading(true)
    fetchData()
  }

  const playAudio = () => {
    let audio = new Audio(data[0].phonetics[0].audio)
    audio.play()
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if (error) {
    return <NotFound error={error}/>
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <>
    <Header />
    <main>
    <div className='input'>
      <input
          type="text"
          placeholder='Search words here'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={search}>
          <FaSearch />
        </button>
    </div>
        {data && (
          <div className='result'>
          <h2 className='word'>{data[0].word}</h2>
          <div className='flex'>
            <p>/{data[0].phonetic}/</p>
            <button onClick={playAudio}><FaVolumeUp/></button>
          </div>
          {data[0].meanings.map((meaning, i) => (
            <div key={i} className='meaning'>
              <h4>part of speech: {meaning.partOfSpeech}</h4>
              {meaning.definitions.map((definition, i) => (
                <ul key={i}>
                  <li>{definition.definition}</li>
                  {definition.example ? (
                    <p>example: {definition.example}</p>
                  ) : ('')}
                  {definition.synonyms && (
                    <div className='synonyms'>
                      <p>synonyms:</p>
                      {definition.synonyms.map((synonym, i) => (
                      <li key={i}>{synonym}</li>
                      ))}
                    </div>
                  )}
                </ul>
              ))}
            </div>
          ))}
          <p className='origin'>Origin: {data[0].origin}</p>
          </div>
        )}
    </main>
    </>
  )
}

export default App;
