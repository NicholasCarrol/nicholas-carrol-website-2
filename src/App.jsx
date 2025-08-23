import { useState } from 'react'
import HeaderConfig from  './components/header.jsx'
import FooterConfig from './components/footer.jsx'
import HomeConfig from './components/HomeContent.jsx'
import AboutConfig from './components/About.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [body, setBody] = useState(<HomeConfig />) 


  return (
    <>
    <HeaderConfig setBody={setBody} />
    {body}
    <FooterConfig />
    </>
  )
}

export default App
