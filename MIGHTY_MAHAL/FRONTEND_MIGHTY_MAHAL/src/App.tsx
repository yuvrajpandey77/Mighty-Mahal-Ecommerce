import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './SignupLogin/Signup'
import  Login  from './SignupLogin/Login'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Shop from './Pages/Shop'
import ParentADDPRODUCT from './Ui/ParentADDPRODUCT'
import Product from './Ui/PRODUCT'
import { UserInfor } from './SignupLogin/UserInfor'


function App() {


  return (
    <Router>
     
      <Routes> 
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route
          path='/userinfo'
          element={
            // <ProtectedRoute>
              <UserInfor />
            // </ProtectedRoute>
          }
        />
        <Route
          path='/addproduct'
          element={
            <ProtectedRoute>
              <ParentADDPRODUCT />
            </ProtectedRoute>
          }
        />
        <Route
          path='/shop'
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path='/'
          element={
            localStorage.getItem('token') ? (
              <Navigate to='/dashboard' replace />
            ) : (
              <Navigate to='/signup' replace />
            )
          }
        />
        <Route
          path='/id/:id'
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path='*'
          element={
            localStorage.getItem('token') ? (
              <Navigate to='/dashboard' replace />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />
      </Routes>
      
    </Router>
  )
}
export default App
