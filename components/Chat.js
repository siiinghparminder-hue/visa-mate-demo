        import { useState } from 'react'

export default function Chat({assistantName='Visa Mate AI Assistant'}){
  const [messages, setMessages] = useState([
    {from:'ai', text:`Hello! I'm ${assistantName}. I can help you prepare your visa application. Ask me anything.`}
  ])
  const [text, setText] = useState('')

  function send(){
    if(!text.trim()) return
    const userMsg = {from:'user', text: text}
    setMessages(m=>[...m, userMsg])
    setText('')
    // demo AI reply (no external API)
    setTimeout(()=>{
      setMessages(m=>[...m, {from:'ai', text:'Thanks — for demo purposes, please upload your documents and submit the application. For real AI integration we can connect ChatGPT API.'}])
    },700)
  }

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((m,i)=> (
          <div key={i} className={m.from==='user'? 'bubble user':'bubble ai'}>{m.text}</div>
        ))}
      </div>
      <div className="chat-input">
        <input placeholder="Ask Visa Mate..." value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} />
        <button className="btn small" onClick={send}>Send</button>
      </div>
    </div>
  )
}
