import React from 'react';
import './styles.scss';
import anisha from '../../../../assets/team/anisha.png';
import joey from '../../../../assets/team/joey.png';
import lucia from '../../../../assets/team/lucia.png';
import anna from '../../../../assets/team/anna.png';
import erica from '../../../../assets/team/erica.png';
import drew from '../../../../assets/team/drew.png';
import kj from '../../../../assets/team/kj.png';

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
                            <p>icons</p>
                        </div>
                        <img src={anisha} alt="Anisha's picture" />
                    </div>
                    <div >
                        <img src={joey} alt="Joey's picture" />
                    </div>
                    <div>
                        <img src={lucia} alt="Lucia's picture" />
                    </div>
                </div>
                <div className="col2">
                    <div>
                        <img src={anna} alt="Anna's picture" />
                    </div>
                    <div>
                        <img src={erica} alt="Erica's picture" />
                    </div>
                </div>
                <div className="col3">
                    <div>
                        <img src={drew} alt="Drew's picture" />
                    </div>
                    <div>
                        <img src={kj} alt="Kjs picture" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Team;
