import { Routes, Route } from 'react-router-dom';
import Content from './pages/Content';
import Project from './pages/Project';
function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Project />}></Route>
      <Route path=":id" element={<Content />} />
    </Routes>
  );
}

export default ProjectRoutes