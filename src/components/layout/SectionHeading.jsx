import { useInView } from "react-intersection-observer";

const SectionHeading = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className="section-head"
      ref={ref}
      style={{ visibility: inView ? "visible" : "hidden" }}
    >
      <h1 className={`section-heading-font ${inView ? "fade-down" : null}`}>
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
