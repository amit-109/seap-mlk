import { useState } from "react";
import { Image, X } from "lucide-react";

export default function ReferenceGallery({ title = "Portal reference screenshots", images = [] }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section className="reference-panel" aria-labelledby="reference-gallery-title">
        <div className="reference-panel__icon"><Image size={23} aria-hidden="true" /></div>
        <div className="reference-panel__copy">
          <span className="eyebrow">SUPPLIED PORTAL SCREENSHOTS</span>
          <h3 id="reference-gallery-title">{title}</h3>
          <p>Reference images are provided for orientation. Portal screens and workflows may change over time.</p>
        </div>
        {images[0] && <button className="btn btn-outline-custom" onClick={() => setActiveImage(images[0])} type="button">
          Preview screenshots
        </button>
        }
      </section>
      {images.length > 0 && (
        <div className="reference-gallery" aria-label={title}>
          {images.map((image) => (
            <button type="button" className="reference-thumb" key={image.src} onClick={() => setActiveImage(image)} aria-label={`Preview: ${image.caption}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.caption}</span>
            </button>
          ))}
        </div>
      )}
      {activeImage && (
        <div className="modal-backdrop-custom" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveImage(null);
        }}>
          <section className="reference-modal reference-modal--image" role="dialog" aria-modal="true" aria-labelledby="reference-modal-title">
            <button type="button" className="icon-button modal-close" onClick={() => setActiveImage(null)} aria-label="Close screenshot preview">
              <X size={20} />
            </button>
            <h2 id="reference-modal-title">{activeImage.caption}</h2>
            <img className="reference-modal__image" src={activeImage.src} alt={activeImage.alt} />
          </section>
        </div>
      )}
    </>
  );
}
