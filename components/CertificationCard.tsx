type CertificationCardProps = {
  certification: any;
  onClick: () => void;
};

export default function CertificationCard({
  certification,
  onClick,
}: CertificationCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950/50 transition hover:border-neutral-600"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-[500px] object-cotain grayscale group-hover:grayscale-0 transition duration-500"
        />

        {/* Year badge */}
        <span className="absolute top-4 right-4 text-xs bg-black/80 border border-neutral-700 px-3 py-1 rounded-full text-white">
          {certification.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs text-neutral-500 uppercase tracking-wider">
          {certification.issuer}
        </p>

        <h3 className="text-lg font-semibold text-white mt-2">
          {certification.title}
        </h3>

        <p className="text-sm text-neutral-400 mt-3 flex items-center gap-2">
          View Details →
        </p>
      </div>
    </div>
  );
}
