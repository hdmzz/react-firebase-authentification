import React, { useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function DashBoard() {
    const [error, seterror] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    
    async function handleLogOut() {
        seterror('')
        try {
            await logout()
            history.pushState('/login')
        } catch {
            seterror('Deconnexion impossible')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center d-flex mt-10">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email :</strong>{currentUser.email}
                </Card.Body>
                <Link to="/update-profile" className="btn btn-primary mt-4 ">Mettre à jour les infos du compte</Link>
            </Card>
            <div className="w-100 text-center mt-4">
                <Button variant='link' onClick={handleLogOut}>Se Déconnecter</Button>
            </div>
        </>
    )
}
