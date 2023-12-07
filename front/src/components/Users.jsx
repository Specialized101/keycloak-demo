/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import axios from 'axios'

import Table from './Table'

export default function Users ({ token }) {
  const isRun = useRef(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Is run permet de ne pas exécuter la requete 2 fois en développement 
    if (isRun.current) return
    isRun.current = true

    axios
      .get('/users', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(response => { setData(response.data) })
      .catch(error => { console.log(error) })

  }, [token])

  return (
    <>
      {data ? 
        <Table data={data} /> : <h2>Something went wrong</h2>}
    </>
  )
}