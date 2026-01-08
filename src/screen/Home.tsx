export default function Home() {
  return (
    <section aria-labelledby="home-title">
      <h2 className="greeting" id="home-title">Hi there!</h2>
      <p className="subtitlel-long">
        I’m Akmad Nudin, a software developer focused on building scalable
        backend and web systems. My work spans system design, API development,
        and application delivery for real-world use cases.<br/> Here you’ll find case
        studies, technical projects, and my professional background.
      </p>
      <p className="subtitle-short">
        I build web, backend, and Android applications with a strong focus on system reliability.
      </p>
       <div className="sosmedbox" aria-label="Social Media">
        <p>Find me on</p>
        <div className="sosmed-header"></div>
      </div>
    </section>
  );
}
