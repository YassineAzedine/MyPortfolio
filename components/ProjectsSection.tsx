import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Electro Store ",
    description:
      "ElectroStore is an e-commerce platform for electronic products. The backend is built with NestJS and deployed on Render, while the frontend is created with Next.js and hosted on Vercel. Access the platform at ElectroStore.",
    image: "/ElcroStore.jpeg",
    github: "https://github.com/YassineAzedine/Electro-Store.git",
    link: "https://front-electro-store-kl77.vercel.app/",
  },
  {
    name: "Job Linker",
    description: "Job Linker is an innovative job board application designed to connect job seekers with employers seamlessly. Built with Next.js and Mongoose, Job Linker offers a modern, user-friendly interface for browsing job listings, applying for positions, and managing job applications. Job seekers can create detailed profiles, receive personalized job recomme",
    image: "/jobLinker.jpeg",
    github: "https://github.com/YassineAzedine/JobLinker.git",
    link: "https://job-linker-delta.vercel.app/",
  },
  {
    name: "Social Networking Platform",
    description:
      "dynamic social networking platform built with Express, Node.js, React.js, and MongoDB. It enables users to connect, communicate, and share content with friends and communities. The platform features profile creation, real-time messaging, and activity feeds, allowing users to interact and stay updated with their network. With React.js for a respons",
    image: "/socialNetwrking.jpeg",
    github: "https://github.com/YassineAzedine/Social-Networking-Platform.git",
    link: "https://frontend-social-network-rho.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
