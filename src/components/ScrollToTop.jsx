import "react";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const checkScrollPosition = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setShowButton(scrolled >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, []);

    const scrollToTop = () => {
        
            window.scrollTo({ top: 0, behavior: "smooth" });
        
    };
    

    return (
        showButton && (
            <button onClick={scrollToTop} className="scrollToTop">
                <HiArrowUp />
            </button>
        )
    );
};

export default ScrollToTop;