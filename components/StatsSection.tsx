import React from 'react'

function StatsSection() {
  return (
    <div className="bg-gray-100 px-4 sm:px-10 py-20 font-serif">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
        {/* Stat 1 */}
        <div className="text-center hover:scale-105 transition-transform duration-300 animate-fade-in">
          <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black mb-4">150+</h3>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium px-2">
            ATHLETES REPRESENTED
          </p>
        </div>

        {/* Stat 2 */}
        <div className="text-center hover:scale-105 transition-transform duration-300 animate-fade-in">
          <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black mb-4">12</h3>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium px-2">
            YEARS OF EXPERIENCE
          </p>
        </div>

        {/* Stat 3 */}
        <div className="text-center hover:scale-105 transition-transform duration-300 animate-fade-in">
          <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black mb-4">500+</h3>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium px-2">
            CONTRACTS NEGOTIATED
          </p>
        </div>

        {/* Stat 4 */}
        <div className="text-center hover:scale-105 transition-transform duration-300 animate-fade-in">
          <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black mb-4">$2.5B</h3>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium px-2">
            TOTAL CONTRACT VALUE
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsSection