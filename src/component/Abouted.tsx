interface AboutProps{
    Title:string
    ShortDescription:string
}

export default function AboutComponent({Title,ShortDescription}:AboutProps) {
    return (
        <>
        <h1>{Title}</h1>
        <p dangerouslySetInnerHTML={{__html:ShortDescription}}></p>
       </>
    )
}