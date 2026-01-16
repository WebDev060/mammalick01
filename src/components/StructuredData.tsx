interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  logo: string
  contactPoint: {
    "@type": "ContactPoint"
    telephone: string
    contactType: string
    areaServed: string
    availableLanguage: string
  }
  address: {
    "@type": "PostalAddress"
    addressCountry: string
    addressRegion: string
  }
  sameAs: string[]
}

interface ProductSchema {
  "@context": "https://schema.org"
  "@type": "Product"
  name: string
  description: string
  brand: {
    "@type": "Brand"
    name: string
  }
  offers: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    availability: string
    seller: {
      "@type": "Organization"
      name: string
    }
  }
}

export function OrganizationJsonLd() {
  const organizationData: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PureLick",
    url: "https://purelick.vercel.app",
    logo: "https://purelick.vercel.app/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "USA"
    },
    sameAs: [
      "https://facebook.com/purelick",
      "https://twitter.com/purelick",
      "https://instagram.com/purelick"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}

export function ProductJsonLd({ product }: { product: { name: string; description: string; price: string } }) {
  const productData: ProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "PureLick"
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PureLick"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  )
}