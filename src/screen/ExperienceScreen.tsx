import ExperienceObject from "../component/ExperienceObject.tsx";
export default function ExperienceScreen(){
    return (
        <>
        <section aria-labelledby="experience-title">
            <h1 className="greeting" id="experience-title">
           Experiences
            </h1>
        <p className="subtitle-short">
        Selected projects where I designed and built application systems
        to solve real business problems.
        <br />
        </p>
        <p>&nbsp;</p>
        </section>
        <ExperienceObject title="PT Hidup Tenang Sentosa" period="2022 - 2024" description="<p>Tenang banget bang</p>"/>
        </>
    )
}