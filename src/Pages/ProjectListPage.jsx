import React from 'react'
import { Link } from "react-router-dom";



const projects = [
  { id: 1, name: "Project 1", thumbnail: "/ProjectMain/G-Bequest/Bquest1.png" },
  { id: 2, name: "Project 2", thumbnail: "/ProjectMain/G-Bequest/Bquest1.png" },
  { id: 3, name: "Project 3", thumbnail: "/ProjectMain/G-Bequest/Bquest1.png" },
  { id: 4, name: "Project 4", thumbnail: "/ProjectMain/G-Bequest/Bquest1.png" },
  { id: 5, name: "Project 5", thumbnail: "/ProjectMain/G-Bequest/Bquest1.png" },
];

const ProjectListPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  View Details
                </span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;