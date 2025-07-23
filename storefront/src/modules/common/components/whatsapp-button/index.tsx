'use client'

import { useEffect, useState } from 'react'
import { Button } from '@medusajs/ui'
import { whatsappConfig } from '@lib/config/whatsapp'

const WhatsAppButton = () => {
  const [whatsappNumber, setWhatsappNumber] = useState(whatsappConfig.defaultNumber)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detect user's country code from URL or geolocation
    const detectCountry = async () => {
      try {
        // Get country code from URL path
        const pathSegments = window.location.pathname.split('/')
        const countryCode = pathSegments[1]?.toUpperCase() || 'US' // Default to US if not found
        
        // Use the configured number for the country, or fallback to default
        const number = whatsappConfig.numbers[countryCode as keyof typeof whatsappConfig.numbers] || 
                      whatsappConfig.defaultNumber
        
        setWhatsappNumber(number)
      } catch (error) {
        console.error('Error detecting country:', error)
        setWhatsappNumber(whatsappConfig.defaultNumber)
      }
      
      // Show the button after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }

    detectCountry()
  }, [])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappConfig.message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.492.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.465h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Button>
    </div>
  )
}

export default WhatsAppButton
