import "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import ScrollToTop from "../components/ScrollToTop";
import Empty from "../components/Empty";
import refresh from "pulltorefreshjs";
import "../styles.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  useEffect(() => {
    refresh.init({
      mainElement: "body",
      onRefresh: () => window.location.reload(),
      instructionsPullToRefresh: "↓ Pull to refresh",
      instructionsReleaseToRefresh: "↻ Release to refresh",
      instructionsRefreshing: "⏳ Refreshing...",
      iconArrow: "⬇️",
      iconRefreshing: "⏳",
    });

    return () => refresh.destroyAll(); // Cleanup on unmount
  }, []);

  return (
    <>
      <Element name="section1">
        <Section1 />
      </Element>
      <Element name="section2">
        <Empty />
        <Section2 />
      </Element>
      <Element name="section3">
        <Empty />
        <Section3 />
      </Element>
      <Element name="section4">
        <Empty />
        <Section4 />
      </Element>
      <Element name="section5">
        <Empty />
        <Section5 />
      </Element>
      <Element name="section6">
        <Empty />
        <Section6 />
      </Element>
      <ScrollToTop />
    </>
  );
};

export default Home;
