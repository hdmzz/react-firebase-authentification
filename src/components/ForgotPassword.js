import React, {useState, useRef} from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {
    const [error, seterror] = useState('')
    const emailRef = useRef()
    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            seterror('')
            
        } catch {
            
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center d-flex mt-10">Réinitialiser le mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Adresse mail de récupération</Form.Label>
                            <Form.Control required type='email' ref={emailRef}/>
                        </Form.Group>
                        <Button type='submit'>Réinitialiser le mot de passe</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-4">
                    <Link to="/login">Se connecter</Link>
                </div>
            </Card>
        </>
    )
}
