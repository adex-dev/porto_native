interface ServicesProps{
    title?: string;
    description?: string;
}
export default function Services({title,description}: ServicesProps) {
  return (
    <article>
      <h3>{title  ?? ""}</h3>
    <p dangerouslySetInnerHTML={{ __html: description  ?? "" }} />
    </article>
  );
}
