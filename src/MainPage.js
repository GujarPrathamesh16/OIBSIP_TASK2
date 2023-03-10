import React from 'react';
import pic from './images/mainImg.jpg'
import tataAdvSys from './images/tataAdvanceSystems.jpg'
import tataCapital from './images/tataCapital.png'
import tataChemicals from './images/tataChemicals.png'
import tataMotors from './images/tataMotors.jpg'
import tataPower from './images/tataPower.jpg'
import tataSteel from './images/tataSteel.jpg'
import tcs from './images/tcs.jpg'
import tataComm from './images/tataComm.jpg'
import tataAir from './images/tataAir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brand-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function MainPage() {

    const routeChange = () => {
        window.location.href = 'https://www.tata.com/investors/companies#:~:text=PDF-';
    }
    return (
        <>
            <h1 className='main-heading'>Ratan Tata</h1>
            <br />
            <img src={pic} alt="Loading.." className='mainImg'></img>
            <div className='cont'>
                <hr />
                <div className='sub-cont'>
                    <h2 className='heading'>About - </h2>
                    <p>Ratan Naval Tata (born 28 December 1937) is an Indian businessman and former chairman of Tata Sons. He was also the chairman of the Tata Group from 1990 to 2012, serving also as interim chairman from October 2016 through February 2017. He continues to head its charitable trusts. In 2008, he received the Padma Vibhushan, the second highest civilian honour in India, after receiving the Padma Bhushan, the third highest civilian honour in 2000. He is the son of Naval Tata, who was adopted by Ratanji Tata, son of Jamsetji Tata, the founder of the Tata Group. He graduated from the Cornell University College of Architecture with a bachelor's degree in architecture. He joined Tata in 1961, where he worked on the shop floor of Tata Steel. He later succeeded J. R. D. Tata's as chairman of Tata Sons upon the latter's retirement in 1991. Under his tenure the Tata Group acquired Tetley, Jaguar Land Rover, and Corus, in an attempt to turn Tata from a largely India-centric group into a global business. Tata is also one of the largest philanthropists in the world, having donated around 60-65% of his income to charity.</p>
                </div>
                <hr />
                <div className='sub-cont'>

                    <h2 className='heading'>Achivement timeline -</h2>
                    <p>
                        <ul>
                            <li className='timeline'> <div className='year'>1961</div>  - Rejected IBM's offer and started with handling a blast furnace at Tata Steel</li>
                            <li className='timeline'> <div className='year'>1981</div>  - Became the Chairman of Tata Industries.</li>
                            <li className='timeline'> <div className='year'>1983</div>  - Revolutionised the salt industry with first iodised salt - "Tata Namak, Desh ka Namak"</li>
                            <li className='timeline'> <div className='year'>1986</div>  - Became the Chairman of Air India.</li>
                            <li className='timeline'> <div className='year'>1991</div>  - Became the Chairman of Tata Group.</li>
                            <li className='timeline'> <div className='year'>1999</div>  - His offer to sell Tata Motors to Ford Motors was rejected.</li>
                            <li className='timeline'> <div className='year'>2000</div>  - Received the Padma Bhushan !<br /> - Tata Tea acquired Tetley Group - now the 2nd largest tea brand in the world.</li>
                            <li className='timeline'> <div className='year'>2004</div>  - TCS went public: first Indian IT company to cross $1 Bn in revenue</li>
                            <li className='timeline'> <div className='year'>2006</div>  - Entered the DTH space with Tata Sky - now a leader in the space.</li>
                            <li className='timeline'> <div className='year'>2008</div>  - Saved Ford Motors from bankruptcy - acquired Jaguar & Landrover <br />- Recieved the Padma Vibhushan.</li>
                            <li className='timeline'> <div className='year'>2009</div>  - Launced the cheapest car in India for the 'common man' Nano for just 1 Lakh.</li>
                            <li className='timeline'> <div className='year'>2010</div>  - Donated $50 Mn to Harvard Business School for an executive centre - named Tata Hall in his honour.</li>
                            <li className='timeline'> <div className='year'>2012</div>  - Retired, but kept the title of Chairman Emeritus, Grew Tata Group to over $100 Bn in revenues under his tenure.</li>
                            <li className='timeline'> <div className='year'>2014</div>  - Made the largest donation in IIT Bombay's history - 95 Cr for their R&D centre.</li>
                            <li className='timeline'> <div className='year'>2022</div>  - Welcomed Air India back to Tata Group after 69 years.</li>
                        </ul>
                    </p>
                </div>
                <hr />
                <div className='sub-cont'>
                    <h2 className='heading'>Businesses Owned by Tata Group-</h2>
                    <div className='flex-cont'>

                        <div className='b-image'> <a href="https://www.tata.com/business/tcs" target='_blank' rel="noreferrer"><img src={tcs} alt="unable" /></a></div>
                        <div className='b-image'> <a href="https://www.tata.com/business/tata-steel" target='_blank' rel='noreferrer'><img src={tataSteel} alt="unable" /></a></div>
                        <div className='b-image'> <a href="https://www.tata.com/business/tata-motors" target='_blank' rel='noreferrer'><img src={tataMotors} alt="unable" /></a></div>
                    </div>
                    <div className='flex-cont'>
                        <div className='b-image'> <a href="https://www.tata.com/business/tata-chemicals" target='_blank' rel='noreferrer'><img src={tataChemicals} alt="unable" /></a></div>
                        <div className='b-image'> <a href="https://www.tata.com/business/tata-advanced-systems-ltd-tasl" target='_blank' rel='noreferrer'><img src={tataAdvSys} alt="unable" /></a></div>
                        <div className='b-image'> <a href="https://www.tata.com/business/tata-power" target='_blank' rel='noreferrer'><img src={tataPower} alt="unable" /></a></div>
                    </div>
                    <div className='flex-cont'>
                        <div className='b-image'><a href="https://www.tata.com/business/tata-communications"><img src={tataComm} alt="loading.." /></a></div>
                        <div className='b-image'><a href="https://www.tata.com/business/tata-capital"><img src={tataCapital} alt="loading.." /></a></div>
                        <div className='b-image'><a href="https://www.tata.com/business/tata-sia-airlines-vistara"><img src={tataAir} alt="loading.." /></a></div>
                    </div>
                    <button onClick={routeChange}>Know More</button>
                </div>
                <hr />
                <footer>
                    Copyright &copy; Prathamesh Gujar
                    <br /><br /><br />
                    Connect with me-
                    <div className='icon-div'>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="icons" /></a>
                        <a href="https://www.linkedin.com/in/prathamesh-gujar-001138243/"><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
                        <a href="https://github.com/GujarPrathamesh16"><FontAwesomeIcon icon={faGithubSquare} className="icons" /></a>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default MainPage