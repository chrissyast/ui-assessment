import React, { useEffect, useState } from 'react'
import './increasing-number-counter.css'
import PropTypes from 'prop-types'

export const IncreasingNumberCounter = ({ number, suffix, totalCountTime }) => {
  const [renderNumber, setRenderNumber] = useState(0)

  function countClass () {
    return renderNumber > 20 ? 'success' : renderNumber > 10 ? 'warning' : 'failure'
  }

  useEffect(() => {
    const time = totalCountTime || 1000
    const incrementDivision = Math.ceil(25 * number / time)
    const increment = setInterval(() => {
      if (renderNumber < number) {
        const amountToIncrement = Math.min(incrementDivision, number - renderNumber)
        setRenderNumber(renderNumber + amountToIncrement)
      }
    }, time / 40)
    return () => {
      clearInterval(increment)
    }
  }, [renderNumber])
  return (
        <div className={`count ${countClass()}`}>
            {renderNumber}{suffix}
        </div>
  )
}

IncreasingNumberCounter.propTypes = {
  number: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  totalCountTime: PropTypes.number
}

export default IncreasingNumberCounter
