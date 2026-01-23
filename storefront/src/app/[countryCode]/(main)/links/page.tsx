'use client'

import { Text } from '@medusajs/ui'
import Logo from '@modules/layout/components/logo'
import LocalizedClientLink from '@modules/common/components/localized-client-link'

const LinksPage = () => {
  // WhatsApp numbers from environment variables
  const whatsappColombia = process.env.NEXT_PUBLIC_WHATSAPP_CO || '573001234567'
  const whatsappArgentina = process.env.NEXT_PUBLIC_WHATSAPP_AR || '5491101234567'

  const links = [
    {
      title: 'WhatsApp Colombia',
      url: `https://wa.me/${whatsappColombia}`,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      title: 'WhatsApp Argentina',
      url: `https://wa.me/${whatsappArgentina}`,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ]

  return (
    <div className="min-h-screen bg-ui-bg-base flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex justify-center">
            <Logo />
          </div>
        </div>

        {/* Links */}
        <div className="w-full max-w-md space-y-4">
          {links.map((link, index) => (
            <LocalizedClientLink
              key={index}
              href={link.url}
              target={link.target}
              rel={link.rel}
              className="block w-full"
            >
              <div className="w-full px-6 py-4 bg-ui-bg-subtle border border-ui-border-base rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-ui-bg-subtle-hover active:bg-ui-bg-highlight flex items-center justify-center">
                <Text className="text-ui-fg-base text-lg font-medium">
                  {link.title}
                </Text>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinksPage