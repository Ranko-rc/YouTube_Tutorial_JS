import "./styles.css";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchImages() {
            setLoading(true);
            setError(null);

            try {
                const separator = url.includes("?") ? "&" : "?";
                const response = await fetch(
                    `${url}${separator}page=${page}&limit=${limit}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error("The image response is not a list.");
                }

                setImages(data);
                setCurrentSlide(0);
            } catch (fetchError) {
                if (fetchError.name !== "AbortError") {
                    setError(fetchError);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchImages();
        return () => controller.abort();
    }, [url, page, limit]);

    if (loading) {
        return <div className="image-slider__status" role="status">Loading images...</div>;
    }

    if (error) {
        return <div className="image-slider__status" role="alert">Error: {error.message}</div>;
    }

    if (images.length === 0) {
        return <div className="image-slider__status">No images found.</div>;
    }

    const image = images[currentSlide];

    return (
        <section className="image-slider" aria-label="Image slider">
            <h1>Image Slider</h1>
            <div className="image-slider__content">
                <button
                    className="image-slider__button"
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setCurrentSlide((currentSlide - 1 + images.length) % images.length)}
                >
                    <FaArrowLeft aria-hidden="true" />
                </button>
                <img
                    className="image-slider__image"
                    src={image.download_url}
                    alt={image.author || `Image ${currentSlide + 1}`}
                />
                <button
                    className="image-slider__button"
                    type="button"
                    aria-label="Next image"
                    onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
                >
                    <FaArrowRight aria-hidden="true" />
                </button>
            </div>

            <nav className="image-slider__indicators" aria-label="Slide indicators">
                {images.map((slide, index) => (
                    <button
                        key={slide.id ?? index}
                        className={`image-slider__indicator${index === currentSlide ? " is-active" : ""}`}
                        type="button"
                        aria-label={`Show image ${index + 1}`}
                        aria-current={index === currentSlide ? "true" : undefined}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </nav>

            <p className="image-slider__counter">{currentSlide + 1} / {images.length}</p>
        </section>
    );
}