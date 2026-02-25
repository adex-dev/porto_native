import Twitter from "../assets/icon/twitter.svg?react";
import Github from "../assets/icon/github.svg?react";
import Instagram from "../assets/icon/instagram.svg?react";
import HomeStudy from "../component/HomeStudi.tsx";
import Services from "../component/Services.tsx";
export default function Home() {
  return (
    <>
      <section aria-labelledby="home-title">
        <h2 className="greeting" id="home-title">
          Hi there!
        </h2>
        <p className="subtitlel-long">
          I’m Akmad Nudin, a software developer focused on building scalable
          backend and web systems. My work spans system design, API development,
          and application delivery for real-world use cases.
          <br /> Here you’ll find case studies, technical projects, and my
          professional background.
        </p>
        <p className="subtitle-short">
          I build web, backend, and Android applications with a strong focus on
          system reliability.
        </p>
        <div className="sosmedbox" aria-label="Social Media">
          <p>Find me on</p>
          <div className="sosmed-header">
            <Twitter />
            <Github />
            <Instagram />
          </div>
        </div>
      </section>
      <section id="case-studies">
        <h2 className="title">Case Studies</h2>
        <p className="headline">
          End-to-end projects focused on real-world use cases.
        </p>
        <HomeStudy
          title="POS System"
          description="Web-based POS system with separated backend services for transaction
        management and <strong>reporting</strong>."
          link="/porto_native/case-studies/pos"
          stack="CodeIgniter,Flask,MySQL"
        />
        <HomeStudy
          title="Mobile POS Application"
          description="Android application used as a client app connected to backend APIs
            for daily operations."
          link="/porto_native/case-studies/mobile-pos"
          stack="Android,Kotlin,REST API"
        />
      </section>
      <section id="services">
        <header>
          <h2 className="title">What I Do</h2>
        </header>
        <div className="service-list">
          <Services
            title="Web Applications"
            description="Business systems, admin dashboards, and internal tools."
          />
          <Services
            title="Backend & APIs"
            description="REST APIs, data processing, and system integration."
          />
          <Services
            title="Android Applications"
            description="Operational and client-facing Android apps."
          />
        </div>
      </section>
      <section id="process">
        <header>
          <h2 className="title">How I Work</h2>
        </header>
        <ol className="process-list">
          <li>Understand the business problem and workflow</li>
          <li>Design system architecture and API contracts</li>
          <li>Build, test, and iterate</li>
          <li>Deliver and provide support</li>
        </ol>
      </section>
      <section id="experience">
        <h2 className="title">Professional Experience</h2>
        <ul className="experience-list">
          <li>
            <a href="#">
              <strong>Company A</strong> — Programmer (2 years) {'->'}
            </a>
          </li>
        </ul>
      </section>
      <section id="tech-stack">
        <header>
          <h2 className="title">Tech Stack</h2>
        </header>
        <ul className="techstack-list">
          <li>
            <strong>Backend:</strong> Java (current focus), Python / Flask
          </li>
          <li>
            <strong>Web:</strong> CodeIgniter, HTML, CSS
          </li>
          <li>
            <strong>Mobile:</strong> Android (Kotlin, Jetpack Compose)
          </li>
          <li>
            <strong>Database:</strong> MySQL, PostgreSQL
          </li>
        </ul>
      </section>
      <section id="contact">
        <header>
          <h2 className="title">Let’s Work Together</h2>
          <p>Looking to build or improve a system? Let’s discuss your project.</p>
        </header>
         <a href="mailto:youremail@example.com" className="btn-primary">Get in Touch</a>
      </section>
    </>
  );
}
