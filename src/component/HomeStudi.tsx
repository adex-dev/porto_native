interface HomestudyProps{
    title?: string;
    description?: string;
    link?: string;
    stack?: string;
}
export default function HomeStudy({title,description,link,stack}: HomestudyProps) {
  return (
    <article className="case-study">
      <h3>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
      <p className="stack">{stack}</p>
      <div className="readmore">
        <a href={link} title="read more">
          View Case Study
        </a>
      </div>
    </article>
  );
}
