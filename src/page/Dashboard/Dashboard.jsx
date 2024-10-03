import React, { useEffect } from 'react'

export default function Dashboard() {
  useEffect(()=>{
    if (!localStorage.getItem('utilisateur')) {
      Navigate("/connexion")
    }
  })
  return (
    <div>
      <h1>Dashboard</h1> 
    </div>
  )
}
