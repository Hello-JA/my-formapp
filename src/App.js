import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    lastname: '',
    description: '',
    country: '',
    agree: '',
    desagree: '',
  })

  const onChange = (e) => {
    const { value, name, type, checked } = e.target

    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const showData = () => {
    console.log('Form: ', form)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Registration Form</h3>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input onChange={onChange} name="name" value={form.name}  required/>
          </label>
          <hr />
          <label>
            Last Name:
            <input onChange={onChange} name="lastname" value={form.lastname} required/>
          </label>
          <hr />
          <label>
            Email:
            <input onChange={onChange} name="email" value={form.email} required/>
          </label>
          <hr />
          <label>
            Description:
            <textarea
              onChange={onChange}
              name="description"
              value={form.description}
            />
          </label>
          <hr />
          <label>
            Country:
            <select onChange={onChange} name="country">
              <option value="Other">Other</option>
              <option value="BR">Brasil</option>
              <option value="CB">Cuba</option>
              <option value="VN">Venezuela</option>
            </select>
          </label>
          <h5> Are you agree or desagree with the service?</h5>
          <label>
            agree:
            <input
              type="checkbox"
              onChange={onChange}
              name="agree"
              value={form.agree}
            />
            desagree:
            <input
              type="checkbox"
              onChange={onChange}
              name="desagree"
              value={form.desagree}
             />
          </label>

          <div>
            <button onClick={showData}>Submit</button>
          </div>
        </form>
      </header>
    </div>
  )
}

export default App
