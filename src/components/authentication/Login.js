import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('') //on emet l'erreur a 0 pour n apas en avoir en cas d'erreur precedemment
            setloading(true)
            await login(emailRef.current.value, passwordRef.current.value)  
            history.push("/")
        } catch (error) {
            setError('Erreur lors de la connexion')
        }
        setloading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center d-flex mt-10">Connexion</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="w-100">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} id="email" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control ref={passwordRef} id="password" type='password' required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Se connecter</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-2 mb-4">
                    <Link to='/forgot-password'>Mot de passe oublié ?</Link>
                </div>
            </Card>
            <div className="w-100 text-center mt-4">
                Pas encore de compte <Link to='/signup'>S'inscrire</Link>
            </div>
        </>
    )
}
