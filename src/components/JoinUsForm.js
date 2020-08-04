import React from 'react'
import StepWizard from 'react-step-wizard';
import { propTypes } from 'react-bootstrap/esm/Image';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import TagRadio from './Form/TagRadio';

export default function JoinUsForm() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ phone, setPhone ] = React.useState("")
    return (
        <StepWizard initialStep={2} className="h-100">
            <Step1 />
            <Step2 />
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