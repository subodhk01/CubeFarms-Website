import React from 'react'
import StepWizard from 'react-step-wizard';
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import TagRadio from './Form/TagRadio';

export default function JoinUsForm() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ phone, setPhone ] = React.useState("")
    const [ Cv, setcV ] = React.useState()
    const [ cvText, setCvText ] = React.useState("")

    const handleCv = (event) => {
        if(event.target.files){
            setcV(event.target.files[0])
            setCvText(event.target.files[0].name)
        }else{
            setcV()
            setCvText("")
        }
    }

    return (
        <StepWizard initialStep={4} className="h-100">
            <Step1 />
            <Step2 />
            <Step3 handleCv={handleCv} cvText={cvText} />
            <Step4 />
            <Step5 />
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
            <div className="font-26 text-left py-2 py-md-4">
                Hi, I'm &nbsp;<input className="input-bottom-border" type="text" />
            </div>
            <div className="font-18 py-2 py-md-4">
                You can reach me via...
            </div>
            <div className="font-18 py-2 py-md-4">
                Email &nbsp;<input className="input-bottom-border" type="text" />
            </div>
            <div className="font-18 py-2 py-md-4">
                Phone &nbsp;<input className="input-bottom-border" type="text" />
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
            <div className="text-left py-2 py-md-4">
                <div className="font-23">Current Status</div>
                <div className="py-2 py-md-4 d-flex flex-wrap">
                    <TagRadio name="status" id="fullDayJob" label={`Full Day Job`} />
                    <TagRadio name="status" id="freelancer" label={`Freelancer`} />
                    <TagRadio name="status" id="student" label={`Student`} />
                    <TagRadio name="status" id="notWorking" label={`Not Working Anywhere`} />
                </div>
            </div>
            <div className="py-2 py-md-4">
                <div className="font-2">How would you like to associate with Cubefarms...</div>
                <div className="py-2 py-md-4 d-flex flex-wrap">
                    <TagRadio name="association" id="fullTime" label={`Full Time`} />
                    <TagRadio name="association" id="partTime" label={`Part Time`} />
                    <TagRadio name="association" id="internship" label={`Internship`} />
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
            <div className="text-left py-2 py-md-4">
                <div className="font-23">Apply for work</div>
                <div className="py-2 py-md-4 d-flex flex-wrap">
                    <TagRadio name="work" id="digitalmarketing" label={`Digital Marketing`} />
                    <TagRadio name="work" id="creativewriter" label={`Creative Writer`} />
                    <TagRadio name="work" id="webdevelopment" label={`Web Development`} />
                    <TagRadio name="work" id="graphicdesigner" label={`Graphic Designer`} />
                    <TagRadio name="work" id="businessdevelopment" label={`Business Development`} />
                </div>
            </div>
            <div className="font-14 py-2 py-md-4">
                What are montly Salary Expectations &nbsp;<input className="input-bottom-border" type="text" />
            </div>
            <div className="font-14 py-2 py-md-4">
                URL to linkedin Profile &nbsp;<input className="input-bottom-border" type="text" />
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
            <div className="font-14 py-2 py-md-4">
                Describe youself in less than 100 words.... <br />
                <textarea className="form-control mt-2" type="text" rows="6" />
            </div>
            <div className="font-14 py-2 py-md-4">
                Share details of your most brilliant work here.... <br />
                <textarea className="form-control mt-2" type="text" rows="6" />
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
            <div className="font-14 py-2 py-md-4">
                What do you think are factors critical to be successful while working remotely with clients.... <br />
                <textarea className="form-control mt-2" type="text" rows="6" />
            </div>
            <div className="font-14 py-2 py-md-4">
                Where did you hear about Cubefarms.... <br />
                <textarea className="form-control mt-2" type="text" rows="6" />
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