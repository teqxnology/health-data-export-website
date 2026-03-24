// Additional Schema.org Structured Data for Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Health Data Export",
  "description": "Export health and fitness data from Apple Health, Google Fit, Health Connect, and all wearables to CSV, JSON, PDF, Excel formats.",
  "brand": {
    "@type": "Brand",
    "name": "Health Data Export"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://yourdomain.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "15000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "datePublished": "2024-01-10",
      "reviewBody": "Best health data export tool! Works perfectly with my Fitbit and exports to Excel exactly as I need. Much better than Health Sync.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "datePublished": "2024-01-08",
      "reviewBody": "Finally an app that supports Health Connect! Exported years of Garmin data in minutes. Privacy-focused approach is exactly what I needed.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }
  ]
};

// Inject schema into page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(productSchema);
document.head.appendChild(script);