import React from 'react'

function StatsSection() {
  return (
    <div className="bg-gray-100 px-10 py-20 font-serif">
      <div className="grid grid-cols-4 gap-16">
        {/* Stat 1 */}
        <div className="text-center">
          <h3 className="text-8xl font-bold text-black mb-4">150+</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            ATHLETES REPRESENTED
          </p>
        </div>

        {/* Stat 2 */}
        <div className="text-center">
          <h3 className="text-8xl font-bold text-black mb-4">12</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            YEARS OF EXPERIENCE
          </p>
        </div>

        {/* Stat 3 */}
        <div className="text-center">
          <h3 className="text-8xl font-bold text-black mb-4">500+</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            CONTRACTS NEGOTIATED
          </p>
        </div>

        {/* Stat 4 */}
        <div className="text-center">
          <h3 className="text-8xl font-bold text-black mb-4">$2.5B</h3>
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            TOTAL CONTRACT VALUE
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsSection