// function untuk screen studies

import HomeStudy from "../component/HomeStudi.tsx";
export default function CaseStudies() {
   return (
        <>
       <section aria-labelledby="casestudies-title">
            <h2 className="greeting" id="casestudies-title">
           Case Studies
            </h2>
        <p className="subtitle-short">
        Selected projects where I designed and built application systems
        to solve real business problems.
        <br />
        </p>
        <p>&nbsp;</p>
      </section>
            <section id="case-studies-screen">
                    <HomeStudy
                    title="POS System"
                    description="Web-based POS system with separated backend services for transaction
                    management and <strong>reporting</strong>."
                    link="/case-studies/pos"
                    stack="CodeIgniter,Flask,MySQL"
                    />
                    <HomeStudy
                    title="Mobile POS Application"
                    description="Android application used as a client app connected to backend APIs
                        for daily operations."
                    link="/case-studies/mobile-pos"
                    stack="Android,Kotlin,REST API"
                    />
            </section>
        </>
    );
}