import React from 'react'
import styled from 'styled-components'
import Layout from '../components/UI/Layout'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'
import TagRadio from '../components/Form/TagRadio'
import { loadFirebase } from '../utils/firebase'
import { PRIMARY_DARK } from '../utils/Colors'

const Container = styled.div`
    font-family: "madetommy-light";
`

export default function PriceEstimate() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ phone, setPhone ] = React.useState("")
    const [ company, setCompany ] = React.useState("")
    const [ need, setNeed ] = React.useState("")
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
        firebase.firestore().collection("PriceEstimateForm").add({
            name: name,
            email: email,
            phone: phone,
            company: company,
            message: message
        }).then(doc => {
            setMsg({
                success: "Request submitted. Thanks a lot for your valuable time, our team will reach you shortly"
            })
            setName("")
            setEmail("")
            setPhone("")
            setCompany("")
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
                                    See how we turn ideas into real life
                                </h1>
                                <p className="mb-4">
                                    Let's talk about your needs – fill in the form and we will contact you within 24 hours. We can't wait to start working with you!
                                </p>
                                <p>
                                    Or drop us a line at - contact@cubefarms.com
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <h2 className="mb-5">Fill out the form</h2>
                            <div>
                                <form onSubmit={(event) => handleSubmit(event)}>
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" className="form-control form-input" value={name} onChange={(event) => setName(event.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" className="form-control form-input" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Phone Number" className="form-control form-input" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name" className="form-control form-input" value={company} onChange={(event) => setCompany(event.target.value)} />
                                    </div>
                                    <div className="form-group py-3">
                                        <h5 className="heading-bold">What do you need?</h5>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <TagRadio name="status" id="productDesign" label={`Product Design`} light checked={need === "productDesign"} handleChange={setNeed} />
                                            <TagRadio name="status" id="marketing" label={`Marketing`} light checked={need === "marketing"} handleChange={setNeed} />
                                            <TagRadio name="status" id="webDevelopment" label={`Web Development`} light checked={need === "webDevelopment"} handleChange={setNeed} />
                                            <TagRadio name="status" id="mobileDevelopment" label={`Mobile Development`} light checked={need === "mobileDevelopment"} handleChange={setNeed} />
                                            <TagRadio name="status" id="advertising" label={`Advertising`} light checked={need === "advertising"} handleChange={setNeed} />
                                        </div>
                                    </div>
                                    <div className="form-group pt-3 pb-1">
                                        <h5 className="heading-bold">What do you think?</h5>
                                        <div className="form-group">
                                            <textarea type="text" placeholder="Your thoughts" className="form-control form-input" value={message} onChange={(event) => setMessage(event.target.value)} rows={4} />
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        {msg && msg.success && <span style={{color: PRIMARY_DARK}}>{msg.success}</span>}
                                        {msg && msg.error && <span className="text-danger">{msg.error}</span>}
                                    </div>
                                    <div className="form-group text-center font-14">
                                        <SingleArrowButton send disabled={disabled}>
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