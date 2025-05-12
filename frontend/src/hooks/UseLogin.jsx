import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { loginUser } from '../api/userApi'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try{
            const response = await loginUser({email, password} )
            const data = response.data;
            if (response.status !== 200) {
                setIsLoading(false)
                setError(data.error)
            }
                else {
                    // Save the user to local storage
                    localStorage.setItem('user', JSON.stringify(data))
                
                    dispatch({ type: 'LOGIN', payload: data })
                    // Update the auth context
                    
                    setIsLoading(false)
                    setError(null)
                   
                    
                }
            }

        catch (error) {
            setIsLoading(false)
            setError(error.response.data.error)
        }
        





    }
    return { login, isLoading, error }
}