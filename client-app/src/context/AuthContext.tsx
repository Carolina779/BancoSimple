"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { userLogin } from "@/utils/mockData" // Asegúrate de que la ruta sea correcta

// Definimos el tipo para nuestro usuario
export interface User {
  id: number
  email: string
  roles: string[]
  password?: string
}

// Definimos la interfaz para nuestro contexto de autenticación
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  hasRole: (role: string) => boolean
  hasAnyRole: (roles: string[]) => boolean
}

// Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personalizado para usar el contexto
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}

// Proveedor del contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  // Verificar si hay un usuario en localStorage al cargar
  useEffect(() => {
    const storedUser = localStorage.getItem("bankingUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  // Función de login simulada
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulamos una verificación de credenciales
    try {
      // Simulamos un delay para imitar una llamada a API
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Buscamos el usuario por email y password
      const foundUser = userLogin.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

      if (foundUser) {
        // Creamos un objeto de usuario sin la contraseña para almacenarlo
        const userToStore = {
          id: Number(foundUser.id), // Convertimos el id a número
          email: foundUser.email,
          roles: foundUser.roles,
          password: foundUser.password, // Solo para la simulación, no se debería almacenar la contraseña en un entorno real
        }

        setUser(userToStore)
        setIsAuthenticated(true)
        localStorage.setItem("bankingUser", JSON.stringify(userToStore))
        return true
      }

      return false
    } catch (error) {
      console.error("Error durante el login:", error)
      return false
    }
  }

  // Función de logout
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("bankingUser")
  }

  // Helpers para verificar roles
  const hasRole = (role: string) => !!user?.roles?.includes(role);
  const hasAnyRole = (rolesToCheck: string[]) => user?.roles?.some(r => rolesToCheck.includes(r)) ?? false;

  // Valores que proporcionará el contexto
  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    hasRole,
    hasAnyRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
