import React from 'react'
import Button from './Button'

export default function Main() {

  const [percentVal, setPercentVal] = React.useState([{ value: 5, chosen: false },
  { value: 10, chosen: false },
  { value: 15, chosen: false },
  { value: 20, chosen: false },
  { value: 50, chosen: false }])
  const [billParam, setBillParam] = React.useState({
    amount: 0,
    percentage: 0,
    person: 0
  })

  function handleChange(event) {
    const { name, value } = event.target
    setBillParam(prevParams => ({
      ...prevParams,
      [name]: name == "percentage" ? value / 100 : value
    }))
    setPercentVal(prevState => prevState.map(e => ({ ...e, chosen: false })))
  }

  function setPercent(perc) {
    const percentAmount = perc / 100
    setBillParam(prevParams => ({
      ...prevParams,
      percentage: percentAmount
    }))

    setPercentVal(prevState => prevState.map(e => perc == e.value ? ({ ...e, chosen: true }) : ({ ...e, chosen: false })))
    document.getElementById('percInput').value = ""


  }

  function reset() {
    setBillParam({
      amount: 0,
      percentage: 0,
      person: 0
    })
  }


  return (
    <>
      <header>
        <p className="headerText">spli<br />tter</p>
      </header>

      <main>
        <section className="col">
          <h2>Bill</h2>
          <div className='billContainer'>
            <img src={'./icon-dollar.svg'} />
            <input
              className="billInput"
              type="number"
              name="amount"
              value={billParam.amount}
              onChange={handleChange}
            />
          </div>
          <h2>Select tip %</h2>
          <div className="buttonCont">
            {percentVal.map(e => <Button chosen={e.chosen} value={e.value} toggleClick={() => setPercent(e.value)} />)}
            <div className='btn'>
              <input
                id="percInput"
                type="number"
                name="percentage"
                placeholder="custom"
                onChange={handleChange}
              />
            </div>
          </div>
          <h2>Number of People</h2>

          <div className='billContainer'>
            <img src={'./icon-person.svg'} />
            <input
              className="billInput"
              type="number"
              name="person"
              value={billParam.person}
              onChange={handleChange}
            />
          </div>
        </section>


        <div className="col billSummary">
          <div className="billRow">
            <h2>Tip amount < br />
              <span>/person</span>
            </h2>
            <div className="result">
              {(billParam.amount * billParam.percentage) / billParam.person}
            </div>
          </div>
          <div className="billRow">
            <h2>Total< br />
              <span>/person</span>
            </h2>
            <div className="result">
              {billParam.amount * (1 + billParam.percentage) / billParam.person}
            </div>
          </div>
          <button onClick={reset} className="resetBtn">Reset</button>
        </div>
      </main>
    </>


  )
}