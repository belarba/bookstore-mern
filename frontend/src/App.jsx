import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main class="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
