import React from "react";
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";

function CarouselComponent() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const items = [
        {
            id: 0,
            src: "/assets/images/dogsToAdopt.jpg",
            altText: "Two dogs with bows waiting to be adopted",
        },
        {
            id: 1,
            src: "/assets/images/catsPlaying.jpg",
            altText: "Two cats playing on a cat shelf",
        },
        {
            id: 2,
            src: "/assets/images/takeMeHomeSign.jpg",
            altText: "A dog with a sign at it's feet that says take me home",
        },
        {
            id: 3,
            src: "/assets/images/dogBirthday.jpg",
            altText: "A dog wearing a birthday hat that says free on it",
        },
        {
            id: 4,
            src: "/assets/images/catsRelaxing.jpg",
            altText: "Two cats laying down",
        },
        {
            id: 5,
            src: "/assets/images/dogPlaying.jpg",
            altText: "A dog running with a soccer ball in it's mouth",
        },
    ];

    const itemLength = items.length - 1;

    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    className="d-block w-100"
                />
            </CarouselItem>
        );
    });

    return (
        <div className="col-md-8 mx-auto mt-5 mb-4">
            <Carousel
                previous={previousButton}
                next={nextButton}
                activeIndex={activeIndex}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }}
                />
                {carouselItemData}
                <CarouselControl
                    directionText="Previous"
                    direction="prev"
                    onClickHandler={previousButton}
                />
                <CarouselControl
                    directionText="Next"
                    direction="next"
                    onClickHandler={nextButton}
                />
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
