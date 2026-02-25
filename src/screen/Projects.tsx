import ProjectsPropsLayer from "../component/Projected.tsx";
export default function Projects() {
   return (
        <>
       <section aria-labelledby="projects-title">
            <h2 className="greeting" id="projects-title">
           Case Studies
            </h2>
        <p className="subtitle-short">
        Selected projects where I designed and built application systems
        to solve real business problems.
        <br />
        </p>
        <p>&nbsp;</p>
      </section>
            <section id="projects-screen">
                    <ProjectsPropsLayer
                    title="POS System"
                    description="Web-based POS system with separated backend services for transaction
                    management and <strong>reporting</strong>."
                    link="/porto_native/#/projects/pos"
                    stack="CodeIgniter,Flask,MySQL"
                    />
                    <ProjectsPropsLayer
                    title="Mobile POS Application"
                    description="Android application used as a client app connected to backend APIs
                        for daily operations."
                    link="/porto_native/#/projects/mobile-pos"
                    stack="Android,Kotlin,REST API"
                    />
            </section>
        </>
    );
}