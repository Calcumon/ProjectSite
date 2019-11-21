import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import anisha from '../../../../assets/team/anisha.png';
import joey from '../../../../assets/team/joey.png';
import lucia from '../../../../assets/team/lucia.png';
import anna from '../../../../assets/team/anna.png';
import erica from '../../../../assets/team/erica.png';
import drew from '../../../../assets/team/drew.png';
import kj from '../../../../assets/team/kj.png';

import { faGithub, faSimplybuilt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team : React.FC = () => {
    return (
        <div className="team">
            <h1>WHO WE ARE</h1>
            <div className="team-cards">
                <div className="col1">
                    <div>
                        <div className="info">
                            <p className="h3">Anisha Jain</p>
                            <p className="h4">Founder, PM</p>
                            <p className="icons">
                                <a target="_blank" href="https://anishajain.herokuapp.com/"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/annysha"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/anisha7"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={anisha} alt="Anisha's picture" />
                    </div>
                    <div >
                        <div className="info">
                            <p className="h3">Joey Gaitan</p>
                            <p className="h4">Frontend</p>
                            <p className="icons">
                                {/* <a target="_blank" href="https://anishajain.herokuapp.com/"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a> */}
                                <a target="_blank" href="https://www.linkedin.com/in/joey-gaitan/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/joeygaitan"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={joey} alt="Joey's picture" />
                    </div>
                    <div>
                        <div className="info">
                            <p className="h3">Lucia Reynoso</p>
                            <p className="h4">Git master</p>
                            <p className="icons">
                                {/* <a target="_blank" href="https://anishajain.herokuapp.com/"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a> */}
                                <a target="_blank" href="https://www.linkedin.com/in/lucia-reynoso/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/lvreynoso"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={lucia} alt="Lucia's picture" />
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <div className="info">
                            <p className="h3">Anna Pawl</p>
                            <p className="h4">Design Lead, UX</p>
                            <p className="icons">
                                {/* <a target="_blank" href=""><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a> */}
                                <a target="_blank" href="https://www.linkedin.com/in/annapawl/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/AnniePawl"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={anna} alt="Anna's picture" />
                    </div>
                    <div>
                        <div className="info">
                            <p className="h3">Erica Naglik</p>
                            <p className="h4">Design</p>
                            <p className="icons">
                                {/* <a target="_blank" href="https://anishajain.herokuapp.com/"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a> */}
                                <a target="_blank" href="https://www.linkedin.com/in/ericanaglik/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/orgs/Calcumon/people/ericanaglik"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={erica} alt="Erica's picture" />
                    </div>
                </div>
                <div className="col3">
                    <div>
                        <div className="info">
                            <p className="h3">Drew McGowan</p>
                            <p className="h4">Backend</p>
                            <p className="icons">
                                <a target="_blank" href="https://www.makeschool.com/portfolio/Michael-McGowan"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a>
                                <a target="_blank" href="linkedin.com/in/michael-mcgowan-01b240167/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/dmcg89"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={drew} alt="Drew's picture" />
                    </div>
                    <div>
                        <div className="info">
                            <p className="h3">KJ Wilson</p>
                            <p className="h4">Backend</p>
                            <p className="icons">
                                {/* <a target="_blank" href="https://anishajain.herokuapp.com/"><FontAwesomeIcon className="icon" icon={ faSimplybuilt } size="1x" /></a> */}
                                <a target="_blank" href="https://www.linkedin.com/in/kjwilsondev/"><FontAwesomeIcon className="icon" icon={ faLinkedin } size="1x" /></a>
                                <a target="_blank" href="https://github.com/sadboykj"><FontAwesomeIcon className="icon" icon={ faGithub } size="1x" /></a>
                            </p>
                        </div>
                        <img src={kj} alt="Kjs picture" />
                    </div>
                </div>
            </div>
            <p className="team-slogan">We are on <span>YOUR</span> team.</p>
            
        </div>
    )
}

export default Team;
