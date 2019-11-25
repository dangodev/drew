import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.css';

const CaseStudy = ({ children, images, link, role, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={style.casestudy}>
      <div className={style.images}>
        {images.map((image, i) => (
          <div
            className={selectedImage === i ? style.selectedimage : style.image}
            key={`image-${i}`}
            onClick={() => setSelectedImage(i)}
            style={{
              backgroundImage: `url(${image})`,
              right: `${((i + 1) % 2) * 16.2037}%`,
              top: `${Math.floor(i / 2) * 33.3333}%`,
            }}
          />
        ))}
      </div>
      <div className={style.inner}>
        <h1 className={style.title}>{title}</h1>
        <h3 className={style.role}>{role}</h3>
        <div className={style.text}>{children}</div>
        {link && (
          <a className={style.link} href={link} target="_blank">
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
