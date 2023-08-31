import React, { useState, useEffect } from 'react'
import { getAllUsersService } from '../api/productsService'

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const token = localStorage.getItem('jwt_token')
        const { data } = await getAllUsersService(token)
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsersData()
  }, [])

  return (
    <>
      <div>Dashboard</div>
      <div>
        {loading
          ? <h1>Cargando...</h1>
          : users.map(({ id, first_name, last_name, gender, email }) =>
            (
              <div key={id}>
                <span>{first_name}</span><br />
                <span>{last_name}</span><br />
                <span>{gender}</span><br />
                <span>{email}</span><br />
              </div>
            )
          )}
      </div>
    </>
  )
}

export default Dashboard
