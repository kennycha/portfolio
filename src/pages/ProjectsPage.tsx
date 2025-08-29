import { LandingPreview } from '@/components/LandingPreview';
import { Navigation } from '@/components/Navigation';
import { ProjectSelector } from '@/components/ProjectSelector';
import { INITIAL_TOML_CONTENT } from '@/lib/constants';
import { useEffect, useState } from 'react';

const PROJECTS: {
  id: string;
  name: string;
  tagline: string;
  configPath: string;
}[] = [
  {
    id: 'soft-landing',
    name: 'Soft Landing',
    tagline: 'From TOML to landing pages',
    configPath: 'portfolio/soft-landing/config.toml',
  },
  {
    id: 'checka',
    name: 'Checka',
    tagline: 'Monitor agents from your menubar',
    configPath: 'portfolio/checka/config.toml',
  },
  {
    id: 'seednote',
    name: 'Seednote',
    tagline: 'Drop ideas, watch them grow',
    configPath: 'portfolio/seednote/config.toml',
  },
  {
    id: 'cursor-chat-keeper',
    name: 'Cursor Chat Keeper',
    tagline: 'Keep your cursor chats',
    configPath: 'portfolio/cursor-chat-keeper/config.toml',
  },
  {
    id: 'links2video',
    name: 'Links2Video',
    tagline: 'Convert links into a single video',
    configPath: 'portfolio/links2video/config.toml',
  },
  {
    id: 'gnedby',
    name: 'Gnedby',
    tagline: 'Digitize physical music collection',
    configPath: 'portfolio/gnedby/config.toml',
  },
];

export const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<string>(PROJECTS[0].id);
  const [tomlContent, setTomlContent] = useState<string>(INITIAL_TOML_CONTENT);

  // Load project-specific TOML content when project changes
  useEffect(() => {
    const loadProjectConfig = async () => {
      const project = PROJECTS.find((p) => p.id === activeProject);
      if (!project) {
        setTomlContent(INITIAL_TOML_CONTENT);
        return;
      }

      try {
        // Fetch the TOML file from the public directory
        const response = await fetch(`/${project.configPath}`);
        if (!response.ok) {
          throw new Error(`Failed to load config: ${response.status}`);
        }

        const tomlText = await response.text();
        setTomlContent(tomlText);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.warn(`Failed to load config for ${activeProject}:`, error);
        // Fallback to default content
        setTomlContent(INITIAL_TOML_CONTENT);
      }
    };

    loadProjectConfig();
  }, [activeProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-indigo-100/50">
      <Navigation />
      <ProjectSelector projects={PROJECTS} value={activeProject} onChange={setActiveProject} />
      <LandingPreview tomlContent={tomlContent} />
    </div>
  );
};
