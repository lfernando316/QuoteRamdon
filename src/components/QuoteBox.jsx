import React from 'react'
import QuotationMarks from './QuotationMarks'


const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    console.log(randomColor)

    const colorObj = {
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

  return (
    <article style={colorObj} className='card'>
        <p className='card__quote'><QuotationMarks />{randomQuote.quote} </p>
        <h1 className='card__author'>{randomQuote.author} </h1>
        <button 
            className='card__btn' 
            style={backgroundObj}
            onClick={getRandomAll}
        >&#62;</button>
    </article>
  )
}

export default QuoteBox
