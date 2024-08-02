import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Nest.js" },
  { skill: "Express.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Agile methodologies" },
  { skill: "JIRA" },
  { skill: "RESTful APIs" },
  
];

const AboutSection = () => {
  return (
    <section id="about">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
  
   
<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
  <div className="md:w-1/2 ">
    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
      Get to know me!
    </h1>
    <p>
      Hi, my name is Yassine Azedine and I am a{" "}
      <span className="font-bold">{"highly ambitious"}</span>,
      <span className="font-bold">{" self-motivated"}</span>, and
      <span className="font-bold">{" driven"} </span> Web Developer.
      I have honed my skills in various technologies, including JavaScript, Node.js, React.js, Next.js, MongoDB, MySQL, Nest.js, Express.js. My journey began with a specialized technician diploma in electromechanics from ISTA Casablanca, and I furthered my education at YouCode Youssoufia, where I received an attestation of success in Web Development with a focus on JavaScript. Additionally, I&apos;ve gained valuable experience through internships at Sens Things and the University Mohamed 6 Polytechnique.
    </p>
    <br />
    <p>
      Currently, I contribute to the T3-Education platform at Sens Things, where I focus on adding new features, improving user experiences, and developing robust backend services using Nest.js. My notable projects include an online booking application for reservations and preventing certificate counterfeiting for the Moroccan Baccalaureate.
    </p>
    <br />
    <p>
      I am committed to continuous learning and professional growth, currently enhancing my English proficiency to better communicate and collaborate in the global tech community. Outside of work, I enjoy playing football, have a background in taekwondo, and find inspiration in music, especially guitar pieces.
    </p>
    <br />
    <p>
      I believe that you should{" "}
      <span className="font-bold text-teal-500">
        never stop growing
      </span>
      . Feel free to explore my portfolio to see some of the exciting projects I&apos;ve worked on. If you&apos;d like to get in touch, please visit the contact section. Let&apos;s create something amazing together! 🙂
    </p>
  </div>
  <div className="text-center md:w-1/2 md:text-left">
    <h1 className="text-2xl font-bold mb-6">My Skills</h1>
    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
      {skills.map((item, idx) => {
        return (
          <p
            key={idx}
            className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
          >
            {item.skill}
          </p>
        );
      })}
    </div>

    <Image
      src="/4.jpg"
      alt=""
      width={325}
      height={400}
      className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
    />
  </div>
</div>

    </div>
  </section>
  
  )
}

export default AboutSection
