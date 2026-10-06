// Topic clusters for ayrisglobal.in blog posts.
// Used by the Related Articles logic (src/pages/blog/[slug].astro) and,
// from the next phase, by the topic hub pages.
// A post's cluster is derived from its slug: the FIRST matching rule wins.
// Posts that match no rule fall into FALLBACK_CLUSTER.

export type Cluster = {
  slug: string;
  title: string;
};

// Display order of clusters.
export const CLUSTERS: Cluster[] = [
  { slug: 'lakadong-turmeric', title: 'Lakadong turmeric' },
  { slug: 'turmeric-origins-and-trading-structures', title: 'Turmeric origins and trading structures' },
  { slug: 'market-entry-by-region', title: 'Market entry by region' },
  { slug: 'compliance-certifications-trade-documents', title: 'Compliance, certifications and trade documents' },
  { slug: 'sourcing-process-commercial-terms', title: 'Sourcing process and commercial terms' },
  { slug: 'quality-testing-traceability', title: 'Quality, testing and traceability' },
  { slug: 'extracts-ingredients-pricing', title: 'Extracts, ingredients and pricing' },
];

export const FALLBACK_CLUSTER = 'extracts-ingredients-pricing';

// Priority-ordered slug rules. First match wins.
const RULES: Array<{ cluster: string; test: RegExp }> = [
  { cluster: 'lakadong-turmeric', test: /lakadong/ },
  { cluster: 'turmeric-origins-and-trading-structures', test: /turmeric|curcumin/ },
  { cluster: 'compliance-certifications-trade-documents', test: /hs-code|hsn-code|export-documentation|coa-msds|phytosanitary/ },
  { cluster: 'market-entry-by-region', test: /market-entry|-market-|market-opportunity|market-regulators|saudi|uk-post-brexit|cepa|south-korea|japan|ramadan|industry-overview/ },
  { cluster: 'compliance-certifications-trade-documents', test: /certif|gmp|fssai|halal|ayush|fda|ndi-|fsvp|regulatory|pesticide|dshea/ },
  { cluster: 'quality-testing-traceability', test: /quality|traceab|audit|due-diligence|evaluate|qualify|verify/ },
  { cluster: 'sourcing-process-commercial-terms', test: /rfq|moq|incoterms|manufacturer-vs-trader|direct-import|sample-shipment|scaling|how-to-source|sourcing-herbal|private-label|contract-manufacturing|capsule/ },
  { cluster: 'extracts-ingredients-pricing', test: /ashwagandha|boswellia|moringa|shatavari|tulsi|adaptogens|extract|pricing|powder|ingredient/ },
];

export function clusterOf(slug: string): string {
  for (const r of RULES) {
    if (r.test.test(slug)) return r.cluster;
  }
  return FALLBACK_CLUSTER;
}
