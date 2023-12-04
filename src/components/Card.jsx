function Card([source, title]) {
  //state (état ou données)

  // comportements

  //affichage (render)
  return (
    <article>
      <img src={source} alt={title + " desription"} />
      <div>
        <p>{title}</p>
      </div>
    </article>
  );
}

export default Card;
