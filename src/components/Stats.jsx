const Stats = () => {
  return (
    <section className="py-16 bg-[#f97316] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-orange-400">
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-2">500+</h3>
            <p className="text-orange-100 font-bold tracking-wide uppercase text-sm">Happy Adoptions</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-2">150+</h3>
            <p className="text-orange-100 font-bold tracking-wide uppercase text-sm">Pets Available</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-2">50+</h3>
            <p className="text-orange-100 font-bold tracking-wide uppercase text-sm">Partner Shelters</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-2">24/7</h3>
            <p className="text-orange-100 font-bold tracking-wide uppercase text-sm">Community Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;