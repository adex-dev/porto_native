interface ExperienceProps{
    title?: string;
    period?: string;
    description?: string;
}
export default function ExperienceObject({title,period,description}: ExperienceProps) {
    return (
        <> 
         <section aria-label="list experience" className="main-experience">
            <div className="box-experience"  aria-labelledby={title  ?? ""}>
                <h2 className="title-experience" id={title  ?? "1"}>{title  ?? ""}</h2>
                <p className="period-experience">{period  ?? ""}</p>
            </div>
            <div className="description-experience" dangerouslySetInnerHTML={{ __html: description  ?? "" }}></div>
        </section>
        </>
    )
}