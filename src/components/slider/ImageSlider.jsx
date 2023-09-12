import React, { useCallback, useEffect, useState } from 'react'
import { DotButton, NextButton, PrevButton } from './SliderButtons';
import { mediaByIndex } from '../../utils/data';
import useEmblaCarousel from 'embla-carousel-react';

/**
 * ImageSlider Component
 *
 * The ImageSlider component displays a carousel of images with a parallax effect.
 *
 * @param {number} parallax_factor - The intensity of the parallax effect applied to the images.
 * @param {number} slideCount - The number of slides (images) to display in the carousel.
 */

const ImageSlider = ({ parallax_factor, slideCount }) => {

    // Embla Carousel hooks
    const [viewportRef, embla] = useEmblaCarousel({
        loop: false,
        dragFree: true
    });


    // Array of slide indices
    const slides = Array.from(Array(slideCount).keys());
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [parallaxValues, setParallaxValues] = useState([]);



    //  Callback to handle slide selection.
    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);



    //  Function to scroll to the previous slide,next slide
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);


    // Function to scroll to a specific slide by index
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);



    //   Callback to update parallax effect values based on scroll position.
    const onScroll = useCallback(() => {
        if (!embla) return;

        const engine = embla.internalEngine();
        const scrollProgress = embla.scrollProgress();

        const styles = embla.scrollSnapList().map((scrollSnap, index) => {
            if (!embla.slidesInView().includes(index)) return 0;
            let diffToTarget = scrollSnap - scrollProgress;

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.getTarget();
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target);
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                    }
                });
            }
            return diffToTarget * (-1 / parallax_factor) * 100;
        });
        setParallaxValues(styles);
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setParallaxValues]);



    // Effect to set up Embla Carousel and event listeners
    useEffect(() => {
        if (!embla) return;
        onSelect();
        onScroll();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
        embla.on("scroll", onScroll);
        embla.on("resize", onScroll);
        setScrollSnaps(embla.scrollSnapList());
    }, [embla, onSelect, setScrollSnaps, onScroll]);

    return (
        <>
            <div className="embla mt-12">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {/* Render slides with parallax effect */}
                        {slides.map((index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__inner">
                                    <div
                                        className="embla__slide__parallax"
                                        style={{ transform: `translateX(${parallaxValues[index]}%)` }}
                                    >
                                        <img
                                            className="embla__slide__img"
                                            src={mediaByIndex(index)}
                                            alt="Beautiful slider"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous and Next navigation buttons */}
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>


            {/* Slide navigation dots */}
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </>

    )
}

export default ImageSlider