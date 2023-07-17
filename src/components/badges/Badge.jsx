import { useInView } from "react-intersection-observer";

const Badge = ({ className, title }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <span
      ref={ref}
      className={`${className} ${inView ? "fade-fast" : null}`}
      style={{ visibility: inView ? "visible" : "hidden" }}
    >
      {title}
    </span>
  );
};

export default Badge;
