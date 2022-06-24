export default function Section({ data }) {
  const { subTitle, title, description, btn } = data;
  return (
    <div className="section">
      <div className="container">
        <div className="section__wrap">
          <div className="section__content">
            <span className="section__span">{subTitle}</span>
            <h2 className="section__title">{title}</h2>
            <p className="section__description">{description}</p>
            <a className="section__btn" href={btn.url}>
              {btn.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
