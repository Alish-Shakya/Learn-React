import { useState } from 'react'
import './App.css'


// import{ createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// function Temp()
// {
//   return(
//     <main>
//     <img src="Images/UI-UX.png" width="40px" />
//     <h1>Fun facts about anime </h1>
//     <ul>
//       <li>Anime is very cool </li>
//       <li>Anime is not cartoon </li>
//       <li>The bet Anime in the world is One Piece.</li>
//     </ul>
//   </main>
//   )
// }
// root.render(
//   <Temp />
// )

// function temporary()
// {
//   return(
//     <main>
//       <h1>
//         Hello word!
//       </h1>
//     </main>
//   )
// }

// root.render(
//   temporary()
// )

import { createRoot } from "react-dom/client"

import Header from './Header'
import Main from './Main-content'
import Footer from './Footer'

const root = createRoot(document.getElementById("root"))

function Page()
{
  return(
    <>
       <Header />
       <Main />
       <Footer />
    </>
  )
}
root.render(
  <Page />
)

