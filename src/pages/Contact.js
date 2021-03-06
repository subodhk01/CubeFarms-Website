import React from 'react'
import styled from 'styled-components'
import Layout from '../components/UI/Layout'
import { loadFirebase } from '../utils/firebase'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'
import { PRIMARY_DARK } from '../utils/Colors'

const Container = styled.div`
    font-family: "madetommy-light";
`

export default function Contact() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ message, setMessage ] = React.useState("")
    const [ msg, setMsg ] = React.useState({})
    const [ disabled, setDisabled ] = React.useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true)
        setMsg({
            success: "Please wait..."
        })
        let firebase = await loadFirebase()
        firebase.firestore().collection("ContactForm").add({
            name: name,
            email: email,
            message: message
        }).then(doc => {
            setMsg({
                success: "Request submitted. Thanks a lot for your valuable time, our team will reach you shortly"
            })
            setName("")
            setEmail("")
            setMessage("")
        }).catch(error =>{
            setDisabled(false)
            setMsg({
                error: "Unable to process your request, please try again"
            })
        })
    }
    return(
        <Layout header={{full: true, black: true}}>
            <Container>
                <div className="py-10 px-2 px-lg-5">
                    <div className="row no-gutters justify-content-between py-1 py-lg-5 px-2 px-lg-5 mt-1 mt-md-5">
                        <div className="col-12 col-lg-5">
                            <div className="font-12">
                                <h1 className="heading-bold mb-5">
                                    Contact Us
                                </h1>
                                <p className="mb-4">
                                    Let'a talk about your idea - fill the form on the right and we will get back to you shortly. We can't wait working with you!
                                </p>
                                <p>
                                    Or drop us a line at - contact@cubefarms.com
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <h4 className="mb-4">Fill out the form</h4>
                            <div>
                                <form onSubmit={(event) => handleSubmit(event)}>
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" className="form-control form-input" value={name} onChange={(event) => setName(event.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Email Address" className="form-control form-input" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" placeholder="Message" className="form-control form-input" value={message} onChange={(event) => setMessage(event.target.value)} rows={4} required />
                                    </div>
                                    <div>
                                        {msg && msg.success && <span style={{color: PRIMARY_DARK}}>{msg.success}</span>}
                                        {msg && msg.error && <span className="text-danger">{msg.error}</span>}
                                    </div>
                                    <div className="form-group text-center font-14">
                                        <SingleArrowButton disabled={disabled}>
                                            Send Message
                                        </SingleArrowButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black py-5">
                    <div className="mini-hero-container container-lg">
                        <div class="w-100">
                            <h1 className="heading-bold mb-5">
                                We are here for you!<br />
                                Say Hi!
                            </h1>
                            <div>
                                <div className="row no-gutters justify-content-center text-center">
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Our Services
                                        </h3>
                                        <p>
                                            Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                        </p>
                                        <div>
                                            <SingleArrowButton>
                                                Join Now
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Join Cubefarms
                                        </h3>
                                        <p>
                                            We have some open positions for you!
                                        </p>
                                        <div>
                                            <SingleArrowButton>
                                                Join Now
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Anything else
                                        </h3>
                                        <p>
                                            contact@cubefarms.com<br />
                                            +91-324324234234
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}