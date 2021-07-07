/* import { Alert } from 'bootstrap'
 */import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordValidationRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        //verifier que le mot de passe est identique pour la validation sinon on return pour ne pas executer le code 
        if (passwordRef.current.value !== passwordValidationRef.current.value) {
            return setError('Les mots de passe doivent être identiques')
        }
        try {
            setError('') //on emet l'erreur a 0 pour n apas en avoir en cas d'erreur precedemment
            setloading(true)
            await signup(emailRef.current.value, passwordRef.current.value)  
        } catch (error) {
            setError('Erreur lors de la création du compte')
        }
        setloading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center d-flex mt-10">S'inscrire</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {currentUser.email}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="w-100">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} id="email" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control ref={passwordRef} id="password" type='password' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valider le mot de passe </Form.Label>
                            <Form.Control ref={passwordValidationRef} id="passwordValidation" type='password' required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">S'inscrire</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}