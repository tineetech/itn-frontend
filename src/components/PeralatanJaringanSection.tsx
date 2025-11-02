import React from 'react';
import { Download, File, TargetIcon, GitGraphIcon } from 'lucide-react';

export default function PeralatanJaringanSection() {
  const documents = [
    {
      id: 1,
      title: "Looking Glass",
      text: "lorem iorem ipsum doler sit amet",
      icon: TargetIcon,
      color: "from-[#002747] to-blue-950"
    },
    {
      id: 2,
      title: "Multi Router Traffic Grapher",
      text: "lorem iorem ipsum doler sit amet",
      icon: GitGraphIcon,
      color: "from-[#002747] to-blue-950"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-8xl mx-auto">

        {/* Document Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Header with Icon */}
              <div className={`bg-gradient-to-br ${doc.color} p-6 relative overflow-hidden`}>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <doc.icon className="w-8 h-8 text-green-600" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-green-600 font-semibold text-base line-clamp-2 min-h-[2rem]">
                  {doc.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* File Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <File className="w-4 h-4" />
                    <span>{doc.text}</span>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full py-2.5 px-4 bg-white border-2 border-blue-500 text-blue-600 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn rounded-br-4xl rounded-tl-4xl">
                  <span>Download</span>
                  <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}