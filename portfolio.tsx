import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, ExternalLinkIcon, CodeIcon, BookOpenIcon, BrainCircuitIcon, XIcon } from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
        <a className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold">Naman Purwar</span>
        </a>
        <nav className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex absolute md:relative top-14 left-0 right-0 md:top-0 p-4 md:p-0 bg-gray-800 md:bg-transparent flex-col md:flex-row items-start md:items-center gap-4 md:ml-auto z-50`}>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about" onClick={toggleMenu}>About</a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#skills" onClick={toggleMenu}>Skills</a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#projects" onClick={toggleMenu}>Projects</a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#education" onClick={toggleMenu}>Education</a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Naman Purwar
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                  Web Developer | B.Tech Student at AKTU | AI Enthusiast
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">About Me</h2>
            <p className="mt-4 text-gray-400 md:text-xl text-center max-w-3xl mx-auto">
              I'm a passionate web developer and B.Tech student at AKTU with a strong foundation in creating responsive and user-friendly web applications. My journey in tech has equipped me with a diverse skill set and a keen eye for detail. I thrive on turning complex problems into simple, beautiful, and intuitive designs. Additionally, I have a growing interest in Artificial Intelligence and its potential to revolutionize various industries.
            </p>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Skills</h2>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "SQL", "Git", "RESTful APIs", "Responsive Design", "UI/UX Principles", "Python", "AI/ML Basics"].map((skill) => (
                <Card key={skill} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-blue-400">{skill}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Projects</h2>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "To-Do List Application",
                  description: "A feature-rich task management app with user authentication, task categorization, and priority setting.",
                  tech: ["React", "Node.js", "Express", "MongoDB", "JWT"]
                },
                {
                  title: "Insect-Catch Game",
                  description: "An interactive browser-based game where players catch insects against time, featuring increasing difficulty levels.",
                  tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"]
                },
                {
                  title: "Chair E-commerce Website",
                  description: "A responsive e-commerce platform for a chair manufacturer, including product catalog, cart functionality, and checkout process.",
                  tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"]
                },
              ].map((project, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 text-xs rounded-full">{tech}</span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Project
                      <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Education</h2>
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">Bachelor of Technology</CardTitle>
                  <CardDescription className="text-gray-400">Computer Science and Engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300"><BookOpenIcon className="inline mr-2 h-4 w-4" /> Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                  <p className="text-gray-300">Expected Graduation: 2025</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">12th Standard</CardTitle>
                  <CardDescription className="text-gray-400">Higher Secondary Education</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300"><BookOpenIcon className="inline mr-2 h-4 w-4" /> S.V.M. Inter College, Orai</p>
                  <p className="text-gray-300">Completed: 2020</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">10th Standard</CardTitle>
                  <CardDescription className="text-gray-400">Secondary Education</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300"><BookOpenIcon className="inline mr-2 h-4 w-4" /> S.V.M. Inter College, Orai</p>
                  <p className="text-gray-300">Completed: 2018</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Get in Touch</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-gray-100" />
              <Input type="email" placeholder="Your Email" className="bg-gray-700 border-gray-600 text-gray-100" />
              <Textarea placeholder="Your Message" className="bg-gray-700 border-gray-600 text-gray-100" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2023 Naman Purwar. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100 transition-colors" href="#about">
            About
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100 transition-colors" href="#projects">
            Projects
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100 transition-colors" href="#contact">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}