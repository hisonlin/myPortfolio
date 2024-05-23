import React from 'react'
import PropTypes from 'prop-types'
import './Timeline.scss'

const Timeline = props => {
    return (
        <div>
            <section id='timeline'>
                <h1>Hison Timeline</h1>
                <div class="demo-card-wrapper">
                    <div class="demo-card demo-card--step1">
                        <div class="head">
                            <div class="number-box">
                                <span>May2024 - Nov2024</span>
                            </div>
                            <h2>ITLabPro Bootcamp</h2>
                        </div>
                        <div class="body">
                            <p style={{ fontWeight: 'bold' }}>Diploma Computer System Technology</p>
                            <ul>
                                <li>GPA 4.09</li>
                                <li>Engaged in multiple projects, focusing primarily on <span >web applications</span>, with additional experience in <span>Android applications</span> and <span>UX/UI design</span>.</li>
                                <li>Specialized in integrating UI designs with <span>React.js</span> for web development, applying front-end principles extensively.</li>
                                <li>Hands-on experience with <span>databases</span> such as <span>Firebase</span> and <span>MySQL</span></li>
                                <li>Deeply engaged in <span>Artificial Intelligence (AI)</span> and <span>Machine Learning (ML)</span> using <span>Python</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="demo-card demo-card--step2">
                        <div class="head">
                        <div class="number-box">
                                <span>Sep2022 - Apr2024</span>
                            </div>
                            <h2>Vancouver Community College</h2>
                        </div>
                        <div class="body">
                            <p style={{ fontWeight: 'bold' }}>Diploma Computer System Technology</p>
                            <ul>
                                <li>GPA 4.09</li>
                                <li>Engaged in multiple projects, focusing primarily on <span >web applications</span>, with additional experience in <span>Android applications</span> and <span>UX/UI design</span>.</li>
                                <li>Specialized in integrating UI designs with <span>React.js</span> for web development, applying front-end principles extensively.</li>
                                <li>Hands-on experience with <span>databases</span> such as <span>Firebase</span> and <span>MySQL</span></li>
                                <li>Deeply engaged in <span>Artificial Intelligence (AI)</span> and <span>Machine Learning (ML)</span> using <span>Python</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="demo-card demo-card--step3">
                        <div class="head">
                        <div class="number-box">
                                <span>2012 - 2022</span>
                            </div>
                            <h2>AIA International Limited (Hong Kong)</h2>
                        </div>
                        <div class="body">
                            <p style={{ fontWeight: 'bold' }}>Financial Planning Manager</p>
                            <ul>
                                <li>Led a team of 10 financial planners, guiding them towards achieving their career aspirations</li>
                                <li>Established and developed strong relationships with clients to build trust underpinning profitable financial planning work</li>
                            </ul>
                        </div>
                    </div>

                    <div class="demo-card demo-card--step4">
                        <div class="head">
                        <div class="number-box">
                                <span>Sep2010 - Jan2012</span>
                            </div>
                            <h2>The Hong Kong Polytechnic University</h2>
                        </div>
                        <div class="body">
                            <p style={{ fontWeight: 'bold' }}>Bachelor of Arts - Business (Finance)</p>
                            <ul>
                                <li>GPA 3.37</li>
                                <li>Dean’s List Honoree, Semester One in 2010/11</li>
                                <li>Proficient in analyzing financial statements, creating budgets, and developing financial plans to support business objectives</li>
                                <li>Proficient in using statistical software and financial modeling tools for data analysis and interpretation.</li>
                                <li>Knowledgeable about the functioning of financial markets and the roles of financial institutions.</li>
                                <li>Understanding of international financial systems and the impact of global economic events on business operations.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

Timeline.propTypes = {

}

export default Timeline
