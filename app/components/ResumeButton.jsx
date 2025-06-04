'use client';
import { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function ResumeButton() {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowViewer(true)}
        className="hidden lg:flex items-center gap-3 px-10 py-2.5
        border border-gray-200 text-white rounded-full ml-4 font-ovo"
      >
        View Resume
        <Image src={assets.arrow_icon_dark} alt="" className="w-3" />
      </button>

      {showViewer && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full h-[90%] rounded-lg shadow-xl overflow-hidden flex flex-col">
            <div className="flex justify-between items-center px-4 py-2 bg-[#1e1e1e] text-gray-200 border-b border-gray-700">
              <span className="text-sm font-medium">JakeMResume2025Freelance.pdf</span>
              <div className="flex gap-2">
                <a
                  href="/JakeMResume2025Freelance.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 rounded-md hover:bg-[#333] transition"
                >
                  Download
                </a>
                <button
                  onClick={() => setShowViewer(false)}
                  className="text-sm px-3 py-1 rounded-md hover:bg-[#333] transition"
                >
                  Close
                </button>
              </div>
            </div>

            <iframe
              src="/JakeMResume2025Freelance.pdf"
              className="flex-1 w-full"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
}
