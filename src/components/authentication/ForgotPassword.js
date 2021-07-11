import React, {useState, useRef} from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


export default function ForgotPassword() {
    const [error, seterror] = useState('')
    const [message, setmessage] = useState('')
    const [loading, setloading] = useState(false)
    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            seterror('')
            setmessage('')
            setloading(true)
            await forgotPassword(emailRef.current.value)
            setmessage('Vérifiez votre boite mail')
        } catch {
            setloading(false)
            seterror('Problème lors de la réinitialisation du mot de passe')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center d-flex mt-10">Réinitialiser le mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success" >{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Adresse mail de récupération</Form.Label>
                            <Form.Control required type='email' ref={emailRef}/>
                        </Form.Group>
                        <Button disabled={loading} type='submit'>Réinitialiser le mot de passe</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-4">
                    <Link variant to="/login">Se connecter</Link>
                </div>
            </Card>
        </>
    )
}
