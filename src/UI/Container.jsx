const Container = ({ children, className }) => {
  return (
    <section
      className={`md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto py-9 z-40 ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
