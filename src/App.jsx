import { useState } from 'react'
import HeaderConfig from  './components/header.jsx'
import FooterConfig from './components/footer.jsx'
import HomeConfig from './components/Home.jsx'
function App() {
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
