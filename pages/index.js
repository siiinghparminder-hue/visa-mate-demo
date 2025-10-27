        import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  function handleLogin(e){
    e.preventDefault()
    // simple demo auth: store name in sessionStorage and go to dashboard
    if(!email || !name) return alert('Please enter name and email')
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('visa_mate_user', JSON.stringify({name, email}))
    }
    router.push('/dashboard')
  }

  return (
    <div className="page-center">
      <div className="card">
        <img src="/placeholder-logo.png" alt="Visa Mate" className="logo" />
        <h1>Visa Mate</h1>
        <p className="muted">AI-Powered Visa Application Assistant</p>
        <form onSubmit={handleLogin} className="form">
          <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <button className="btn">Continue to Dashboard</button>
        </form>
        <p className="small">This is a demo. No account creation required.</p>
      </div>
    </div>
  )
}
