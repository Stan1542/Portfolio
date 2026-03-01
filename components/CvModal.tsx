"use client";

import { X, Download } from "lucide-react";

type CvModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CvModal({ open, onClose }: CvModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center">
      {/* Container */}
      <div className="relative w-[92vw] h-[92vh] max-w-5xl bg-black border border-neutral-700 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950">
          <span className="text-sm font-mono text-neutral-300">
            Stanley Mbhalati – Resume
          </span>

          <div className="flex items-center gap-3">
            <a
              href="/images/my_cv.pdf"
              download
              className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition"
            >
              <Download size={14} />
              Download PDF
            </a>

            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF */}
        <iframe
          src="/images/my_cv.pdf"
          className="w-full h-[calc(100%-48px)]"
        />
      </div>
    </div>
  );
}
