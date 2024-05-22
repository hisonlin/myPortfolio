import React from 'react'
import PropTypes from 'prop-types'
import './ProjectsCard.css'

const ProjectsCard = props => {
    return (
        <div class="ag-format-container">
            <div class="ag-courses_box">

            <div class="ag-courses_item">
                    <a href="https://github.com/masamoe/Optimate" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            Android App - Optimate
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Business Management App to optimize workflow processes and achieve greater operational efficiency</li>
                                <li>Comprehensive development from Wireframes, Mockups, Front End and Backend Developemt and Deployement etc</li>
                                <li>Including features like: clock in/out system, dynamic landing page, expenses and revenues uploading and history,  scheduling, employee account creation and access assignment, downloadable payrolls, requests submission etc</li>
                                <li><span>Firebase</span> usage: authhentication, real-time database, storage and messaging </li>
                                <li><span>NodeJS</span> server to handle Stripe payments and <span>Firebase</span> messaging, communicate between the app and external services</li>
                                <li><span>Kotlin</span> as the primary programming language, <span>Jetpack Compose</span> and <span>XML</span> integrated with <span>Material Design 3</span> for styling</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                Jan 2024 - Mar 2024
                            </span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a href="https://github.com/hisonlin/ML-AI/tree/main/CSTP2301_FinalProject" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                        Python Jupyter - Machine Learning Project
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>A time series data set involving predictive modeling in the maritime shipping industry using a comprehensive dataset from 1991 to the present day</li>
                                <li>Forecasting future values after the last recorded month</li>
                                <li>Data preprocessing skills: train-test-split, normalization, features elimination, lag features</li>
                                <li>Regression models: Decision Tree, Linear, Support Vector, Multi-Layer Perceptron, Gradient Boosting, Random Forest, Ridge, Lasso.</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                Mar 2024 - Apr 2024
                            </span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a href="https://hisonlin-car-rental.vercel.app/" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            React - Car Rental Web App
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Built with <span>Vite</span> and <span>React</span></li>
                                <li>Uses <span>Material-UI (MUI)</span> to ensure the design looks great and responsive to any devices.</li>
                                <li>All data managed through <span>Firebase</span>. This includes user information, wishlists, and orders.</li>
                                <li>Integrated Google login, making it quick and easy to access our service.</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                Oct 2023 - Dec 2023
                            </span>
                        </div>
                    </a>
                </div>

                <div class="ag-courses_item">
                    <a href="https://www.figma.com/file/juH0X9qzvcgI7nZWQxH659/CSTP-UI-design-Mobile-Framework" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            UX/UI Design - Car Rental IOS APP
                        </div>
                        <div class="ag-courses-item_description">
                            <div>
                            Make the following accessible to the user:
                            </div>
                            <ul>
                                <li>Vehicle Availability</li>
                                <li>Maintenance and Repairs</li>
                                <li>Coordination and Logistics</li>
                                <li>Customer Experience</li>
                                <li>Pricing Transparency</li>
                                <li>Insurance and Liability</li>
                                <li>Digital Competitiveness</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date-box">
                            <span class="ag-courses-item_date">
                                Feb 2023 - Apr 2023
                            </span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

ProjectsCard.propTypes = {

}

export default ProjectsCard
