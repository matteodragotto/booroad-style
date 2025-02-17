import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="text-center">Gruppo 6</p>
      </footer>
    </>
  )
}

export default DefaultLayout