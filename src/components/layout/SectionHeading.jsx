import { useInView } from "react-intersection-observer";

const SectionHeading = ({ title }) => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <h1 className={`section-heading-font ${inView ? "fade-down" : null}`}>
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;
