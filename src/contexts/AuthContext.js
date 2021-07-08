import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState()
    const [loading, setloading] = useState(true)

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password) //créer un user et appelle donc la fonction onAuthStateChnge
    }

    function logout() {
        return auth.signOut()
    }

    function forgotPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePasssword(password) {
        return currentUser.updatePasssword(password)
    }
    useEffect(() => {//on utilise le useeffect pour quan la fonction soit utilisé qunad le composant est mounté
        const unsubscribe = auth.onAuthStateChanged(user => {//au changement a chaque authentification la fonction est aplée et le user est definie 
            setCurrentUser(user)
            setloading(false)
        })
        return unsubscribe //on s'unsubscribe du listener onAuthStateChanged au dessus 
    }, [])// equivalent à comonentDidMount avec les classes

    const value = {
        currentUser,
        login,
        logout,
        forgotPassword,
        updateEmail,
        updatePasssword,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
