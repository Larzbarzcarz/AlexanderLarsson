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
import Brew1 from '../assets/images/Brew1.png';
import Trash2 from '../assets/images/Trash2.png';
import Trash1 from '../assets/images/Trash1.png';

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
        description: (
            <>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Role: Gameplay & Systems Programmer</strong><br />
                    I was responsible for designing and implementing the core gameplay loop and supporting systems for TrashBashers, ensuring a modular and scalable architecture that complemented our environmental theme.
                </p>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Technical Contributions</h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.7' }}>
                    <li><strong>Core Gameplay Loop:</strong> Developed the main game Timer, Scoring System, and the Endscreen sequence, bridging gameplay state management with the UI wrapper.</li>
                    <li><strong>Theme-Driven Pickups:</strong> Implemented an enemy-drop pickup system for recyclable cans/bottles, utilizing clean destruction methods to support performance.</li>
                    <li><strong>Boost Mechanics:</strong> Co-developed the dynamic player Boost System, engineering the logic that recalculates and recharges speed gauges based on collected trash data.</li>
                    <li><strong>State Menus:</strong> Programmed modular and robust UI structures for the Main Menu, Pause Menu, and GameOver screens.</li>
                </ul>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Challenges & Takeaways</h3>
                <p style={{ lineHeight: '1.6' }}>
                    As my first major game project, TrashBashers taught me the importance of clear script communication and separation of concerns. Designing systems like the boost mechanic alongside other programmers sharpened my version control (Perforce) workflow and collaborative problem-solving skills.
                </p>
            </>
        ),
        images: [Trash1,Trash2],
        logo: TrashBashers, 
        language: 'C#',
        year: '2025',
        duration: '4 Weeks',
        groupSize: 'Group of 12',

        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/ZWW2AQ1W',
        link: 'https://futuregames.itch.io/trash-bashers'
    },
    'evilution': { 
        name: 'Evilution',
         description: (
            <>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Role: Lead Programmer</strong><br />
                    As the Lead Programmer, I was responsible for conducting code reviews, aligning the programming team's technical direction, and building core systemic foundations for this turn-based mobile title.
                </p>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Technical Contributions</h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.7' }}>
                    <li><strong>Turn-Based Combat Architecture:</strong> Engineered a robust combat system featuring three main interactive state options: Attacking, Defending (incorporating a 33% enemy miss-chance algorithm), and dynamic Inventory Item usage.</li>
                    <li><strong>Mobile Touch Mechanics:</strong> Programmed responsive screen touch controls tailored for the crafting loop, allowing players to fluidly drag-and-drop ingredients directly into the cauldron/pot.</li>
                    <li><strong>Animation & Camera Pipeline:</strong> Handled the technical setup and anchoring of character animations for combat transitions, alongside developing the specialized Start Menu camera panning system.</li>
                </ul>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Leadership & Takeaways</h3>
                <p style={{ lineHeight: '1.6' }}>
                    Leading the code development forced me to establish clean guidelines for our repository workflow. Balancing architectural choices for intricate turn-based systems while mentoring team members significantly strengthened my leadership capabilities and project planning skills.
                </p>
            </>
        ),
        images: [Evil1,Evil2,Evil3],
        logo: Evilutions,
        language: 'C#',
		year: '2024',
		duration: '7 Weeks',
		groupSize: 'Group of 11',
        backgroundImage: EvilutionBg,
        
        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting',
        link: 'https://futuregames.itch.io/evillution'
    },
    'overbrewed': {
        name: 'OverBrewed',
       description: (
            <>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Role: Systems Designer / Blueprints Programmer</strong><br />
                    For this co-op project, my focus lay heavily on designing system logic and programming visual scripting networks within Unreal Engine to create immersive crafting feedback loops.
                </p>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Technical Contributions</h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.7' }}>
                    <li><strong>Visual Scripting (Blueprints):</strong> Architected the interactive Potion Holder network and engineered a time-lapse script to create visually animated brewing cycles.</li>
                    <li><strong>Dialogue System Prototyping:</strong> Designed and implemented an NPC dialogue system blueprint that handled dynamic orders, feeding parameters to the player to allow acceptance or denial of specific quests (System later cut/axed during production shifts).</li>
                </ul>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Challenges & Takeaways</h3>
                <p style={{ lineHeight: '1.6' }}>
                    As my first major Unreal Engine title, this project gave me solid, hands-on experience with production methodologies. Handling axed features like the quest-dialogue pipeline taught me to appreciate rapid iterative prototyping and how to quickly pivot systems design to favor core game scopes.
                </p>
            </>
        ),
        images: [Brew1],
        logo: overbrewing,
        language: 'C++',
        hasBlueprints: true,
        year: '2025',
		duration: '7 Weeks',
        groupSize: 'Group of 14',
	
      
        engineIcons: [
            { icon: <SiUnrealengine size="28px" color="#ffffff" />, name: 'Unreal Engine' },
            { icon: <BlueprintIcon />, name: 'Blueprints' }
        ],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/gYz6Dr9t',
        link: 'https://futuregames.itch.io/overbrewed'

    
    },
    'friendoai': {
        name: 'FriendoAi',
          description: (
            <>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Role:  Systems Programmer (Game Jam)</strong><br />
                    Developed during a condensed 1-day timeframe, I engineered the entire back-end logic, game loop parameters, and specialized event sequences for this nostalgic 90s AI training simulator.
                </p>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Technical Contributions</h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.7' }}>
                    <li><strong>Word-Parsing Guessing Loop:</strong> Programmed a string-checking execution script capable of filtering specific arrays of accepted inputs and validating compound 2-word answers.</li>
                    <li><strong>Dynamic Systems & Hint Log:</strong> Developed a systemic hint manager providing player contextual clues, connected to a historical Memory List that tracks and displays past input attempts.</li>
                    <li><strong>State Shifts & Cursed Assets:</strong> Engineered a specialized "Corrupted Mode" script managing conditional dialogue triggers, custom screen UI shifts, and a progression-based glitched alternative ending layout.</li>
                </ul>

                <h3 style={{ color: '#00adb5', fontSize: '1.2rem', marginBottom: '10px' }}>Jam Takeaways</h3>
                <p style={{ lineHeight: '1.6' }}>
                    Building complex state machines, text tracking, and secret corrupted visual sequences within a tight 24-hour window greatly heightened my rapid scripting execution and scope compression habits in Unity C#.
                </p>
            </>
        ),
        images: [Friend1,Friend2,Friend3],
        logo: FriendoAI,
        backgroundImage: FriendoBackground,
        language: 'C#',
		year: '2025',
		duration: '1 Day',
        groupSize: '5 pepole',
      
        
        engineIcons: [
            { icon: <SiUnity size="28px" color="#ffffff" />, name: 'Unity' }
        ],
        github: 'https://pastebin.com/u/LarzBarzCarz/1/XJUKR62n',
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
                <Link to="/">Going back to portfolio</Link>
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
                                    onClick={() => setActiveImage(img)} // Öppnar bilden i stort format vid klick github har brister
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
                         My Code
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
