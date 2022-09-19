import { useState } from 'react'
import './App.css'
import quotes from './assets/json/quotes.json'
import QuoteBox from './components/QuoteBox'
import color from './utils/color'

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firsColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firsColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }
   
  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColor={randomColor} 
        getRandomAll={getRandomAll}
        />
        
      
    </div>
  )
}




export default App
