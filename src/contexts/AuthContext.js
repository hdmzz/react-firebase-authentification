import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password) //créer un user et appelle donc la fonction onAuthStateChnge
    }

    useEffect(() => {//on utilise le useeffect pour quan la fonction soit utilisé qunad le composant est mounté
        const unsubscribe = auth.onAuthStateChanged(user => {//au changement a chaque authentification la fonction est aplée et le user est definie 
            setCurrentUser(user)
        })
        return unsubscribe //on s'unsubscribe du listener onAuthStateChanged au dessus 
    }, [])// equivalent à comonentDidMount avec les classes

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
