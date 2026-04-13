function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end justify-center pb-12 relative"
      style={{
        backgroundImage: `url(https://nezami.org/wp-content/uploads/2020/08/dark-review-arif-nezami.png)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      <div className="relative text-center">
        <h1 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-widest drop-shadow-lg">
          Dark
        </h1>
        <div className="h-1 w-16 bg-teal-400 mx-auto mt-2 rounded-full"></div>
      </div>
    </div>
  );
}

export default Banner;
