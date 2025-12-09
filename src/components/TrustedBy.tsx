'use client';

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <h3 className="text-lg font-semibold text-[#1a365d] uppercase tracking-wider">
            Trusted by
          </h3>
          <div className="flex items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder logos - in production, replace with actual client logos */}
            <div className="text-2xl font-bold text-gray-400 font-serif">ACME Corp</div>
            <div className="text-2xl font-bold text-gray-400 font-serif">GlobalTech</div>
            <div className="text-2xl font-bold text-gray-400 font-serif hidden sm:block">TradeWise</div>
            <div className="text-2xl font-bold text-gray-400 font-serif hidden md:block">ImportPro</div>
          </div>
        </div>
      </div>
    </section>
  );
}

