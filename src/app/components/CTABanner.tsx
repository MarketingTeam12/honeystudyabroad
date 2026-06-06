export function CTABanner() {
  return (
    <section className="py-20 bg-[#1A3A8F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-6 font-extrabold">
          Ready to Study Abroad?<br />Let's Get Started.
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Connect with our expert counselors and begin your international education journey today
        </p>
        <button
          onClick={() => {
            const event = new CustomEvent('openEnquiry');
            window.dispatchEvent(event);
          }}
          className="bg-[#F4C430] text-[#1C1C1C] px-10 py-4 rounded-lg hover:bg-[#1A73E8] hover:text-white transition-all shadow-xl text-lg font-semibold"
        >
          Send Enquiry
        </button>
      </div>
    </section>
  );
}
