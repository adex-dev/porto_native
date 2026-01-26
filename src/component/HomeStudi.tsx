interface HomestudyProps{
    title?: string;
    description?: string;
    link?: string;
    stack?: string;
}
export default function HomeStudy({title,description,link,stack}: HomestudyProps) {
  const techString = stack.split(',');
  return (
    <article className="case-study">
      <h3>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
    <div className="stack">
      {
        techString.map(items =>(
        <p className="badge">{items.trim()}</p>
            ))
            }
      
    </div>
      <div className="readmore">
        <a href={link} title="read more">
          View Case Study
        </a>
      </div>
    </article>
  );
}
