import { useState, useRef } from 'react';
import styles from './styles.module.scss'; 

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  benefits?: string[];
  whatsappMessage?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlayPause = (projectId: number) => {
    const video = videoRefs.current[projectId];
    if (video) {
      if (video.paused) {
        video.play().then(() => {
          setPlayingVideos(prev => ({ ...prev, [projectId]: true }));
        }).catch(error => {
          console.log('Play prevented:', error);
        });
      } else {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [projectId]: false }));
      }
    }
  };

  const handleVideoEnd = (projectId: number) => {
    setPlayingVideos(prev => ({ ...prev, [projectId]: false }));
  };

  const openFullscreen = (projectId: number, videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleAcquisition = (project: Project) => {
    const phoneNumber = '5551995930496'; 
    const message = project.whatsappMessage || `Olá! Tenho interesse no projeto: ${project.title}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.tagline}>Meus Trabalhos</span>
        <h2>Projetos em Destaque</h2>
        <p className={styles.subtitle}>
          Confira alguns dos meus principais projetos e soluções desenvolvidas
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`${styles.projectItem} ${index % 2 === 1 ? styles.reverse : ''}`}
          >
            <div className={styles.mediaContainer}>
              {project.videoUrl ? (
                <div className={styles.videoWrapper}>
                  <video
                    ref={el => videoRefs.current[project.id] = el}
                    poster={project.imageUrl}
                    controls={playingVideos[project.id]}
                    onPlay={() => setPlayingVideos(prev => ({ ...prev, [project.id]: true }))}
                    onPause={() => setPlayingVideos(prev => ({ ...prev, [project.id]: false }))}
                    onEnded={() => handleVideoEnd(project.id)}
                    onClick={() => !playingVideos[project.id] && handlePlayPause(project.id)}
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  
                  {!playingVideos[project.id] && (
                    <>
                      <div 
                        className={styles.playOverlay}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause(project.id);
                        }}
                      >
                        ▶
                      </div>
                      <div 
                        className={styles.fullscreenButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          openFullscreen(project.id, project.videoUrl!);
                        }}
                        title="Abrir em tela cheia"
                      >
                        ⛶
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className={styles.imageContainer}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            <div className={styles.textContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {project.benefits && (
                <div className={styles.benefits}>
                  <h4>🎯 Benefícios para seu Negócio:</h4>
                  <ul>
                    {project.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.projectLinks}>
                <button 
                  onClick={() => handleAcquisition(project)}
                  className={styles.ctaButton}
                >
                  Adquirir Projeto
                </button>
                
                {project.projectUrl && (
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    🌐 Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className={styles.videoModal} onClick={() => setSelectedVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedVideo(null)}>
              ×
            </button>
            <video 
              controls 
              autoPlay 
              src={selectedVideo} 
              className={styles.fullscreenVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;