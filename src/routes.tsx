import { Route, Routes } from "react-router-dom"
import History from "./pages/History"
import Home from "./pages/Home"
import Login from "./pages/Login"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
