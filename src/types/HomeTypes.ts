export type Study = {
  id: number;
  title: string;
  desc: string;
};

export type Project = {
  id: number;
  name: string;
  tech: string;
};

export type HomeResponse = {
  title: string;
  studies: Study[];
  projects: Project[];
};
