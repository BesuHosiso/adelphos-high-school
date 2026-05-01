import { useEffect } from 'react';

/**
 * Custom hook to manage SEO meta tags for a page.
 * Sets document title, meta description, meta keywords, canonical URL,
 * and optional JSON-LD structured data.
 *
 * @param {object} options - SEO options for the page.
 * @param {string} options.title - The title of the page.
 * @param {string} options.description - The meta description for the page.
 * @param {string} options.keywords - Comma-separated keywords for the page.
 * @param {string} options.canonicalUrl - The canonical URL for the page.
 * @param {object|object[]} [options.structuredData] - JSON-LD object or array.
 */
const useSeo = ({ title, description, keywords, canonicalUrl, structuredData }) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Optional JSON-LD structured data
    if (structuredData) {
      const scriptId = 'seo-structured-data';
      let jsonLdScript = document.getElementById(scriptId);
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.type = 'application/ld+json';
        jsonLdScript.id = scriptId;
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, structuredData]);
};

export default useSeo;