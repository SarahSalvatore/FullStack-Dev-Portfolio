import { useInView } from "react-intersection-observer";

const Badge = ({ className, title }) => {
  const { ref, inView } = useInView();

  return (
    <span ref={ref} className={`${className} ${inView ? "fade-fast" : null}`}>
      {title}
    </span>
  );
};

export default Badge;
