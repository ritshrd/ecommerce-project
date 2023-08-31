import { useState } from 'react'
import { loginUserService } from '../api/productsService'
import { useAdminContext } from '../Hooks/useAdmin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAdminContext()
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      const token = response.data.token
      localStorage.setItem('jwt_token', token)
      console.log(token)
      const admin = login(token)
      navigate(admin ? '/dashboard' : '/')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendData({ email, password })
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>

        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Sign in</button>

      </form>
    </main>
  )
}
export default Login
