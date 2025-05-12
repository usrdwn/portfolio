"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MousePointer, ArrowRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState(true)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setCursorHidden(false)
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  const skills = [
    { name: "JavaScript", color: "bg-blue-400" },
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-blue-600" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "Python", color: "bg-blue-800" },
    { name: "Next.js", color: "bg-slate-700" },
    { name: "Tailwind CSS", color: "bg-slate-600" },
    { name: "MongoDB", color: "bg-slate-500" },
    { name: "Git", color: "bg-slate-600" },
    { name: "Docker", color: "bg-slate-700" },
    { name: "AWS", color: "bg-slate-800" },
    { name: "GraphQL", color: "bg-slate-900" },
  ]

  const projects = [
    {
      id: 1,
      title: "Application Web Immersive",
      description: "Une application web avec des visualisations 3D et des interactions utilisateur avancées.",
      image: "/placeholder.svg?height=400&width=600&text=Projet%201",
      tags: ["React", "Three.js", "WebGL"],
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Plateforme d'Apprentissage IA",
      description: "Une plateforme éducative utilisant l'IA pour personnaliser l'expérience d'apprentissage.",
      image: "/placeholder.svg?height=400&width=600&text=Projet%202",
      tags: ["Python", "TensorFlow", "Next.js"],
      color: "from-slate-400 to-slate-600",
    },
    {
      id: 3,
      title: "Application Mobile Cross-Platform",
      description: "Une application mobile disponible sur iOS et Android avec synchronisation en temps réel.",
      image: "/placeholder.svg?height=400&width=600&text=Projet%203",
      tags: ["React Native", "Firebase", "Redux"],
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      title: "Dashboard Analytique",
      description: "Un tableau de bord interactif pour visualiser et analyser des données complexes.",
      image: "/placeholder.svg?height=400&width=600&text=Projet%204",
      tags: ["D3.js", "Node.js", "MongoDB"],
      color: "from-slate-400 to-slate-600",
    },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-slate-100 text-slate-800 overflow-hidden">
      {/* Custom cursor */}
      <div
        className={cn(
          "fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-300",
          cursorHidden ? "opacity-0" : "opacity-100",
        )}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          background: "#5271ff",
        }}
      />

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1000&width=1000&text=Grid')",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-24 flex flex-col items-center justify-center z-40">
        <div className="space-y-12">
          {["home", "skills", "projects", "contact"].map((section) => (
            <motion.div
              key={section}
              className="relative"
              whileHover={{ scale: 1.2 }}
              onClick={() => handleSectionChange(section)}
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-all duration-300",
                  activeSection === section ? "bg-primary scale-150" : "bg-slate-400",
                )}
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Social links */}
      <div className="fixed top-8 right-8 flex gap-4 z-40">
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <Github className="h-6 w-6 text-slate-700" />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
        >
          <Linkedin className="h-6 w-6 text-slate-700" />
        </motion.a>
        <motion.a href="mailto:email@example.com" whileHover={{ scale: 1.2, rotate: 5 }}>
          <Mail className="h-6 w-6 text-slate-700" />
        </motion.a>
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 md:w-2/3"
                >
                  <motion.div
                    className="text-sm font-mono mb-4 inline-block text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ÉTUDIANT EN RECHERCHE DE STAGE/ALTERNANCE
                  </motion.div>
                  <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      LÉO
                    </motion.span>
                    <motion.span
                      className="block text-primary"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      SAUVEY
                    </motion.span>
                  </h1>
                  <motion.p
                    className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Étudiant en Master of Engineering passionné par le développement web et les nouvelles technologies.
                  </motion.p>
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Button
                      className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white"
                      onClick={() => handleSectionChange("projects")}
                    >
                      <span className="relative z-10">Voir mes projets</span>
                      <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100" />
                    </Button>
                    <Button
                      variant="outline"
                      className="group border-slate-300 text-slate-700 hover:text-primary hover:border-primary"
                      onClick={() => handleSectionChange("contact")}
                    >
                      Me contacter
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="md:w-1/3"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute -inset-0.5 rounded-full bg-primary/20 blur-sm z-0"></div>
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white z-10">
                      <Image
                        src="/placeholder.svg?height=320&width=320"
                        alt="Photo de profil"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-lg bg-white p-2 shadow-lg z-20">
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src="/placeholder.svg?height=80&width=80&text=Logo"
                          alt="Logo école"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animated shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-slate-400/10 to-slate-500/10 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-600"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <MousePointer className="h-6 w-6 mb-2" />
            <span className="text-sm font-mono">Scroll</span>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-sm font-mono mb-4 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">02.</span> Mes compétences
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Technologies <span className="text-primary">maîtrisées</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-blue-500/10 blur group-hover:blur-xl transition-all duration-300" />
                  <div className="relative h-40 rounded-lg border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-between overflow-hidden group-hover:border-primary/50 transition-all duration-300">
                    <div className={`w-12 h-1 ${skill.color} rounded-full`} />
                    <div>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center relative py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-sm font-mono mb-4 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">03.</span> Mes projets
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Mes <span className="text-primary">réalisations</span>
            </motion.h2>

            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full md:w-1/2 relative group">
                    <motion.div
                      className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${project.color} opacity-70 blur-lg group-hover:opacity-100 transition duration-300`}
                      whileHover={{ scale: 1.02 }}
                    />
                    <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 shadow-md">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-slate-900"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Démo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-slate-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-slate-300 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-sm font-mono mb-4 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">04.</span> Contact
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Travaillons <span className="text-primary">ensemble</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Envoyez-moi un message</h3>
                <p className="text-slate-600 mb-8">
                  Vous avez un projet ou une opportunité à me proposer ? N'hésitez pas à me contacter !
                </p>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block">
                      Nom
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="Votre nom"
                      />
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 group-focus-within:w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium block">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        placeholder="Votre message"
                      />
                    </div>
                  </div>

                  <Button className="w-full group relative overflow-hidden bg-primary hover:bg-primary/90 text-white">
                    <span className="relative z-10">Envoyer le message</span>
                    <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-all duration-300 group-hover:scale-100" />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-primary/10 to-blue-500/10 blur-xl" />
                <div className="relative rounded-lg border border-slate-200 bg-white shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Email</p>
                      <p className="font-medium">email@example.com</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 mb-1">Localisation</p>
                      <p className="font-medium">Caen, Normandie, France</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 mb-1">Disponibilité</p>
                      <p className="font-medium">Disponible pour des stages et alternances</p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-slate-500 mb-3">Retrouvez-moi sur</p>
                      <div className="flex gap-4">
                        <motion.a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </motion.a>
                        <motion.a
                          href="mailto:email@example.com"
                          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Mail className="h-5 w-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500">© {new Date().getFullYear()} Léo Sauvey. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
