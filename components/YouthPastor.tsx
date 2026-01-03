export default function YouthPastor() {
  return (
    <section className="relative w-full min-h-[30vh] overflow-hidden">
      {/* 3D Background decorative elements for content creation theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Camera/Lens elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }} />
        <div className="absolute top-32 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ transform: 'rotateX(-30deg) rotateY(-30deg)', animationDelay: '1s' }} />

        {/* Video editing timeline elements */}
        <div className="absolute bottom-20 left-20 w-80 h-32 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg blur-xl" style={{ transform: 'rotateX(20deg) rotateY(10deg)' }} />
        <div className="absolute bottom-40 right-32 w-60 h-24 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg blur-xl" style={{ transform: 'rotateX(-15deg) rotateY(-20deg)', animationDelay: '2s' }} />

        {/* Social media icons in 3D space */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-red-400/15 to-pink-500/15 rounded-full blur-lg animate-bounce" style={{ transform: 'translateZ(50px) rotateX(60deg)', animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-lg animate-bounce" style={{ transform: 'translateZ(30px) rotateX(-45deg)', animationDelay: '1.5s' }} />

        {/* Content creation tools floating */}
        <div className="absolute top-20 left-1/2 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-2xl" style={{ transform: 'translateZ(40px) rotateY(30deg)' }} />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-teal-400/10 to-green-500/10 rounded-full blur-2xl" style={{ transform: 'translateZ(60px) rotateX(25deg) rotateY(-15deg)', animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
              Your Church. Your Stories. Your Channel.
            </h2>
          </div>

          {/* Video Flexboxes */}
          <div className="flex justify-center items-start relative">
            <div className="max-w-lg relative z-10" style={{ boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', transform: 'perspective(1000px) rotateX(-5deg) rotateY(-5deg)', transformStyle: 'preserve-3d', transition: 'transform 0.3s ease' }}>
              <div className="rounded-lg overflow-hidden mb-6 relative group">
                <video
                  src="/videos/Hgbmi-1.m4v"
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-full h-96 object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none"></div>
              </div>
              <div className="text-center p-6">
                <p className="text-lg text-white leading-relaxed mb-3">
                  Witness the culmination of fervent prayer and prophetic revelation that characterized this remarkable church event, setting the stage for unprecedented spiritual manifestations.
                </p>
                <p className="text-lg text-white leading-relaxed mb-3">
                  Lives were forever changed as the Holy Spirit moved powerfully, bringing healing, deliverance, and a renewed sense of destiny to all who participated.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  "Miracle Arena was just the beginning—greater works and deeper encounters await our faithful community. please! dont miss the next time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}