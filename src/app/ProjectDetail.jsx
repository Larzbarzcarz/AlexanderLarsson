import React from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './ProjectDetail.module.css';
import { SiUnrealengine, SiUnity } from 'react-icons/si';


import TrashBashers from '../assets/images/TrashBashers.png';
import Evilutions from '../assets/images/Evilutions.png';
import FriendoAI from '../assets/images/FriendoAI.png';
import overbrewing from '../assets/images/Overbrewing.png';
import Evil1 from '../assets/images/Evil1.png'; 
import Evil2 from '../assets/images/Evil2.png';
import Evil3 from '../assets/images/Evil3.png';
import Friend1 from '../assets/images/Friend1.png';
import Friend2 from '../assets/images/Friend2.png';
import Friend3 from '../assets/images/Friend3.png';

import EvilutionBg from '../assets/images/Evillution_Bg.png';
import FriendoBackground from '../assets/images/FriendoBackground.png';


const BlueprintIcon = () => (
    <div className={style.blueprintIcon} title="Blueprints">
        <div className={style.bpGrid}></div>
        <span>BP</span>
    </div>
);


const projectDetailsData = {
    'trashbashers': {
        name: 'TrashBashers',
        description: ' For this game i developed all the gameplay systems that complimented the game, Timer, Scoring System, Pickups, Menus, endscreen.',
        images: [],
        logo: TrashBashers, 
        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/ZWW2AQ1W',
        link: 'https://futuregames.itch.io/trash-bashers'
    },
    'evilution': { 
        name: 'Evilution',
        description: 'For this game, I was the Lead Programmer. That did code reviews. And directed the code direction. Also i made the Camera swapping system. Did the setup for the animations, Turnbased combat. Touch Controls,',
        images: [Evil1,Evil2,Evil3],
        logo: Evilutions,
        backgroundImage: EvilutionBg,
        
        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting',
        link: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting'
    },
    'overbrewed': {
        name: 'OverBrewed',
        description: 'For this game i was the system designer. Worked on a Dialog system, NPC queue system. And then later on a Potion holder, And a timelapse to make the brewing more animated. ',
        images: [overbrewing],
        logo: overbrewing,
      
        engineIcons: [
            { icon: <SiUnrealengine size="28px" color="#ffffff" />, name: 'Unreal Engine' },
            { icon: <BlueprintIcon />, name: 'Blueprints' }
        ],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/gYz6Dr9t',
        link: 'https://futuregames.itch.io/overbrewed'

    
    },
    'friendoai': {
        name: 'FriendoAi',
        description: 'i made it around the Guessing system that would check for 2 words. and a memory list that would show you the words you wrote, And give you hints. with a corruption mode where you get shown cursed images you have to guess',
        images: [Friend1,Friend2,Friend3],
        logo: FriendoAI,
        backgroundImage: FriendoBackground,
        
        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://github.com/detdu/BBP-Game-Jam',
        link: 'https://larzko.itch.io/friendoai',
        	
		
    }
};

function ProjectDetail() {
    const { projectId } = useParams();
    const project = projectDetailsData[projectId?.toLowerCase()];
    
    const [activeImage, setActiveImage] = React.useState(null);

    if (!project) {
        return (
            <div className={style.errorContainer}>
                <h2>Project is not found</h2>
                <Link to="/">Tillbaka hem</Link>
            </div>
        );
    }

    const dynamicBackgroundStyle = project.backgroundImage 
        ? {
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url(${project.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed' 
          }
        : {}; 

    return (
         <div className={style.pageWrapper} style={dynamicBackgroundStyle}>
            <div className={style.container}>
                <Link to="/" className={style.backButton}>← Back to portfolio</Link>
                
                <header className={style.header}>
                    <div className={style.titleContainer}>
                        {project.logo && (
                            <img src={project.logo} alt={`${project.name} logo`} className={style.projectLogo} />
                        )}
                        <h1>{project.name}</h1>
                    </div>

                    {project.engineIcons && project.engineIcons.length > 0 && (
                        <div className={style.engineBadges}>
                            {project.engineIcons.map((item, index) => (
                                <div key={index} className={style.engineBadge} title={item.name}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </header>
                
                <section className={style.contentSection}>
                    <h2>About project</h2>
                    <p>{project.description}</p>
                </section>
                
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
                                    onClick={() => setActiveImage(img)} // Öppnar bilden i stort format vid klick
                                    style={{ cursor: 'zoom-in' }} // Ändrar muspekaren till ett förstoringsglas
                                />
                            ))}
                        </div>
                    </section>
                )}

                <footer className={style.footerButtons}>
                    <a href={project.link} target="_blank" rel="noreferrer" className={style.itchButton}>
                        Play on Itch.io
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className={style.githubButton}>
                         Source code
                    </a>
                </footer>
            </div>

            {/* LIGHTBOX MODAL — Visas bara när activeImage inte är null */}
            {activeImage && (
                <div className={style.lightboxOverlay} onClick={() => setActiveImage(null)}>
                    <div className={style.lightboxContent}>
                        <img src={activeImage} alt="Enlarged screenshot" />
                        <span className={style.lightboxClose}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;
