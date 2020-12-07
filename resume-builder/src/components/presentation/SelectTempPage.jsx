import React from 'react';
import template1 from "../../static/public/images/template1.png"
import template2 from "../../static/public/images/template2.png"
import template3 from "../../static/public/images/template3.png"
import template4 from "../../static/public/images/template4.png"

function SelectTempPage() {
    return (
        <div>

            <h1 className="middle">Select a resume template to get started</h1>
            <h4 className="fadeIn middle">You'll be able to edit and change this template later!</h4>
            <div className="container templ">
                <img className="tempalteImg middle" src={template1} alt="template image" ></img>
                <img className="tempalteImg middle" src={template2} alt="template image" ></img>
                <img className="tempalteImg middle" src={template3} alt="template image" ></img>
                <img className="tempalteImg middle" src={template4} alt="template image" ></img>
            </div>
        </div>
    )
}

export default SelectTempPage;