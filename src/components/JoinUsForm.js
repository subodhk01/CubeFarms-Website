import React from 'react'
import StepWizard from 'react-step-wizard';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import TagRadio from './Form/TagRadio';
import { PRIMARY_DARK } from '../utils/Colors';
import { loadFirebase } from '../utils/firebase';

export default function JoinUsForm() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ phone, setPhone ] = React.useState("")
    const [ status, setStatus ] = React.useState("")
    const [ association, setAssociation ] = React.useState("")
    const [ work, setWork ] = React.useState("")
    const [ salary, setSalary ] = React.useState("")
    const [ linkedin, setLinkedin ] = React.useState("")
    const [ description, setDescription ] = React.useState("")
    const [ brilliantWork, setBrilliantWork ] = React.useState("")
    const [ factors, setFactors ] = React.useState("")
    const [ hear, setHear ] = React.useState("")
    const [ questions, setQuestions ] = React.useState("")
    const [ cv, setcV ] = React.useState()
    const [ cvText, setCvText ] = React.useState("")
    const [ msg, setMsg ] = React.useState({})
    const [ disabled, setDisabled ] = React.useState(false)

    // React.useEffect(() => {
    //     console.log(status)
    // } ,[status])

    const handleCv = (event) => {
        if(event.target.files){
            setcV(event.target.files[0])
            setCvText(event.target.files[0].name)
        }else{
            setcV()
            setCvText("")
        }
    }

    const handleSubmit = async () => {
        setDisabled(true)
        setMsg({
            success: "Please wait..."
        })
        let imageURL = ""
        let firebase = await loadFirebase()
        if(cv){
            setMsg({
                success: "Uploading CV..."
            })
            let imagerRef = await firebase.storage().ref(`CVs/${cv.name}`).put(cv)
            imageURL = await imagerRef.ref.getDownloadURL().then(url => url)
        }
        firebase.firestore().collection("JoinUsForm").add({
            name: name,
            email: email,
            phone: phone,
            currentStatue: status,
            association: association,
            work: work,
            salary: salary,
            linkedin: linkedin,
            description: description,
            brilliantWork: brilliantWork,
            factors: factors,
            hear: hear,
            questions: questions,
            cv: imageURL
        }).then(doc => {
            setMsg({
                success: "Request submitted. Thanks a lot for your valuable time, our team will reach you shortly"
            })
            setName("")
            setEmail("")
            setPhone("")
            setStatus("")
            setAssociation("")
            setWork("")
            setSalary("")
            setLinkedin("")
            setDescription("")
            setBrilliantWork("")
            setFactors("")
            setHear("")
            setQuestions("")
            setCvText("")
            setcV()
        }).catch(error =>{
            setDisabled(false)
            setMsg({
                error: "Unable to process your request, please try again"
            })
        })
    }

    return (
        <StepWizard initialStep={1} className="h-100">
            <Step1 name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            <Step2 status={status} setStatus={setStatus} association={association} setAssociation={setAssociation} />
            <Step3 handleCv={handleCv} cvText={cvText} work={work} setWork={setWork} salary={salary} setSalary={setSalary} linkedin={linkedin} setLinkedin={setLinkedin} />
            <Step4 description={description} setDescription={setDescription} brilliantWork={brilliantWork} setBrilliantWork={setBrilliantWork} />
            <Step5 factors={factors} setFactors={setFactors} hear={hear} setHear={setHear} />
            <Step6 questions={questions} setQuestions={setQuestions} handleSubmit={handleSubmit} msg={msg} disabled={disabled} />
        </StepWizard>
    )
}

//PROPS:
// variables:  currentStep, totalSteps, isActive onClick={props.} 
// functions: previousStep, nextStep, goToStep(2), firstStep, lastStep
//
function Step1(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10 py-md-0">
                <div className="font-26 text-left py-2 py-md-4">
                    Hi, I'm &nbsp;<input className="input-bottom-border" type="text" value={props.name} onChange={(event) => props.setName(event.target.value)} />
                </div>
                <div className="font-18 py-2 py-md-4">
                    You can reach me via...
                </div>
                <div className="font-18 py-2 py-md-4">
                    Email &nbsp;<input className="input-bottom-border" type="text" value={props.email} onChange={(event) => props.setEmail(event.target.value)} />
                </div>
                <div className="font-18 py-2 py-md-4">
                    Phone &nbsp;<input className="input-bottom-border" type="text" value={props.phone} onChange={(event) => props.setPhone(event.target.value)} />
                </div>
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div>

                </div>
                <div onClick={props.nextStep} className="cursor-pointer">
                    Next <BsArrowRightShort color="white" />
                </div>
            </div>
        </div>
    )
}

function Step2(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10">
                <div className="text-left py-2 py-md-4">
                    <div className="font-23">Current Status</div>
                    <div className="py-2 py-md-4 d-flex flex-wrap">
                        <TagRadio name="status" id="fullDayJob" label={`Full Day Job`} checked={props.status === "fullDayJob"} handleChange={props.setStatus} />
                        <TagRadio name="status" id="freelancer" label={`Freelancer`} checked={props.status === "freelancer"} handleChange={props.setStatus} />
                        <TagRadio name="status" id="student" label={`Student`} checked={props.status === "student"} handleChange={props.setStatus} />
                        <TagRadio name="status" id="notWorking" label={`Not Working Anywhere`} checked={props.status === "notWorking"} handleChange={props.setStatus} />
                    </div>
                </div>
                <div className="py-2 py-md-4">
                    <div className="font-2">How would you like to associate with Cubefarms...</div>
                    <div className="py-2 py-md-4 d-flex flex-wrap">
                        <TagRadio name="association" id="fullTime" label={`Full Time`} checked={props.association === "fullTime"} handleChange={props.setAssociation} />
                        <TagRadio name="association" id="partTime" label={`Part Time`} checked={props.association === "partTime"} handleChange={props.setAssociation} />
                        <TagRadio name="association" id="internship" label={`Internship`} checked={props.association === "internship"} handleChange={props.setAssociation} />
                    </div>
                </div>
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div onClick={props.previousStep} className="cursor-pointer">
                    <BsArrowLeftShort color="white" /> Back 
                </div>
                <div onClick={props.nextStep} className="cursor-pointer">
                    Next <BsArrowRightShort color="white" />
                </div>
            </div>
        </div>
    )
}

function Step3(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10">
                <div className="text-left py-2 py-md-4">
                    <div className="font-23">Apply for work</div>
                    <div className="py-2 py-md-4 d-flex flex-wrap">
                        <TagRadio name="work" id="digitalmarketing" label={`Digital Marketing`} checked={props.work === "digitalmarketing"} handleChange={props.setWork} />
                        <TagRadio name="work" id="creativewriter" label={`Creative Writer`} checked={props.work === "creativewriter"} handleChange={props.setWork} />
                        <TagRadio name="work" id="webdevelopment" label={`Web Development`} checked={props.work === "webdevelopment"} handleChange={props.setWork} />
                        <TagRadio name="work" id="graphicdesigner" label={`Graphic Designer`} checked={props.work === "graphicdesigner"} handleChange={props.setWork} />
                        <TagRadio name="work" id="businessdevelopment" label={`Business Development`} checked={props.work === "businessdevelopment"} handleChange={props.setWork} />
                    </div>
                </div>
                <div className="font-14 py-2 py-md-4">
                    What are montly Salary Expectations &nbsp;<input className="input-bottom-border" type="text" value={props.salary} onChange={(event) => props.setSalary(event.target.value)} />
                </div>
                <div className="font-14 py-2 py-md-4">
                    URL to linkedin Profile &nbsp;<input className="input-bottom-border" type="text" value={props.linkedin} onChange={(event) => props.setLinkedin(event.target.value)} />
                </div>
                <div className="font-14 py-2 py-md-4">
                    This is my CV &nbsp;<input id="cv" className="input-file" type="file" onChange={props.handleCv} />
                    <label htmlFor="cv" className="input-file-label font-11">Attach File</label>
                    { props.cvText && 
                        <>
                            <span className="input-bottom-border">
                                {props.cvText} 
                            </span> 
                            <span onClick={props.handleCv} className="cursor-pointer">
                                <AiFillCloseCircle color="white" />
                            </span>
                        </>
                    }
                </div>
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div onClick={props.previousStep} className="cursor-pointer">
                    <BsArrowLeftShort color="white" /> Back 
                </div>
                <div onClick={props.nextStep} className="cursor-pointer">
                    Next <BsArrowRightShort color="white" />
                </div>
            </div>
        </div>
    )
}

function Step4(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10">
                <div className="font-14 py-2 py-md-4">
                    Describe youself in less than 100 words.... <br />
                    <textarea className="form-control mt-2" type="text" rows="6" value={props.description} onChange={(event) => props.setDescription(event.target.value)} />
                </div>
                <div className="font-14 py-2 py-md-4">
                    Share details of your most brilliant work here.... <br />
                    <textarea className="form-control mt-2" type="text" rows="6" value={props.brilliantWork} onChange={(event) => props.setBrilliantWork(event.target.value)} />
                </div>
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div onClick={props.previousStep} className="cursor-pointer">
                    <BsArrowLeftShort color="white" /> Back 
                </div>
                <div onClick={props.nextStep} className="cursor-pointer">
                    Next <BsArrowRightShort color="white" />
                </div>
            </div>
        </div>
    )
}

function Step5(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10">
                <div className="font-14 py-2 py-md-4">
                    What do you think are factors critical to be successful while working remotely with clients.... <br />
                    <textarea className="form-control mt-2" type="text" rows="6" value={props.factors} onChange={(event) => props.setFactors(event.target.value)} />
                </div>
                <div className="font-14 py-2 py-md-4">
                    Where did you hear about Cubefarms.... <br />
                    <textarea className="form-control mt-2" type="text" rows="6" value={props.hear} onChange={(event) => props.setHear(event.target.value)} />
                </div>
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div onClick={props.previousStep} className="cursor-pointer">
                    <BsArrowLeftShort color="white" /> Back 
                </div>
                <div onClick={props.nextStep} className="cursor-pointer">
                    Next <BsArrowRightShort color="white" />
                </div>
            </div>
        </div>
    )
}

function Step6(props){
    return(
        <div className="text-white h-100 d-flex flex-column justify-content-center">
            <div className="pt-5 pb-10">
                <div className="font-14 py-2 py-md-4">
                    Almost there kk! Now do you have any questions for us? <br />
                    <textarea className="form-control mt-2" type="text" rows="8" value={props.questions} onChange={(event) => props.setQuestions(event.target.value)} />
                </div>
            </div>
            <div>
                {props.msg && props.msg.success && <span className="text-white">{props.msg.success}</span>}
                {props.msg && props.msg.error && <span className="text-danger">{props.msg.error}</span>}
            </div>
            <div className="position-absolute w-100 font-18 d-flex align-items-center justify-content-between" style={{bottom: 0}}>
                <div onClick={props.previousStep} className="cursor-pointer">
                    <BsArrowLeftShort color="white" /> Back 
                </div>
                <button className="cursor-pointer font-11 btn btn-white-border" onClick={props.handleSubmit} disabled={props.disabled}>
                    SUBMIT
                </button>
            </div>
            <style jsx>{`
                .btn-white-border{
                    padding: 0.4rem 1.4rem;
                    border: 2px solid white;
                    background: transparent;
                    color: white;
                    font-weight: bold;
                    border-radius: 50px;
                    transition: 0.3s;
                }
                .btn-white-border:hover{
                    background: white;
                    color: ${PRIMARY_DARK};
                }
            `}</style>
        </div>
    )
}