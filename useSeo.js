import { useEffect } from 'react';

/**
 * Custom hook to manage SEO meta tags for a page.
 * Sets document title, meta description, meta keywords, and canonical URL.
 *
 * @param {object} options - SEO options for the page.
 * @param {string} options.title - The title of the page.
 * @param {string} options.description - The meta description for the page.
 * @param {string} options.keywords - Comma-separated keywords for the page.
 * @param {string} options.canonicalUrl - The canonical URL for the page.
 */
const useSeo = ({ title, description, keywords, canonicalUrl }) => {
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

    // No cleanup needed for these tags as they will be overwritten by the next page's useSeo call.
    // If a tag is not set by a subsequent page, the default from index.html will persist.
  }, [title, description, keywords, canonicalUrl]);
};

export default useSeo;