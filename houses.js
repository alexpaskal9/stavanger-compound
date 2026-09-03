// Curated FINN.no family-house shortlist.
// Updated from live listing pages and broad Greater Stavanger search on 2026-09-03.
// Search coverage was broad but partial; stats are curated-card counts, not complete FINN inventory.

window.WAR_ROOM = {
  scrapedAt: "2026-09-03T18:05:32+02:00",
  scrapedLabel: "3 Sep 2026, 18:05 CEST",
  source: "FINN.no live ads plus broker pages",
  methodology: "Broad manual reconnaissance across Stavanger, Sola, Randaberg and northern Sandnes/Hommersåk. House types only. Listing facts were checked on live ad pages; commute, gym fit and verdicts are analyst inference. FINN's accessible search was partial, so inventory totals are not claimed.",
  stats: {
    totalHouses: 12,
    stavangerHouses: 4,
    eiganesHouses: 0,
    valandHouses: 0,
    fitCount: 6,
    strongestScore: 79
  },
  houses: [
    {
      id: "per-spelemanns-29",
      name: "Per Spelemanns vei 29",
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
      flags: ["family", "baths", "garden", "zones", "gym", "forus"],
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
      id: "rognestien-8",
      name: "Rognestien 8",
      area: "Skadberg, Sola",
      type: "Enebolig",
      ask: 10.9,
      total: 11.174,
      sqm: 296,
      plot: 412,
      beds: 5,
      year: 2008,
      status: "sold",
      viewing: "Sold · final price not visible",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474101266",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/22/6/474/101/266_21268005-0123-441d-9787-d4889e8ae304.jpg",
      verdict: "sold",
      flags: ["family", "baths", "garden", "gym", "forus"],
      scores: { family: 95, garden: 65, area: 72, risk: 78, forus: 95 },
      score: 75,
      facts: [
        "FINN verifies 5 bedrooms, 2 bathrooms, 296 m² BRA-i, 412 m² owned plot and 2008 build",
        "Ad describes three floors, a hagestue, two large terraces and the possibility of a sixth bedroom",
        "Triple garage plus two large storage rooms make a dedicated rack-and-treadmill zone credible without deleting family space (inference)",
        "Ordinary drive to Forus is roughly 8–15 minutes, with Sola/Forus peak traffic variability (inference)"
      ],
      risks: [
        "No rental unit is advertised; no rental allowance assumed",
        "The 412 m² plot is compact relative to the 296 m² house, so verify how much level, private child-usable lawn remains beyond terraces and hagestue",
        "Confirm the floor plan provides two proper indoor living zones; the headline and summary do not document them clearly"
      ],
      take: "Sold since the previous refresh. This remains a useful Skadberg comp for modern family volume and gym capacity at 11.17m advertised total; asking is not the achieved sale price."
    },
    {
      id: "teineveien-28",
      name: "Teineveien 28",
      area: "Hommersåk, Sandnes",
      type: "Enebolig",
      ask: 6.99,
      total: 7.166,
      sqm: 294,
      plot: 689,
      beds: 5,
      year: 1983,
      status: "sold",
      viewing: "Sold · final price not visible",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474571071",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/26/1/474/571/071_f5f88ec0-3003-40c2-acec-d1cc7f5a2193.jpg",
      verdict: "sold",
      flags: ["family", "baths", "garden", "zones", "gym", "rental", "value"],
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
      take: "Sold since the previous refresh. Retain briefly as the value/rental comp: 7.17m advertised total bought unusual space plus a verified approved unit, though achieved price and rent remain unverified."
    },
    {
      id: "myrvegen-20",
      name: "Myrvegen 20",
      area: "Tananger, Sola",
      type: "Enebolig",
      ask: 7.5,
      total: 7.689,
      sqm: 242,
      plot: 1206,
      beds: 7,
      year: 1968,
      status: "sold",
      viewing: "Sold · final price not visible",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=473834353",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/22/3/473/834/353_51f6c87d-c482-419f-b2ae-e57228a8815f.jpg",
      verdict: "sold",
      flags: ["family", "baths", "garden", "zones", "gym", "value"],
      scores: { family: 95, garden: 98, area: 65, risk: 55, forus: 78 },
      score: 76,
      facts: [
        "FINN marked the ad sold on 2 Sep 2026; final transaction price is not yet verified",
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
      take: "Now a sold comp: enormous family capacity and child-usable land was offered at 7.69m total, with a practical rather than perfect Forus run. Asking is not achieved price; retain briefly while the sale figure catches up with reality."
    },
    {
      id: "bruvikveien-48c",
      name: "Bruvikveien 48C",
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
      flags: ["family", "garden", "zones", "forus", "low-maintenance"],
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
      name: "Randeberggeilen 41",
      area: "Randaberg",
      type: "Enebolig",
      ask: 7.0,
      total: 7.176,
      sqm: 166,
      plot: 1327,
      beds: 4,
      year: 1960,
      status: "live",
      viewing: "7 Sep · 17:30–18:30",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=475199038",
      image: "https://images.finncdn.no/dynamic/1280w/2026/8/vertical-2/31/8/475/199/038_2a64fb5b-0402-4d0f-9d48-96e341f7064d.jpg",
      verdict: "trap",
      flags: ["family", "baths", "garden", "zones", "gym", "value", "risk"],
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
      name: "Øvrebø 25",
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
      id: "blokkebaervegen-13",
      name: "Blokkebærvegen 13",
      area: "Hålandsmarka, Ræge",
      type: "Enebolig",
      ask: 10.9,
      total: 11.174,
      sqm: 323,
      plot: 513,
      beds: 4,
      year: 2008,
      status: "live",
      viewing: "15 Sep · 17:00",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=472799031",
      image: "https://images.finncdn.no/dynamic/default/2026/8/vertical-2/10/1/472/799/031_28f56d51-4ce7-4fa1-ae79-7c6f9e0abdf4.jpg",
      verdict: "strong",
      flags: ["family", "baths", "garden", "zones", "gym", "forus"],
      scores: { family: 98, garden: 70, area: 55, risk: 85, forus: 95 },
      score: 76,
      facts: [
        "FINN verifies 4 bedrooms, 323 m² BRA-i, 513 m² owned plot and 2008 build",
        "The ad explicitly verifies 3 living rooms, 2 bathrooms, a cinema room and double garage",
        "Landscaped lawn and several terraces provide private child-usable outdoor space",
        "The broker states about 15 minutes to Forus; peak-hour variability still needs a real commute test"
      ],
      risks: [
        "Exactly four bedrooms leaves no spare legal bedroom, although the cinema or one of three living zones can absorb a gym without breaking the family plan",
        "No rental unit is advertised; no rental allowance assumed",
        "Ræge is farther from central Stavanger and school walking distance should be checked against the family's actual catchment"
      ],
      take: "Best new all-round fit. It meets the difficult parts of the brief explicitly—four bedrooms, three living zones, two baths, lawn, cinema and double garage—at 11.17m total. The location is not the benchmark, but the advertised 15-minute Forus run makes that a preference cost rather than a veto."
    },
    {
      id: "sandestubben-11",
      name: "Sandestubben 11",
      area: "Sande, Sola",
      type: "Enebolig",
      ask: 8.49,
      total: 8.698,
      sqm: 257,
      plot: 985,
      beds: 6,
      year: 1970,
      status: "live",
      viewing: "10 Sep · 18:00",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474749842",
      image: "https://images.finncdn.no/dynamic/default/2026/9/vertical-2/01/2/474/749/842_a45367f5-87c5-4349-88d0-038071ff9f31.jpg",
      verdict: "strong",
      flags: ["family", "baths", "garden", "zones", "gym", "value", "forus"],
      scores: { family: 92, garden: 95, area: 65, risk: 55, forus: 85 },
      score: 75,
      facts: [
        "FINN verifies 6 bedrooms, 257 m² BRA-i, 985 m² owned plot and 1970 build",
        "The ad describes a screened landscaped garden, several outdoor zones and a double garage",
        "The furnished basement contains two bedrooms, a living room/kitchen and a bathroom; this supplies a second living zone but is not advertised as an approved rental unit",
        "Sande-to-Forus is roughly 12–22 minutes in ordinary traffic (inference)"
      ],
      risks: [
        "No rental flag: verify basement approvals, escape routes and room legality before assigning either family or income value",
        "1970 construction requires drainage, wet-room, electrical, roof and alteration diligence",
        "A garage gym is credible, but confirm clear internal dimensions and whether vehicles can still be accommodated"
      ],
      take: "The new value leader for owner use: six bedrooms, two living levels, two baths, a near-1,000 m² plot and double garage at 8.70m total. Treat the basement as family space only until the municipality says otherwise; a kitchenette is not a planning decision, however earnestly it poses as one."
    },
    {
      id: "somakroken-33",
      name: "Somakroken 33",
      area: "Stangeland, Sandnes",
      type: "Enebolig",
      ask: 10.9,
      total: 11.174,
      sqm: 331,
      plot: 807,
      beds: 6,
      year: 1951,
      status: "live",
      viewing: "6 Sep · 13:30–14:30",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474512640",
      image: "https://images.finncdn.no/dynamic/default/2026/8/vertical-2/26/0/474/512/640_3c3a256e-866b-49a3-8339-ca13d53499cb.jpg",
      verdict: "watch",
      flags: ["family", "baths", "garden", "zones", "gym", "forus", "risk"],
      scores: { family: 96, garden: 85, area: 60, risk: 35, forus: 100 },
      score: 72,
      facts: [
        "FINN verifies 6 bedrooms, 331 m² BRA-i, 807 m² owned plot and 1951 build",
        "Three floors, several kitchens/living zones, multiple bathrooms and a 36 m² external store make family zoning and a dedicated gym physically easy",
        "The home was substantially modernised in 2021–2023 and has a large landscaped outdoor area",
        "Stangeland has a very practical Forus run, roughly 5–12 minutes in ordinary traffic (inference)"
      ],
      risks: [
        "The ad explicitly says the separate section currently rented out is not approved for permanent residence or rental; no rental flag or income assumed",
        "Other rooms and alterations refer readers to the completion-certificate section, so approvals require line-by-line municipal verification",
        "The 1951 shell and unusually complex current use raise condition, fire-separation, insurance and remediation risk"
      ],
      take: "Spectacular space and commute, but not clean economics. The house works superbly for a large family and gym if the approved main volume is as described; the separate rented section is explicitly illegal for that use, so the rent case is zero until regularised—not merely until someone finds a more optimistic spreadsheet."
    },
    {
      id: "lyngholen-84",
      name: "Lyngholen 84",
      area: "Bogafjell, Sandnes",
      type: "Enebolig",
      ask: 9.39,
      total: 9.626,
      sqm: 207,
      plot: 407,
      beds: 4,
      year: 2003,
      status: "live",
      viewing: "By appointment",
      url: "https://www.finn.no/realestate/homes/ad.html?finnkode=474664081",
      image: "https://images.finncdn.no/dynamic/default/2026/8/vertical-2/26/1/474/664/081_eb315328-8117-419a-a30e-bf9aadd0091a.jpg",
      verdict: "watch",
      flags: ["baths", "garden", "zones", "gym", "rental", "forus"],
      rentMonthly: 11000,
      scores: { family: 75, garden: 60, area: 45, risk: 75, forus: 90 },
      score: 69,
      facts: [
        "FINN verifies 4 bedrooms, 207 m² BRA-i, 407 m² owned plot and 2003 build",
        "The ad explicitly states a godkjent utleiedel earning NOK 11,000 per month",
        "Main house has living room plus loft living room and two bathrooms; a separate 38 m² garage gives credible gym capacity",
        "Bogafjell-to-Forus is roughly 10–20 minutes in ordinary traffic (inference)"
      ],
      risks: [
        "The fourth bedroom belongs to the rental unit: keeping NOK 11,000/month leaves only three owner bedrooms, below the family brief",
        "Advertised rent is below the NOK 15,000 target and must be tested against the lease, inclusions and current market",
        "Vacancy, tenant wear, maintenance, tax/legal compliance and loss of family space reduce the headline income value"
      ],
      take: "Verified rental, awkward family arithmetic. NOK 11k/month is real advertised income rather than wishful yield, but the main house has only three bedrooms while the unit is occupied. Good reconnaissance for rental economics; not a complete six-person-family fit unless space is reclaimed or legally reconfigured."
    },
    {
      id: "syrin",
      name: "Syrinveien 11",
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
      flags: ["family", "baths", "garden", "zones", "gym", "benchmark"],
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
