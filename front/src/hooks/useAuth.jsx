import { useState, useEffect, useRef } from "react";
import Keycloak from 'keycloak-js'

const client = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});


export default function useAuth() {
  const isRun = useRef(false)
  const [token, setToken] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (isRun.current) return
    isRun.current = true

    client
      .init({ onLoad: 'login-required' })
      .then(response => {
        setIsLogin(response)
        setToken(client.token)
      })
  }, [])

  return [isLogin, token]
}