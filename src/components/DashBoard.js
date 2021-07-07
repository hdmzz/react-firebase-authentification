import React, { useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function DashBoard() {
    const [error, seterror] = useState("")
    const { currentUser } = useAuth()
    function handleLogOut() {

    }

    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center d-flex mt-10">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email :</strong>{currentUser.email}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-4">
                <Button variant='link' onClick={handleLogOut}>Se Déconnecter</Button>
            </div>
        </>
    )
}
