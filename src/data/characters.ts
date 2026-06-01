import type { Character } from '../types';

export const CHARACTERS: Character[] = [
  // ── KAHNWALD ──────────────────────────────────────────────────────────────
  {
    id: 'jonas-young',
    name: 'Jonas Kahnwald',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'The protagonist. After his father\'s suicide he discovers a wormhole in the caves and is pulled into a time loop. His future selves become The Stranger and ultimately the scarred elder Adam.',
    appearances: [
      { timePeriod: 2019, actorName: 'Louis Hofmann', ageGroup: 'teen', photoUrl: '/images/characters/jonas-young.png' },
      { timePeriod: 2020, actorName: 'Louis Hofmann', ageGroup: 'teen', photoUrl: '/images/characters/jonas-young.png' },
      { timePeriod: 1987, actorName: 'Louis Hofmann', ageGroup: 'teen', photoUrl: '/images/characters/jonas-young.png' },
      { timePeriod: 1954, actorName: 'Louis Hofmann', ageGroup: 'teen', photoUrl: '/images/characters/jonas-young.png' },
    ],
  },
  {
    id: 'jonas-adult',
    name: 'The Stranger (Jonas)',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'Middle-aged Jonas who travels through time trying to "untie the knot". He builds a time machine in hopes of closing the wormhole, unknowingly perpetuating it.',
    appearances: [
      { timePeriod: 2019, actorName: 'Andreas Pietschmann', ageGroup: 'adult', photoUrl: '/images/characters/jonas-adult.png' },
      { timePeriod: 1986, actorName: 'Andreas Pietschmann', ageGroup: 'adult', photoUrl: '/images/characters/jonas-adult.png' },
      { timePeriod: 1953, actorName: 'Andreas Pietschmann', ageGroup: 'adult', photoUrl: '/images/characters/jonas-adult.png' },
      { timePeriod: 1921, actorName: 'Andreas Pietschmann', ageGroup: 'adult', photoUrl: '/images/characters/jonas-adult.png' },
    ],
  },
  {
    id: 'adam',
    name: 'Adam (Old Jonas)',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'The oldest version of Jonas, badly scarred. Leader of Sic Mundus, a secret society operating from 1921. Manipulates events believing he can destroy the knot, though Eva sees him as a pawn.',
    appearances: [
      { timePeriod: 1921, actorName: 'Dietrich Hollander', ageGroup: 'elder', photoUrl: '/images/characters/adam.png' },
      { timePeriod: 2019, actorName: 'Dietrich Hollander', ageGroup: 'elder', photoUrl: '/images/characters/adam.png' },
    ],
  },
  {
    id: 'michael',
    name: 'Michael Kahnwald (Mikkel)',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'Jonas\'s father, who died by suicide. He was actually Mikkel Nielsen — Jonas\'s childhood friend — who traveled back to 1986 and was adopted as Michael Kahnwald, making Jonas his own grandfather\'s nephew.',
    appearances: [
      { timePeriod: 1986, actorName: 'Daan Lennard Liebrenz', ageGroup: 'child', photoUrl: '/images/characters/mikkel.png' },
      { timePeriod: 2019, actorName: 'Sebastian Hülk', ageGroup: 'adult', photoUrl: '/images/characters/michael.png' },
    ],
  },
  {
    id: 'hannah',
    name: 'Hannah Kahnwald',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'Jonas\'s mother. Has an obsessive relationship with Ulrich Nielsen. After Michael\'s death she struggles deeply. Travels to 1954 and meets Egon Tiedemann.',
    appearances: [
      { timePeriod: 2019, actorName: 'Maja Schöne', ageGroup: 'adult', photoUrl: '/images/characters/hannah.jpg' },
      { timePeriod: 2020, actorName: 'Maja Schöne', ageGroup: 'adult', photoUrl: '/images/characters/hannah.jpg' },
      { timePeriod: 1954, actorName: 'Maja Schöne', ageGroup: 'adult', photoUrl: '/images/characters/hannah.jpg' },
      { timePeriod: 1987, actorName: 'Maja Schöne', ageGroup: 'adult', photoUrl: '/images/characters/hannah.jpg' },
    ],
  },
  {
    id: 'ines',
    name: 'Ines Kahnwald',
    family: 'Kahnwald',
    world: 'Jonas',
    description: 'Nurse who adopts young Mikkel (Michael) in 1986, not knowing the full story. Michael\'s adoptive mother. Knows more about the cave mysteries than she lets on.',
    appearances: [
      { timePeriod: 1953, actorName: 'Anne Ratte-Polle', ageGroup: 'teen', photoUrl: '/images/characters/ines.jpg' },
      { timePeriod: 1986, actorName: 'Anne Ratte-Polle', ageGroup: 'adult', photoUrl: '/images/characters/ines.jpg' },
      { timePeriod: 2019, actorName: 'Angela Winkler', ageGroup: 'elder', photoUrl: '/images/characters/ines.jpg' },
    ],
  },

  // ── NIELSEN ───────────────────────────────────────────────────────────────
  {
    id: 'ulrich-adult',
    name: 'Ulrich Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Father of Mikkel. A police officer consumed by grief and rage after his son disappears. Travels to 1953 to kill young Helge, believing it will prevent everything. Ends up trapped and imprisoned in 1953.',
    appearances: [
      { timePeriod: 2019, actorName: 'Oliver Masucci', ageGroup: 'adult', photoUrl: '/images/characters/ulrich-adult.png' },
      { timePeriod: 1953, actorName: 'Oliver Masucci', ageGroup: 'adult', photoUrl: '/images/characters/ulrich-adult.png' },
    ],
  },
  {
    id: 'ulrich-young',
    name: 'Young Ulrich Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Teenage Ulrich in 1986, rebellious and grieving the loss of his brother Mads. Has a relationship with Katharina.',
    appearances: [
      { timePeriod: 1986, actorName: 'Ludger Bökelmann', ageGroup: 'teen', photoUrl: '/images/characters/ulrich-young.png' },
    ],
  },
  {
    id: 'ulrich-elder',
    name: 'Old Ulrich Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'A raving old man locked in a psychiatric facility in 1986, having been trapped in the past since 1953. People think he\'s mad.',
    appearances: [
      { timePeriod: 1986, actorName: 'Ludger Bökelmann', ageGroup: 'elder', photoUrl: '/images/characters/ulrich-adult.png' },
    ],
  },
  {
    id: 'katharina',
    name: 'Katharina Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Ulrich\'s wife, school principal. Searches desperately for her son Mikkel. Later discovers her husband is trapped in the past.',
    appearances: [
      { timePeriod: 2019, actorName: 'Jördis Triebel', ageGroup: 'adult', photoUrl: '/images/characters/katharina.jpg' },
      { timePeriod: 2020, actorName: 'Jördis Triebel', ageGroup: 'adult', photoUrl: '/images/characters/katharina.jpg' },
      { timePeriod: 1986, actorName: 'Nele Trebs', ageGroup: 'teen', photoUrl: '/images/characters/katharina.jpg' },
    ],
  },
  {
    id: 'magnus',
    name: 'Magnus Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Ulrich and Katharina\'s eldest son. In a relationship with Franziska. Becomes involved with the time travellers and ends up in the past.',
    appearances: [
      { timePeriod: 2019, actorName: 'Moritz Jahn', ageGroup: 'teen', photoUrl: '/images/characters/magnus.jpg' },
      { timePeriod: 2020, actorName: 'Moritz Jahn', ageGroup: 'teen', photoUrl: '/images/characters/magnus.jpg' },
      { timePeriod: 1921, actorName: 'Wolfram Koch', ageGroup: 'adult', photoUrl: '/images/characters/magnus.jpg' },
    ],
  },
  {
    id: 'mikkel',
    name: 'Mikkel Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'The youngest Nielsen child. Disappears in the caves and emerges in 1986, where he is adopted as Michael Kahnwald — making him his own mother\'s uncle and Jonas\'s father.',
    appearances: [
      { timePeriod: 2019, actorName: 'Daan Lennard Liebrenz', ageGroup: 'child', photoUrl: '/images/characters/mikkel.png' },
    ],
  },
  {
    id: 'mads',
    name: 'Mads Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Ulrich\'s younger brother who disappeared in 1986 — one of Helge\'s victims. His corpse reappears in 2019, providing early evidence of time travel.',
    appearances: [
      { timePeriod: 1986, actorName: 'Valentin Oppermann', ageGroup: 'child', photoUrl: '/images/characters/mads.jpg' },
    ],
  },
  {
    id: 'tronte',
    name: 'Tronte Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Ulrich\'s father. Born to Agnes Nielsen, he is the illegitimate son of Noah. A quiet man with a troubled relationship with his wife Jana.',
    appearances: [
      { timePeriod: 1953, actorName: 'Felix Kramer', ageGroup: 'child', photoUrl: '/images/characters/tronte.jpg' },
      { timePeriod: 1986, actorName: 'Felix Kramer', ageGroup: 'adult', photoUrl: '/images/characters/tronte.jpg' },
      { timePeriod: 2019, actorName: 'Walter Kreye', ageGroup: 'elder', photoUrl: '/images/characters/tronte.jpg' },
    ],
  },
  {
    id: 'jana',
    name: 'Jana Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Tronte\'s wife, Ulrich\'s mother. Never fully recovers from the disappearance of her son Mads in 1986.',
    appearances: [
      { timePeriod: 1986, actorName: 'Ella Lee', ageGroup: 'adult', photoUrl: '/images/characters/tronte.jpg' },
      { timePeriod: 2019, actorName: 'Tatja Seibt', ageGroup: 'elder', photoUrl: '/images/characters/tronte.jpg' },
    ],
  },
  {
    id: 'agnes',
    name: 'Agnes Nielsen',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Tronte\'s mother. Arrives in Winden in 1953 with young Tronte. Works as a double agent between Noah and Adam\'s factions. She is Noah\'s sister.',
    appearances: [
      { timePeriod: 1953, actorName: 'Antje Traue', ageGroup: 'adult', photoUrl: '/images/characters/agnes.png' },
      { timePeriod: 1921, actorName: 'Antje Traue', ageGroup: 'adult', photoUrl: '/images/characters/agnes.png' },
    ],
  },
  {
    id: 'silja',
    name: 'Silja',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Hannah\'s daughter from a relationship with Egon Tiedemann in 1954. She grows up and becomes Bartosz\'s partner in the 1800s, mother of Noah and Agnes Nielsen — a bootstrap paradox.',
    appearances: [
      { timePeriod: 1987, actorName: 'Lea van Acken', ageGroup: 'teen', photoUrl: '/images/characters/silja-teen.png' },
      { timePeriod: 1888, actorName: 'Lisa Kreuzer', ageGroup: 'adult', photoUrl: '/images/characters/silja-adult.jpg' },
    ],
  },

  // ── DOPPLER ───────────────────────────────────────────────────────────────
  {
    id: 'charlotte',
    name: 'Charlotte Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'Chief of police in Winden. A bootstrap paradox: her mother is Elisabeth, her own daughter. Noah is her biological father. She and Peter work to uncover the truth.',
    appearances: [
      { timePeriod: 2019, actorName: 'Karoline Eichhorn', ageGroup: 'adult', photoUrl: '/images/characters/charlotte.jpg' },
      { timePeriod: 2020, actorName: 'Karoline Eichhorn', ageGroup: 'adult', photoUrl: '/images/characters/charlotte.jpg' },
      { timePeriod: 1971, actorName: 'Karoline Eichhorn', ageGroup: 'child', photoUrl: '/images/characters/charlotte.jpg' },
    ],
  },
  {
    id: 'peter',
    name: 'Peter Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'Therapist (counsels Jonas after Michael\'s death). Son of Helge, haunted by his father\'s crimes. Married to Charlotte. Killed in the 2020 apocalypse.',
    appearances: [
      { timePeriod: 1986, actorName: 'Pablo Striebeck', ageGroup: 'teen', photoUrl: '/images/characters/peter.jpg' },
      { timePeriod: 2019, actorName: 'Stephan Kampwirth', ageGroup: 'adult', photoUrl: '/images/characters/peter.jpg' },
      { timePeriod: 2020, actorName: 'Stephan Kampwirth', ageGroup: 'adult', photoUrl: '/images/characters/peter.jpg' },
    ],
  },
  {
    id: 'franziska',
    name: 'Franziska Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'Charlotte and Peter\'s elder daughter. In a relationship with Magnus Nielsen. Gets drawn into time travel, ending up in 1921 with Magnus.',
    appearances: [
      { timePeriod: 2019, actorName: 'Gina Stiebitz', ageGroup: 'teen', photoUrl: '/images/characters/franziska.png' },
      { timePeriod: 2020, actorName: 'Gina Stiebitz', ageGroup: 'teen', photoUrl: '/images/characters/franziska.png' },
      { timePeriod: 1921, actorName: 'Ella Lee', ageGroup: 'adult', photoUrl: '/images/characters/franziska.png' },
    ],
  },
  {
    id: 'elisabeth',
    name: 'Elisabeth Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'Charlotte\'s younger daughter, deaf (uses sign language). Another bootstrap paradox: she gives birth to Charlotte in 2041, who is immediately taken back to 1971. Leads the apocalypse survivors in 2053.',
    appearances: [
      { timePeriod: 2019, actorName: 'Carlotta von Falkenhayn', ageGroup: 'teen', photoUrl: '/images/characters/elisabeth.jpg' },
      { timePeriod: 2020, actorName: 'Carlotta von Falkenhayn', ageGroup: 'teen', photoUrl: '/images/characters/elisabeth.jpg' },
      { timePeriod: 2053, actorName: 'Claudia Hübbecker', ageGroup: 'adult', photoUrl: '/images/characters/elisabeth.jpg' },
      { timePeriod: 2041, actorName: 'Claudia Hübbecker', ageGroup: 'adult', photoUrl: '/images/characters/elisabeth.jpg' },
    ],
  },
  {
    id: 'helge-child',
    name: 'Helge Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'In 1953, 9-year-old Helge is brutally attacked by Ulrich Nielsen. Transported to 1986 via wormhole, he is manipulated by Noah into becoming his henchman — luring children to their deaths.',
    appearances: [
      { timePeriod: 1953, actorName: 'Tom Philipp', ageGroup: 'child', photoUrl: '/images/characters/helge-child.jpg' },
      { timePeriod: 1986, actorName: 'Peter Schneider', ageGroup: 'adult', photoUrl: '/images/characters/helge-child.jpg' },
      { timePeriod: 2019, actorName: 'Hermann Beyer', ageGroup: 'elder', photoUrl: '/images/characters/helge-child.jpg' },
    ],
  },
  {
    id: 'noah',
    name: 'Noah',
    family: 'Doppler',
    world: 'Jonas',
    description: 'A mysterious, manipulative priest. Antagonist for much of the show. Works for Sic Mundus, performing time experiments on children. Later revealed as Charlotte\'s biological father, Agnes\'s brother, and Silja\'s son — born Hanno Tauber.',
    appearances: [
      { timePeriod: 1921, actorName: 'Mark Waschke', ageGroup: 'adult', photoUrl: '/images/characters/noah-adult.png' },
      { timePeriod: 1953, actorName: 'Mark Waschke', ageGroup: 'adult', photoUrl: '/images/characters/noah-adult.png' },
      { timePeriod: 1986, actorName: 'Mark Waschke', ageGroup: 'adult', photoUrl: '/images/characters/noah-adult.png' },
      { timePeriod: 2019, actorName: 'Mark Waschke', ageGroup: 'adult', photoUrl: '/images/characters/noah-adult.png' },
      { timePeriod: 1888, actorName: 'Lucie Hollmann', ageGroup: 'child', photoUrl: '/images/characters/noah-child.png' },
    ],
  },
  {
    id: 'bernd',
    name: 'Bernd Doppler',
    family: 'Doppler',
    world: 'Jonas',
    description: 'Founder and first director of the Winden nuclear power plant. Helge\'s father. Covers up an incident involving the God Particle residue in the plant\'s barrels.',
    appearances: [
      { timePeriod: 1953, actorName: 'Anatole Taubman', ageGroup: 'adult', photoUrl: '/images/characters/bernd.jpg' },
      { timePeriod: 1986, actorName: 'Michael Mendl', ageGroup: 'elder', photoUrl: '/images/characters/bernd.jpg' },
    ],
  },

  // ── TIEDEMANN ─────────────────────────────────────────────────────────────
  {
    id: 'claudia-adult',
    name: 'Claudia Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Director of the nuclear plant in 1986. Dubbed "The White Devil" by Noah. The only character who figured out how to escape the cycle and work to end it. Guides Jonas through fractured time jumps.',
    appearances: [
      { timePeriod: 1953, actorName: 'Lisa Kreuzer', ageGroup: 'child', photoUrl: '/images/characters/claudia.png' },
      { timePeriod: 1986, actorName: 'Lisa Kreuzer', ageGroup: 'adult', photoUrl: '/images/characters/claudia.png' },
      { timePeriod: 2019, actorName: 'Lisa Kreuzer', ageGroup: 'elder', photoUrl: '/images/characters/claudia.png' },
      { timePeriod: 1987, actorName: 'Lisa Kreuzer', ageGroup: 'adult', photoUrl: '/images/characters/claudia.png' },
    ],
  },
  {
    id: 'egon',
    name: 'Egon Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Police officer in Winden in 1953 and 1986. Claudia\'s father. Investigates the child disappearances. Has an affair with Hannah in 1954 that produces Silja.',
    appearances: [
      { timePeriod: 1953, actorName: 'Christian Pätzold', ageGroup: 'adult', photoUrl: '/images/characters/egon.png' },
      { timePeriod: 1986, actorName: 'Christian Pätzold', ageGroup: 'elder', photoUrl: '/images/characters/egon.png' },
    ],
  },
  {
    id: 'doris',
    name: 'Doris Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Egon\'s wife, Claudia\'s mother. Begins an affair with Agnes Nielsen when she moves into their house in 1953.',
    appearances: [
      { timePeriod: 1953, actorName: 'Luise Heyer', ageGroup: 'adult', photoUrl: '/images/characters/doris.png' },
    ],
  },
  {
    id: 'regina',
    name: 'Regina Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Claudia\'s daughter, runs the Winden Hotel. Battling breast cancer. Married to Aleksander. Her secret parentage involves Tronte Nielsen.',
    appearances: [
      { timePeriod: 1986, actorName: 'Lydia Makrides', ageGroup: 'teen', photoUrl: '/images/characters/regina.png' },
      { timePeriod: 2019, actorName: 'Deborah Kaufmann', ageGroup: 'adult', photoUrl: '/images/characters/regina.png' },
      { timePeriod: 2020, actorName: 'Deborah Kaufmann', ageGroup: 'adult', photoUrl: '/images/characters/regina.png' },
    ],
  },
  {
    id: 'aleksander',
    name: 'Aleksander Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Regina\'s husband, director of the nuclear plant. His real name is Boris Niewald — he fled a crime and assumed a new identity. He illegally stored the God Particle barrels at the plant.',
    appearances: [
      { timePeriod: 1986, actorName: 'Peter Benedict', ageGroup: 'adult', photoUrl: '/images/characters/aleksander.png' },
      { timePeriod: 2019, actorName: 'Peter Benedict', ageGroup: 'elder', photoUrl: '/images/characters/aleksander.png' },
      { timePeriod: 2020, actorName: 'Peter Benedict', ageGroup: 'elder', photoUrl: '/images/characters/aleksander.png' },
    ],
  },
  {
    id: 'bartosz',
    name: 'Bartosz Tiedemann',
    family: 'Tiedemann',
    world: 'Jonas',
    description: 'Jonas\'s best friend and Regina & Aleksander\'s son. Becomes disillusioned with Jonas and joins Noah\'s faction. Travels to the 1880s, where he meets Silja and has children — Noah and Agnes.',
    appearances: [
      { timePeriod: 2019, actorName: 'Paul Lux', ageGroup: 'teen', photoUrl: '/images/characters/bartosz.jpg' },
      { timePeriod: 2020, actorName: 'Paul Lux', ageGroup: 'teen', photoUrl: '/images/characters/bartosz.jpg' },
      { timePeriod: 1888, actorName: 'Paul Lux', ageGroup: 'adult', photoUrl: '/images/characters/bartosz.jpg' },
      { timePeriod: 1921, actorName: 'Roman Knizka', ageGroup: 'elder', photoUrl: '/images/characters/bartosz.jpg' },
    ],
  },
  {
    id: 'tannhaus',
    name: 'H.G. Tannhaus',
    family: 'Other',
    world: 'Both',
    description: 'A clockmaker in Winden who builds a time machine in the alternate world to bring back his dead family. This accidentally splits the original world into two mirror worlds — the true origin of the time loop.',
    appearances: [
      { timePeriod: 1953, actorName: 'Christian Pätzold', ageGroup: 'adult', photoUrl: '/images/characters/tannhaus.jpg' },
      { timePeriod: 1986, actorName: 'Christian Pätzold', ageGroup: 'elder', photoUrl: '/images/characters/tannhaus.jpg' },
    ],
  },

  // ── EVA'S WORLD ───────────────────────────────────────────────────────────
  {
    id: 'martha-alt',
    name: 'Martha (Alt-World)',
    family: 'Nielsen',
    world: 'Eva',
    description: 'The alternate-world version of Martha Nielsen. Saves Jonas moments before his world\'s apocalypse and brings him to her world. Has a child with Jonas — the Unknown — a bootstrap paradox.',
    appearances: [
      { timePeriod: 2019, actorName: 'Lisa Vicari', ageGroup: 'teen', photoUrl: '/images/characters/martha-alt.png' },
      { timePeriod: 2020, actorName: 'Lisa Vicari', ageGroup: 'teen', photoUrl: '/images/characters/martha-alt.png' },
    ],
  },
  {
    id: 'eva',
    name: 'Eva (Old Martha)',
    family: 'Nielsen',
    world: 'Eva',
    description: 'The oldest version of alt-world Martha. Leads her own faction (mirror of Adam\'s). Works to preserve the knot, believing both worlds must survive. Manipulates everyone from the shadows.',
    appearances: [
      { timePeriod: 2019, actorName: 'Barbara Nüsse', ageGroup: 'elder', photoUrl: '/images/characters/eva.jpg' },
      { timePeriod: 2052, actorName: 'Barbara Nüsse', ageGroup: 'elder', photoUrl: '/images/characters/eva.jpg' },
    ],
  },
  {
    id: 'the-unknown',
    name: 'The Unknown (Triquart)',
    family: 'Nielsen',
    world: 'Both',
    description: 'The child of Jonas and alt-Martha — born in the Origin World. Exists as three simultaneous ages. A pure bootstrap paradox who destroys the Origin World\'s family to enable Tannhaus\'s grief and thus create the split worlds.',
    appearances: [
      { timePeriod: 1971, actorName: 'Jakob Diehl / Hans Diehl / Claude Heinrich', ageGroup: 'adult' },
      { timePeriod: 1953, actorName: 'Jakob Diehl / Hans Diehl / Claude Heinrich', ageGroup: 'adult' },
    ],
  },
  {
    id: 'martha-jonas',
    name: 'Martha Nielsen (Jonas\'s World)',
    family: 'Nielsen',
    world: 'Jonas',
    description: 'Jonas\'s romantic interest and Ulrich\'s daughter. She is also Mikkel\'s sister — making her both Jonas\'s love interest and his aunt. Killed by Adam at the moment of the apocalypse.',
    appearances: [
      { timePeriod: 2019, actorName: 'Lisa Vicari', ageGroup: 'teen', photoUrl: '/images/characters/martha-jonas.png' },
      { timePeriod: 2020, actorName: 'Lisa Vicari', ageGroup: 'teen', photoUrl: '/images/characters/martha-jonas.png' },
    ],
  },
];
