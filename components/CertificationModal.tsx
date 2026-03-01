"use client";

import { X, ExternalLink } from "lucide-react";

type CertificationModalProps = {
  certification: any;
  onClose: () => void;
};

export default function CertificationModal({
  certification,
  onClose,
}: CertificationModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative w-full max-w-[1100px] bg-black border border-neutral-800 rounded-xl overflow-hidden max-h-[85vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
          <h2 className="text-white text-xl font-semibold">
            {certification.title}
          </h2>
          <button onClick={onClose}>
            <X className="text-neutral-400 hover:text-white" />
          </button>
        </div>

        {/* Image */}
        <div className="p-6">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full rounded-lg border border-neutral-800"
          />
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3 gap-8 px-6 pb-8">
          {/* Left */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-semibold mb-3">Overview</h3>
            <p className="text-neutral-400 leading-relaxed text-xm">
              {certification.overview}
            </p>

            <h3 className="text-white text-2xl font-semibold mt-8 mb-3">
              Skills Earned
            </h3>

            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="text-xm border border-neutral-700 px-3 py-1 rounded-full text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-lg p-4">
              <p className="text-xm text-neutral-500 uppercase">Issuer</p>
              <p className="text-white text-xm mt-1">{certification.issuer}</p>

              <p className="text-xm text-neutral-500 uppercase mt-4">Date</p>
              <p className="text-white text-xm mt-1">{certification.year}</p>
            </div>

            <a
              href={certification.verifyUrl}
              target="_blank"
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              <ExternalLink size={16} />
              Verify Credential
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
