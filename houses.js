// Curated FINN.no family-house shortlist.
// Updated from live listing pages and broad Greater Stavanger search on 2026-09-01.
// Search coverage was broad but partial; stats are curated-card counts, not complete FINN inventory.

window.HOUSE_DATA = {
  meta: {
    scrapedAt: "2026-09-01T18:07:00+02:00",
    scrapedLabel: "1 Sep 2026, 18:07 CEST",
    source: "FINN.no live ads plus broker pages",
    methodology: "Broad manual reconnaissance across Stavanger, Sola, Randaberg and northern Sandnes/Hommersåk. House types only. Listing facts were checked on live ad pages; commute, gym fit and verdicts are analyst inference. FINN's accessible search was partial, so inventory totals are not claimed."
  },
  stats: {
    totalHouses: 7,
    stavangerHouses: 4,
    eiganesHouses: 0,
    valandHouses: 0,
    fitCount: 4,
    strongestScore: 79
  },
  houses: [
    {
      id: "per-spelemanns-29",
      address: "Per Spelemanns vei 29",
      area: "Ullandhaug, Stavanger",
      type: "Enebolig",
      ask: 10.9,
      total: 11.174,
      sqm: 217,
      plot: 721,
      beds: 4,
      year: 1960,
      status: "live",
      viewing: "3 Sep · 18:30–19:15",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=472523998",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/08/8/472/523/998_72ccd71c-7671-4e36-957c-a70ef3f6def3.jpg",
      verdict: "strong",
      flags: ["family", "garden", "gym", "forus"],
      scores: { family: 90, garden: 90, area: 92, risk: 70, forus: 100 },
      score: 79,
      facts: [
        "FINN verifies 4 bedrooms, 217 m² BRA-i, 721 m² owned plot and 1960 build",
        "Ad describes a mature private garden facing open recreational land, with greenhouse and several outdoor zones",
        "Multiple living areas and the lower-floor footprint make rack plus treadmill credible without deleting a bedroom (inference)",
        "Ordinary drive to Forus is roughly 8–15 minutes; local queues still matter (inference)"
      ],
      risks: [
        "No rental unit is advertised; no rental allowance assumed",
        "1960 shell plus extensions/alterations require a full permits, wet-room, drainage and electrical review",
        "At the upper owner-only range, renovation surprises would be particularly bureaucratic and expensive"
      ],
      take: "Best current functional/location fit. The garden is real rather than brochure shrubbery, and the 217 m² plan appears to preserve both family zones and training space. Verify two compliant bathrooms, all alterations and the actual lower-floor gym dimensions before upgrading this from reconnaissance to serious interest."
    },
    {
      id: "teineveien-28",
      address: "Teineveien 28",
      area: "Hommersåk, Sandnes",
      type: "Enebolig",
      ask: 6.99,
      total: 7.166,
      sqm: 294,
      plot: 689,
      beds: 5,
      year: 1983,
      status: "live",
      viewing: "2 Sep · 16:30–17:30",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474571071",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/26/1/474/571/071_f5f88ec0-3003-40c2-acec-d1cc7f5a2193.jpg",
      verdict: "strong",
      flags: ["family", "garden", "gym", "rental", "value"],
      scores: { family: 94, garden: 82, area: 50, risk: 62, forus: 55 },
      score: 76,
      facts: [
        "FINN verifies 294 m² BRA-i, 5 bedrooms in the description, 3 bathrooms, 2 living rooms and a 689 m² owned plot",
        "The ad explicitly states a godkjent utleiedel; advertised or achieved rent is not stated and must be verified",
        "Three floors, integrated garage and 334 m² total BRA leave credible dedicated gym volume (inference)",
        "Ordinary Forus drive is roughly 25–35 minutes and vulnerable to Rv13/Hove traffic (inference)"
      ],
      risks: [
        "Do not underwrite 15k/month until unit size, separation, demand and documentary approval are checked",
        "Vacancy, tenant wear, maintenance, tax treatment and the family-space sacrificed to the unit remain real costs",
        "Hommersåk commute friction is the price of the unusually strong space economics"
      ],
      take: "The value outlier: vast family volume, proper outdoor space and a verified approved rental unit for 7.17m total. Rent is deliberately not invented; obtain approvals, unit plan and comparable leases. If the commute survives an actual rush-hour test, the economics deserve attention."
    },
    {
      id: "myrvegen-20",
      address: "Myrvegen 20",
      area: "Tananger, Sola",
      type: "Enebolig",
      ask: 7.5,
      total: 7.689,
      sqm: 242,
      plot: 1206,
      beds: 7,
      year: 1968,
      status: "live",
      viewing: "No scheduled viewing shown · contact broker",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=473834353",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/22/3/473/834/353_51f6c87d-c482-419f-b2ae-e57228a8815f.jpg",
      verdict: "strong",
      flags: ["family", "garden", "gym", "value"],
      scores: { family: 95, garden: 98, area: 65, risk: 55, forus: 78 },
      score: 76,
      facts: [
        "FINN verifies 7 bedrooms, 242 m² BRA-i, 293 m² total BRA and a 1,206 m² owned plot",
        "The ad describes several living rooms and a large garage; family zoning and a dedicated gym are credible (inference)",
        "Large private plot is unusually strong for children and future optionality",
        "Ordinary Forus drive is roughly 15–25 minutes, with Tananger/Sømmevågen traffic variability (inference)"
      ],
      risks: [
        "1968 construction and the low price per square metre demand serious condition, drainage, roof, wet-room and electrical diligence",
        "Seven advertised bedrooms do not by themselves prove every room is legally approved for permanent residence",
        "No legal rental unit is advertised; do not infer one from spare rooms or floor separation"
      ],
      take: "A broad-search success: enormous family capacity and child-usable land at 7.69m total, with a practical rather than perfect Forus run. The price is attractive enough to make the technical report the whole case. Treat surplus bedrooms as family/gym flexibility, not rental income."
    },
    {
      id: "bruvikveien-48c",
      address: "Bruvikveien 48C",
      area: "Mariero, Stavanger",
      type: "Enebolig",
      ask: 10.9,
      total: 11.174,
      sqm: 157,
      plot: 465,
      beds: 4,
      year: 2022,
      status: "live",
      viewing: "8 Sep · 17:00–17:45",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474768680",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/28/0/474/768/680_e27cfecd-99d4-4228-a699-c141447dad35.jpg",
      verdict: "watch",
      flags: ["family", "garden", "forus", "low-maintenance"],
      scores: { family: 82, garden: 70, area: 78, risk: 82, forus: 100 },
      score: 72,
      facts: [
        "FINN verifies 4 bedrooms, 157 m² BRA-i, 465 m² owned plot and 2022 build",
        "Ad verifies a loft living room, screened sunny garden, garage and EV charger",
        "Modern shell lowers near-term maintenance risk relative to the 1960s candidates (inference)",
        "Ordinary Forus drive is roughly 8–15 minutes (inference)"
      ],
      risks: [
        "At 157 m² with exactly four bedrooms, rack plus treadmill may consume garage utility or weaken the second living zone",
        "No rental unit is advertised; no rental allowance assumed",
        "Confirm there are at least two full bathrooms rather than one bathroom plus WC"
      ],
      take: "The low-maintenance control case: good commute, four bedrooms, loftstue and a genuine private garden. The unresolved issue is not family fit but gym fit—the square metres are already assigned jobs. Measure the garage and verify the bathroom count."
    },
    {
      id: "randeberggeilen-41",
      address: "Randeberggeilen 41",
      area: "Randaberg",
      type: "Enebolig",
      ask: 7.0,
      total: 7.176,
      sqm: 166,
      plot: 1327,
      beds: 4,
      year: 1960,
      status: "live",
      viewing: "No scheduled viewing shown · contact broker",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=475199038",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/31/8/475/199/038_2a64fb5b-0402-4d0f-9d48-96e341f7064d.jpg",
      verdict: "trap",
      flags: ["family", "garden", "gym", "value", "risk"],
      scores: { family: 82, garden: 100, area: 55, risk: 20, forus: 45 },
      score: 64,
      facts: [
        "Broker verifies 4 bedrooms, 2 bathrooms, 2 living rooms, 166 m² BRA-i and a 1,327 m² owned plot",
        "Park-like private garden, greenhouse, pergola and double garage are exceptional at this price",
        "Kjeller rooms and garage provide credible gym space if moisture and approvals survive diligence (inference)",
        "Ordinary Forus drive is roughly 25–35 minutes and can worsen around E39 traffic (inference)"
      ],
      risks: [
        "Broker states the kjeller stue/kitchen and bathroom used as a hybel are not approved for that use; no rental flag or income assumed",
        "LNFR designation may restrict rebuilding, extensions and use changes",
        "Property is within a mapped landslide/possible quick-clay caution zone requiring geotechnical documentation for measures",
        "Modernisation need, planning deviations and defective garage doors make the low asking price less innocent than it first appears"
      ],
      take: "Wonderful garden, alarming footnotes. It works as a family house on paper, but the unapproved hybel, LNFR constraints and geotechnical caution make this a diligence trap rather than a rental bargain. Only pursue if the garden premium justifies paying professionals to disprove the risks."
    },
    {
      id: "ovrebo-25",
      address: "Øvrebø 25",
      area: "Hinna, Stavanger",
      type: "Enebolig",
      ask: 11.5,
      total: 11.79,
      sqm: 194,
      plot: 1043,
      beds: 4,
      year: null,
      status: "sold",
      viewing: "Sold · final price not visible",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=473511433",
      image: "",
      verdict: "sold",
      flags: ["family", "garden", "forus", "comp"],
      scores: { family: 85, garden: 95, area: 80, risk: 65, forus: 70 },
      score: 74,
      facts: [
        "FINN search marked the ad sold on 1 Sep 2026",
        "Search card recorded 11.5m asking, 194 m² BRA-i and 1,043 m² plot",
        "Useful recent south-Stavanger benchmark for a large family plot near the owner-only ceiling"
      ],
      risks: ["Final transaction price is not yet verified"],
      take: "Recent sold benchmark only. Keep until the achieved price is available; asking price is not a sale price (a distinction the property industry occasionally misplaces behind a fern)."
    },
    {
      id: "syrin",
      address: "Syrinveien 11",
      area: "Eiganes, Stavanger",
      type: "Enebolig",
      ask: 13.2,
      total: 13.54,
      sqm: 242,
      plot: 1016,
      beds: 5,
      year: 1936,
      status: "sold",
      viewing: "Permanent sold benchmark",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=377615749",
      image: "https://images.finncdn.no/dynamic/1280w/2024/10/vertical-2/14/9/377/615/749_4dc2a74d-e1d3-480e-992e-c00fa475185b.jpg",
      verdict: "sold",
      flags: ["family", "garden", "gym", "benchmark"],
      scores: { family: 96, garden: 94, area: 95, risk: 78, forus: 92 },
      score: 83,
      facts: [
        "Permanent benchmark retained by instruction",
        "Five-bedroom Eiganes family-house reference with large plot and strong zoning"
      ],
      risks: ["Historic listing is no longer live; figures are benchmark data, not a current offer"],
      take: "The permanent sold benchmark: close to the functional ideal, useful for judging what the preferred-area premium buys."
    }
  ]
};
