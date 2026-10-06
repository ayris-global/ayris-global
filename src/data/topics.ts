// Topic hub definitions for ayrisglobal.in.
// One hub per cluster (see src/data/clusters.ts). The hub page at
// /topics/<slug>/ is generated from the blog collection, so a new post joins
// its hub automatically as soon as its slug matches a cluster rule.
//
// Copy rules: no statistics, no named buyers, suppliers or farms, no
// regulatory claims that are not already in the guides themselves.

export type Topic = {
  slug: string; // must equal a cluster slug in clusters.ts
  title: string; // hub H1 and navigation label
  short: string; // short label for chips and footer links
  metaTitle: string; // <title> (the layout appends " | Ayris Global")
  metaDescription: string;
  blurb: string; // one line used on cards across the site
  intro: string[]; // paragraphs; at least 150 words in total
  startHere: string[]; // post slugs pinned to the top of the hub
};

export const TOPICS: Topic[] = [
  {
    slug: 'lakadong-turmeric',
    title: 'Lakadong turmeric',
    short: 'Lakadong turmeric',
    metaTitle: 'Lakadong Turmeric Buyer Guides',
    metaDescription:
      'Buyer guides to Lakadong turmeric from Meghalaya: origin and GI tag, curcumin content, certifications, quality testing, pricing, logistics and market entry.',
    blurb: 'Origin, curcumin content, certifications, testing, pricing and market entry for Meghalaya turmeric.',
    intro: [
      "Lakadong turmeric comes from the West Jaintia Hills of Meghalaya and is known among buyers for a curcumin reputation well above that of commodity Indian turmeric. The guides in this topic treat that reputation carefully. They separate what is true of the variety from what a buyer should actually specify, test and contract for on a given shipment.",
      "The collection follows the buying decision in order. It starts with origin, the Geographical Indication tag and how Lakadong differs from regular Indian turmeric, then moves to certifications, quality specifications by market and a testing checklist. From there it covers the commercial side, including minimum order quantities, packaging and grade-linked pricing tiers, followed by transit and storage risk, batch traceability and recall readiness, and finally product forms such as powder, oleoresin and standardized extract.",
      "Several guides are written for importers in the UAE and wider GCC, and others for market entry in the EU, UK, USA, Japan, South Korea, Australia and Southeast Asia. If you are comparing Lakadong with other Indian origins, the topic on turmeric origins and trading structures covers that ground. When you are ready to discuss a specification or a quotation, the Ayris Global team can brief you directly.",
    ],
    startHere: [
      'lakadong-turmeric-origin-history-gi-tag-story',
      'lakadong-turmeric-vs-regular-indian-turmeric-difference',
      'lakadong-turmeric-curcumin-content-gcc-buyers',
    ],
  },
  {
    slug: 'turmeric-origins-and-trading-structures',
    title: 'Turmeric origins and trading structures',
    short: 'Turmeric origins',
    metaTitle: 'Indian Turmeric Origins and Trading Structures',
    metaDescription:
      'Compare Indian turmeric origins and how each one trades: curcumin grading, pricing benchmarks, harvest timing, audits, contracts and contaminant testing.',
    blurb: 'Erode, Salem, Nizamabad, Alleppey, Sangli and beyond: how origin and trading structure change what you buy.',
    intro: [
      "India grows turmeric in several distinct regions, and where a shipment originates changes more than the name on the label. Curcumin range, colour, the form in which the crop is sold, harvest timing and the way the crop physically reaches an exporter all differ between origins such as Erode, Salem, Nizamabad, Alleppey, Sangli and Lakadong.",
      "The guides in this topic compare origins side by side rather than describing any one in isolation. A recurring theme is trading structure. Turmeric moves to market through auction mandis in some origins and through direct-farm or cooperative channels in others, and that difference shapes audit priorities, quality agreement clauses, minimum order quantities, lead times, traceability and private-label readiness.",
      "Other guides cover the technical questions buyers ask before they commit: how curcumin grading tiers and percentage claims should be read, what adulteration and contaminant testing to require, how moisture and climate set transit risk, and how to read quotations for curcumin extract. Lakadong turmeric has its own dedicated topic. This one is the place to start if you are still deciding which origin and which trading structure suit your product.",
    ],
    startHere: [
      'turmeric-harvest-calendar-supply-continuity-by-origin',
      'turmeric-trading-structure-mandi-auction-vs-cooperative-sourcing',
      'turmeric-curcumin-extract-buyers-guide',
    ],
  },
  {
    slug: 'market-entry-by-region',
    title: 'Market entry by region',
    short: 'Market entry',
    metaTitle: 'Market Entry Guides by Region',
    metaDescription:
      'Region-by-region guides for Indian herbal ingredient suppliers and their buyers: EU, UK, USA, GCC, Australia and New Zealand, Japan, South Korea, Southeast Asia and Latin America.',
    blurb: 'Region-by-region guides to selling and importing Indian herbal ingredients, from the EU to the Gulf.',
    intro: [
      "A herbal ingredient that is straightforward to sell in one country can face a different regulator, a different definition and a different set of documents in the next. This topic collects the region-by-region guides for Indian herbal and botanical suppliers and for the international buyers who source from them.",
      "Regional guides cover the European Union, the United Kingdom, the USA, Australia and New Zealand, Japan, South Korea, Southeast Asia and Latin America. Each one looks at how the market treats herbal ingredients, how Indian origin interacts with trade agreements and tariffs, and what a supplier needs to have in place before a first order is realistic.",
      "The Gulf has the deepest coverage, with guides on the UAE market, the wider GCC regulators and import routes, the Saudi SFDA route, the India-UAE CEPA and Ramadan gifting. An overview of India's natural products export industry gives context for all of them. Use this topic to shortlist a destination, then follow the compliance, certifications and trade documents topic for the certificates and paperwork each route needs.",
    ],
    startHere: [
      'india-natural-products-export-industry-overview',
      'eu-market-entry-herbal-ingredients-guide',
      'usa-market-entry-herbal-ingredients-guide',
    ],
  },
  {
    slug: 'compliance-certifications-trade-documents',
    title: 'Compliance, certifications and trade documents',
    short: 'Compliance and documents',
    metaTitle: 'Compliance, Certifications and Trade Documents',
    metaDescription:
      'Guides to GMP, ISO, FSSAI, organic and halal certification, US and EU compliance, HS and HSN codes, and the export documents Indian herbal ingredients need.',
    blurb: 'Certifications, regulatory frameworks, HS and HSN codes and the paperwork behind each shipment.',
    intro: [
      "Documents decide whether a shipment of herbal ingredients clears customs, passes a buyer's quality review or gets held at the border. This topic brings together the guides on certifications, regulatory frameworks and the paperwork that travels with each consignment.",
      "On the certification side, it explains what GMP, ISO, FSSAI and organic certificates actually mean, how to check whether an Indian GMP certificate is genuine, what halal certification involves for the UAE and GCC, and how India's AYUSH framework fits into the picture. On the regulatory side it covers US FDA requirements, Prior Notice, New Dietary Ingredient notification and FSVP records, EU compliance, and how Great Britain and EU pesticide residue limits now differ.",
      "The trade documentation guides cover the export checklist, the Certificate of Analysis, safety data sheet and phytosanitary certificate set, and HS and HSN classification, including a lookup table for common ingredients. Each guide is written for a buyer or supplier who needs to know what to ask for, not for a lawyer, so confirm specific requirements with the relevant authority or your customs broker before you ship.",
    ],
    startHere: [
      'gmp-iso-fssai-organic-certification-india-herbal',
      'coa-msds-phytosanitary-certificates-herbal-imports',
      'export-documentation-checklist-herbal-ingredients-india',
    ],
  },
  {
    slug: 'sourcing-process-commercial-terms',
    title: 'Sourcing process and commercial terms',
    short: 'Sourcing and commercial terms',
    metaTitle: 'Sourcing Process and Commercial Terms',
    metaDescription:
      'How to source herbal ingredients from India: first orders, RFQs, MOQs, Incoterms, manufacturer or trader, sourcing models, private label and annual supply agreements.',
    blurb: 'First orders, RFQs, minimum quantities, Incoterms, sourcing models and private-label routes.',
    intro: [
      "Sourcing herbal ingredients from India is a sequence of practical decisions: who to buy from, how to ask for a quotation, what quantity to commit to and how to get goods from a factory to your warehouse. This topic follows that sequence.",
      "Early guides cover the first-order process and the complete buyer's guide, the difference between a manufacturer and a trader, and the choice between buying direct, through a sourcing agent or through a trading company. Next come the commercial building blocks: a request-for-quotation template, realistic minimum order quantities by product type, Incoterms and shipping logistics, and how trial shipments work in practice.",
      "Later guides look at moving from a trial order to an annual supply agreement, and at private-label and contract-manufacturing routes for Ayurvedic products, herbal tea and finished capsules. Supplier due diligence and quality agreements have their own topic, and the extracts, ingredients and pricing topic explains what drives the quotations you will receive.",
    ],
    startHere: [
      'how-to-source-herbal-ingredients-india-complete-guide',
      'sourcing-herbal-ingredients-india-first-order-guide',
      'manufacturer-vs-trader-india-herbal-ingredient',
    ],
  },
  {
    slug: 'quality-testing-traceability',
    title: 'Quality, testing and traceability',
    short: 'Quality and traceability',
    metaTitle: 'Supplier Quality, Testing and Traceability',
    metaDescription:
      'Guides to evaluating and auditing Indian herbal ingredient suppliers, the testing to require, quality agreements and supply chain traceability.',
    blurb: 'Supplier evaluation, audits, testing requirements, quality agreements and traceability.',
    intro: [
      "Quality problems in herbal ingredients usually start long before the container arrives, with an unclear specification, a certificate nobody checked or a supplier that could not trace its own raw material. This topic gathers the guides that help buyers prevent those problems.",
      "The first group is about choosing and qualifying suppliers: a practical evaluation framework, a step-by-step qualification and audit guide and a six-layer due diligence checklist. The second group is about testing. It covers which parameters to require, from pharmacopoeial standards to heavy metals, microbial counts and pesticide residues, and how to write them into a quality agreement that locks the specification and governs changes.",
      "The third group is about traceability. It explains why regulators in the EU and USA are tightening expectations and what lot-level records a buyer should be able to obtain. For origin-specific testing and traceability advice, see the Lakadong turmeric and turmeric origins topics. For the certificates a supplier should hold, see the compliance, certifications and trade documents topic.",
    ],
    startHere: [
      'how-to-evaluate-indian-herbal-ingredient-supplier',
      'qualify-audit-indian-ayurvedic-ingredient-supplier',
      'quality-testing-indian-herbal-ingredients-supplier',
    ],
  },
  {
    slug: 'extracts-ingredients-pricing',
    title: 'Extracts, ingredients and pricing',
    short: 'Extracts and pricing',
    metaTitle: 'Herbal Extracts, Ingredients and Pricing',
    metaDescription:
      'Ingredient guides for ashwagandha, shatavari, brahmi, boswellia, moringa and tulsi, plus extract versus powder and what drives herbal ingredient prices.',
    blurb: 'Ingredient guides, extract versus powder, and what drives the price of Indian botanicals.',
    intro: [
      "Buyers rarely source a botanical in the abstract. They source a specific part of a specific plant, in a specific form, at a specification and a price that both sides can check. This topic holds the guides that make those choices clearer.",
      "It contains the ingredient guides for ashwagandha, shatavari, brahmi, boswellia serrata, moringa and tulsi, covering varieties, extract specifications, certifications and what buyers should ask for. It also explains the difference between an herbal extract and a botanical powder, a choice that affects specification, cost, regulation and customs classification.",
      "Pricing is covered in two ways: a guide to how herbal ingredient prices are determined, including seasonality and other cost drivers, and a transparent look at what international buyers pay for ashwagandha extract. For turmeric and curcumin pricing, see the turmeric topics. The guides on US supplement brands and on ashwagandha export documentation connect the ingredient to its market route.",
    ],
    startHere: [
      'herbal-extract-vs-botanical-powder',
      'ashwagandha-extract-buyers-guide',
      'herbal-ingredient-pricing-cost-drivers-india-sourcing',
    ],
  },
];

export function topicBySlug(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicWordCount(t: Topic): number {
  return t.intro.join(' ').split(/\s+/).filter(Boolean).length;
}
