import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Name: MD HAKIMUR JAMAN</h2>
            <p className='text-xl'>email: jamanmanik550@gmail.com</p> <br />
            <h2 className='text-xl font-bold'>Educational Background</h2>
            <ul class="steps steps-vertical">
                <li class="step step-primary">SSC</li>
                <li class="step step-primary">HSC</li>
                <li class="step">BSC in Computer Science & Technology (4th year)</li>
                <br />
            </ul>
            <h2 className='text-xl font-bold'>Skills as a Web Developer</h2>
            <p>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Bootstrap</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>MongDB</li>
                <li>firebase</li>
            </p>
        </div>
    );
};

export default MyPortfolio;