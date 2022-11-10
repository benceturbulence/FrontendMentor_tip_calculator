import React from 'react'

export default function Main() {
  const [billParam, setBillParam] = React.useState({
    amount: 0,
    percentage: 0,
    person: 0
  })

  function handleChange(event) {
    const { name, value } = event.target
    setBillParam(prevParams => ({
      ...prevParams,
      [name]: value
    }))
  }

  function setPercent(perc) {
    const percentAmount = perc / 100
    setBillParam(prevParams => ({
      ...prevParams,
      percentage: percentAmount
    }))
  }

  function reset() {
    setBillParam({
      amount: 0,
      percentage: 0,
      person: 0
    })
  }

  /*
    function setRestParams(name, value) {
      setBillParam(prevParams => ({
        ...prevParams,
        [name]: value
      }))
    }
  */

  return (
    <>
    <header>
      <p classNme="headerText">spli<br />tter</p>
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
        <div className="btn" onClick={() => setPercent(5)}>5%</div>
        <div className="btn" onClick={() => setPercent(10)}>10%</div>
        <div className="btn" onClick={() => setPercent(15)}>15%</div>
        <div className="btn" onClick={() => setPercent(50)}>50%</div>
        <div className="btn" onClick={() => setPercent(20)}>20%    </div>
        <div className='btn'>
          <input
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