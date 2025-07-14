// import { Github } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Compra en el extranjero como si vivieras allá 
          </Heading>
          {/* <Heading
            level="h3"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Con Prontopack Pro accede a descuentos exclusivos y productos de tiendas como Sephora, Ulta, Target y más — sin pagar de más por envíos. 
          </Heading> */}
          <Text className="text-ui-fg-subtle text-lg">
            Con Prontopack Pro accede a descuentos exclusivos y productos de tiendas como Sephora, Ulta, Target y más — sin pagar de más por envíos. 
          </Text>
        </span>
              <LocalizedClientLink href="/store">
            <Button> 
              Shop Now
              </Button>
              </LocalizedClientLink>
        {/* <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Visit the tutorial
          </h1>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
