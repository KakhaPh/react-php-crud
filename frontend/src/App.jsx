import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

function App() {
  return (
    <>
      <h1>React CRUD App Operations using PHP API and MySql </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>List User</Link>
          </li>
          <li>
            <Link to={"user/create"}>Create User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
