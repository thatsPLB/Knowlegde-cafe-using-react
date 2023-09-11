import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([])

  const handleAddToBookmark = blog =>{
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks)
  }
   return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>

     </div>
    </>
  )
}

export default App
