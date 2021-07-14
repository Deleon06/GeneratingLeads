import axios from 'axios'
import { useState } from 'react'

const APIKEY = process.env.REACT_APP_APIKEY
const APIBASE = process.env.REACT_APP_APIBASE

const URL = `https://api.airtable.com/v0/${APIBASE}/Lead%20Info`

export default function LeadForm() {
  const [name, setName] = useState('')
  const [debtAmount, setDebtAmount] = useState(0)
  const [state, setState] = useState('')
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [service, setService] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      name,
      debtAmount,
      state,
      emailAddress,
      phoneNumber,
      service,
    }

    const res = await axios.post(URL, { fields }, {
      headers: {Authorization: `Bearer ${APIKEY}`}
    })
    console.log(res)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label>Debt Amount</label>
      <br />
      <input
        type="number"
        value={debtAmount}
        onChange={(e) => setDebtAmount(e.target.valueAsNumber)}
        required
      />
      <br />
      <label>State</label>
      <br />
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />
      <br />
      <label>Email Address</label>
      <br />
      <input
        type="email"
        placeholder="email@email.com"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        required
      />
      <br />
      <label>Phone Number</label>
      <br />
      <input
        type="tel"
        placeholder="000-000-000"
        value={phoneNumber}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <br />
      <label>Service</label>
      <br />
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option></option>
        <option value="Debt Negotiation">Debt Negotiation</option>
        <option value="Credit Counseling">Credit Counseling</option>
        <option value="Personal Loan">Personal Loan</option>
        <option value="Bankruptcy">Bankrupcy</option>
        <option value="Doing It Yourself">Doing It Yourself</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  )
}


