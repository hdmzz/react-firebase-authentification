import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordValidationRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setloading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e) {
        e.preventDefault()
        //verifier que le mot de passe est identique pour la validation sinon on return pour ne pas executer le code 
        if (passwordRef.current.value !== passwordValidationRef.current.value) {
            return setError('Les mots de passe doivent être identiques')
        }
        const promises = [] 
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        })
        .catch(() => {
            setError('Probleme lors de la mise à jour')
        })
        .finally(() => {
            setloading(false)
        })
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center d-flex mt-10">Mettre à jour</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="w-100">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} id="email" required defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control ref={passwordRef} id="password" type='password' placeholder='Laisser vide pour ne pas changer'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valider le mot de passe </Form.Label>
                            <Form.Control ref={passwordValidationRef} id="passwordValidation" placeholder='Laisser vide pour ne pas changer' type='password'/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Mettre à jour</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-4">
                <Link to='/'>Annuler</Link>
            </div>
        </>
    )
}
