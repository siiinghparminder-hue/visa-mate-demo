        import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Chat = dynamic(()=>import('../components/Chat'), { ssr:false })

export default function Dashboard(){
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const u = sessionStorage.getItem('visa_mate_user')
      if(!u) router.push('/')
      else setUser(JSON.parse(u))
    }
  },[])

  function handleLogout(){
    if(typeof window !== 'undefined'){
      sessionStorage.removeItem('visa_mate_user')
      router.push('/')
    }
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <img src="/placeholder-logo.png" alt="logo" className="logo-sm" />
          <span className="brand">Visa Mate</span>
        </div>
        <div>
          <button className="btn ghost" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main>
        <section className="grid">
          <div className="card">
            <h3>Apply for Visa</h3>
            <p>Start a new application — demo form below.</p>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Application submitted (demo)')}} className="form-compact">
              <input placeholder="Destination Country" />
              <input placeholder="Purpose of Visit" />
              <button className="btn small">Submit Application</button>
            </form>
          </div>

          <div className="card">
            <h3>Upload Documents</h3>
            <p>Upload passport, photos, and supporting docs (demo only).</p>
            <input type="file" multiple />
          </div>

          <div className="card wide">
            <h3>Visa Mate AI Assistant</h3>
            <Chat assistantName="Visa Mate AI Assistant" />
          </div>
        </section>

        <section className="tracker">
          <h3>Application Progress</h3>
          <div className="progress-grid">
            <div className="progress-card">
              <strong>Application Submitted</strong>
              <div className="muted">Completed</div>
            </div>
            <div className="progress-card">
              <strong>Under Review</strong>
              <div className="muted">In Progress</div>
            </div>
            <div className="progress-card">
              <strong>Decision</strong>
              <div className="muted">Pending</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2025 Visa Mate</footer>
    </div>
  )
}
