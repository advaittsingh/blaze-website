'use client'

import { useState } from 'react'

export default function PartyPackages() {
  const [activeLocation, setActiveLocation] = useState('dehradun')

  const locations = [
    { id: 'dehradun', name: 'MALL OF DEHRADUN' },
    { id: 'faridabad', name: 'MALL OF FARIDABAD' },
    { id: 'nsp', name: 'PACIFIC MALL, NSP' },
  ]

  const packages = [
    { price: '₹1500', attractions: '2 Attraction', duration: '60 Mins', games: 'unlimited Games' },
    { price: '₹2000', attractions: '4 Attraction', duration: '75 Mins', games: 'unlimited Games' },
    { price: '₹2500', attractions: '6 Attraction', duration: '90 Mins', games: 'unlimited Games' },
  ]

  return (
    <>
      {/* Location Tabs */}
      <div className="flex flex-wrap gap-6 mb-8">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => setActiveLocation(location.id)}
            className={`font-poppins text-sm uppercase tracking-wide transition-colors ${
              activeLocation === location.id
                ? 'text-white underline decoration-red-600 decoration-2 underline-offset-4'
                : 'text-white hover:text-red-600'
            }`}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="mb-6">
        <div className="border-t border-white/20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex items-center py-4 gap-8 ${
                index < packages.length - 1 ? 'border-b border-white/20' : ''
              } bg-blaaze-grey/30`}
            >
              <div className="text-2xl md:text-3xl font-nasalization text-red-600 flex-shrink-0 w-32">
                {pkg.price}
              </div>
              <div className="text-white text-sm font-poppins flex-shrink-0 w-40">
                {pkg.attractions}
              </div>
              <div className="text-red-600 text-sm font-poppins flex-shrink-0 w-6 text-center">
                +
              </div>
              <div className="text-white text-sm font-poppins">
                {pkg.duration} {pkg.games}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
