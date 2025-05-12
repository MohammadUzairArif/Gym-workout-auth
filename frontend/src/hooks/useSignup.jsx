import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { signupUser } from '../api/userApi'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)
try{
        const response = await signupUser({ email, password })
        const data =   response.data
        if (response.status !== 200) {
            setIsLoading(false)
            setError(data.error)
            return
        }
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({ type: 'LOGIN', payload: data })
            setIsLoading(false)
            setError(null)
        }

    }
        catch (error) {
            setIsLoading(false)
            setError(error.response.data.error)
            
        }
    }
    return { signup, isLoading, error }
}