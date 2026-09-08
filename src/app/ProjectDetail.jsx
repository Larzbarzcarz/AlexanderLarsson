import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ProjectDetail.module.css';

import TrashBashers from '../assets/images/TrashBashers.png';
import Evilutions from '../assets/images/Evilutions.png';
import FriendoAI from '../assets/images/FriendoAI.png';
import overbrewing from '../assets/images/Overbrewing.png';


const projectDetailsData = {
    'trashbashers': {
        name: 'TrashBashers',
        description: ' For this game i developed all the gameplay systems that complimented the game, Timer, Scoring System, Pickups, Menus, endscreen.',
        images: [TrashBashers],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/ZWW2AQ1W',
        link: 'https://futuregames.itch.io/trash-bashers'
    },
    'evilution': { 
        name: 'Evilution',
        description: 'For this game, I was the Lead Programmer. That did code reviews. And directed the code direction. Also i made the Camera swapping system. Did the setup for the animations, Turnbased combat. Touch Controls,',
        images: [Evilutions],
        github: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting',
        link: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting'
    },
    'overbrewed': {
        name: 'OverBrewed',
        description: 'For this game i was the system designer. Worked on a Dialog system, NPC queue system. And then later on a Potion holder, And a timelapse to make the brewing more animated. ',
        images: [overbrewing],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/gYz6Dr9t',
        link: 'https://futuregames.itch.io/overbrewed'

    
    },
    'friendoai': {
        name: 'FriendoAi',
        description: 'Its a game jam, That was mostly developed during 1 day. on the simple premise of if AI existed in the 90s, You as a player got to train the AI.',
        images: [FriendoAI],
        github: 'https://github.com',
        link: 'https://itch.io'
    }
};

function ProjectDetail() {
    const { projectId } = useParams();
    const project = projectDetailsData[projectId?.toLowerCase()];

    if (!project) {
        return (
            <div className={style.errorContainer}>
                <h2>Projektet hittades inte</h2>
                <Link to="/" className={style.backButton}>Back Home</Link>
            </div>
        );
    }

    return (
        <div className={style.pageWrapper}>
            <div className={style.container}>
                <Link to="/" className={style.backButton}>← Back to the Portfolio</Link>
                
                <header className={style.header}>
                    <h1>{project.name}</h1>
                </header>
                
                <section className={style.contentSection}>
                    <h2>About this Project</h2>
                    <p>{project.description}</p>
                </section>
                
                {/* Visar bilder om det finns några i arrayen */}
                {project.images && project.images.length > 0 && (
                    <section className={style.gallerySection}>
                        <h2>Showcase</h2>
                        <div className={style.imageGrid}>
                            {project.images.map((img, index) => (
                                <img 
                                    key={index} 
                                    src={img} 
                                    alt={`${project.name} screenshot ${index}`} 
                                    className={style.galleryImage}
                                />
                            ))}
                        </div>
                    </section>
                )}

                <footer style={{ marginTop: '40px' }}>
                    <a href={project.link} target="_blank" rel="noreferrer" className={style.itchButton}>
                        Play on Itch.io
                    </a>
                </footer>
                <footer style={{ marginTop: '20px' }}>
                    <a href={project.github} target="_blank" rel="noreferrer" className={style.itchButton}>
                        My Code
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default ProjectDetail;