import type { Relationship } from '../types';

export const RELATIONSHIPS: Relationship[] = [
  // ── Jonas timeline (same person) ──────────────────────────────────────────
  { id: 'r-jonas-stranger', sourceId: 'jonas-young', targetId: 'jonas-adult', type: 'same-person', description: 'Jonas grows into The Stranger after years of time travel' },
  { id: 'r-stranger-adam', sourceId: 'jonas-adult', targetId: 'adam', type: 'same-person', description: 'The Stranger eventually becomes the scarred elder Adam' },

  // ── Martha timeline ────────────────────────────────────────────────────────
  { id: 'r-martha-eva', sourceId: 'martha-alt', targetId: 'eva', type: 'same-person', description: 'Alt-Martha becomes Eva in the alternate world' },

  // ── Kahnwald family ───────────────────────────────────────────────────────
  { id: 'r-hannah-jonas', sourceId: 'hannah', targetId: 'jonas-young', type: 'parent-child', description: 'Hannah is Jonas\'s mother' },
  { id: 'r-michael-jonas', sourceId: 'michael', targetId: 'jonas-young', type: 'parent-child', description: 'Michael (Mikkel) is Jonas\'s father' },
  { id: 'r-ines-michael', sourceId: 'ines', targetId: 'michael', type: 'parent-child', description: 'Ines adopted Mikkel as Michael in 1986' },
  { id: 'r-mikkel-michael', sourceId: 'mikkel', targetId: 'michael', type: 'same-person', description: 'Mikkel Nielsen traveled to 1986 and became Michael Kahnwald' },
  { id: 'r-hannah-michael', sourceId: 'hannah', targetId: 'michael', type: 'romantic', description: 'Hannah was Michael\'s wife' },

  // ── Nielsen family ────────────────────────────────────────────────────────
  { id: 'r-ulrich-katharina', sourceId: 'ulrich-adult', targetId: 'katharina', type: 'romantic', description: 'Married couple in 2019' },
  { id: 'r-ulrich-magnus', sourceId: 'ulrich-adult', targetId: 'magnus', type: 'parent-child', description: 'Ulrich is Magnus\'s father' },
  { id: 'r-ulrich-mikkel', sourceId: 'ulrich-adult', targetId: 'mikkel', type: 'parent-child', description: 'Ulrich is Mikkel\'s father' },
  { id: 'r-ulrich-martha', sourceId: 'ulrich-adult', targetId: 'martha-jonas', type: 'parent-child', description: 'Ulrich is Martha\'s father' },
  { id: 'r-katharina-magnus', sourceId: 'katharina', targetId: 'magnus', type: 'parent-child', description: 'Katharina is Magnus\'s mother' },
  { id: 'r-katharina-mikkel', sourceId: 'katharina', targetId: 'mikkel', type: 'parent-child', description: 'Katharina is Mikkel\'s mother' },
  { id: 'r-katharina-martha', sourceId: 'katharina', targetId: 'martha-jonas', type: 'parent-child', description: 'Katharina is Martha\'s mother' },
  { id: 'r-tronte-ulrich', sourceId: 'tronte', targetId: 'ulrich-adult', type: 'parent-child', description: 'Tronte is Ulrich\'s father' },
  { id: 'r-tronte-mads', sourceId: 'tronte', targetId: 'mads', type: 'parent-child', description: 'Tronte is Mads\'s father' },
  { id: 'r-jana-ulrich', sourceId: 'jana', targetId: 'ulrich-adult', type: 'parent-child', description: 'Jana is Ulrich\'s mother' },
  { id: 'r-jana-mads', sourceId: 'jana', targetId: 'mads', type: 'parent-child', description: 'Jana is Mads\'s mother' },
  { id: 'r-tronte-jana', sourceId: 'tronte', targetId: 'jana', type: 'romantic', description: 'Tronte and Jana are married' },
  { id: 'r-agnes-tronte', sourceId: 'agnes', targetId: 'tronte', type: 'parent-child', description: 'Agnes is Tronte\'s mother' },
  { id: 'r-noah-tronte', sourceId: 'noah', targetId: 'tronte', type: 'parent-child', description: 'Noah (Hanno) is Tronte\'s biological father' },
  { id: 'r-ulrich-young-old', sourceId: 'ulrich-young', targetId: 'ulrich-adult', type: 'same-person', description: 'Young Ulrich (1986) grows into adult Ulrich (2019)' },
  { id: 'r-ulrich-adult-elder', sourceId: 'ulrich-adult', targetId: 'ulrich-elder', type: 'same-person', description: 'After being trapped in 1953, Ulrich aged into the mad elder in 1986' },
  { id: 'r-ulrich-tronte', sourceId: 'ulrich-adult', targetId: 'tronte', type: 'enemy', description: 'Ulrich suspects Tronte of involvement in Mads\'s disappearance' },

  // ── Nielsen siblings ───────────────────────────────────────────────────────
  { id: 'r-ulrich-mads-sibling', sourceId: 'ulrich-adult', targetId: 'mads', type: 'sibling', description: 'Ulrich and Mads are brothers' },
  { id: 'r-magnus-mikkel-sibling', sourceId: 'magnus', targetId: 'mikkel', type: 'sibling', description: 'Magnus and Mikkel are brothers' },
  { id: 'r-magnus-martha-sibling', sourceId: 'magnus', targetId: 'martha-jonas', type: 'sibling', description: 'Magnus and Martha are siblings' },
  { id: 'r-mikkel-martha-sibling', sourceId: 'mikkel', targetId: 'martha-jonas', type: 'sibling', description: 'Mikkel and Martha are siblings' },
  { id: 'r-noah-agnes-sibling', sourceId: 'noah', targetId: 'agnes', type: 'sibling', description: 'Noah and Agnes are siblings (both children of Bartosz & Silja)' },

  // ── Silja paradox chain ────────────────────────────────────────────────────
  { id: 'r-silja-noah', sourceId: 'silja', targetId: 'noah', type: 'parent-child', description: 'Silja is Noah\'s mother' },
  { id: 'r-silja-agnes', sourceId: 'silja', targetId: 'agnes', type: 'parent-child', description: 'Silja is Agnes\'s mother' },
  { id: 'r-bartosz-noah', sourceId: 'bartosz', targetId: 'noah', type: 'parent-child', description: 'Bartosz is Noah\'s father' },
  { id: 'r-bartosz-agnes', sourceId: 'bartosz', targetId: 'agnes', type: 'parent-child', description: 'Bartosz is Agnes\'s father' },
  { id: 'r-bartosz-silja', sourceId: 'bartosz', targetId: 'silja', type: 'romantic', description: 'Bartosz and Silja are partners in the 1800s' },
  { id: 'r-egon-silja', sourceId: 'egon', targetId: 'silja', type: 'parent-child', description: 'Egon is Silja\'s father (affair with Hannah in 1954)' },
  { id: 'r-hannah-silja', sourceId: 'hannah', targetId: 'silja', type: 'parent-child', description: 'Hannah is Silja\'s mother' },

  // ── Doppler family ────────────────────────────────────────────────────────
  { id: 'r-charlotte-peter', sourceId: 'charlotte', targetId: 'peter', type: 'romantic', description: 'Charlotte and Peter are married' },
  { id: 'r-charlotte-franziska', sourceId: 'charlotte', targetId: 'franziska', type: 'parent-child', description: 'Charlotte is Franziska\'s mother' },
  { id: 'r-charlotte-elisabeth', sourceId: 'charlotte', targetId: 'elisabeth', type: 'parent-child', description: 'Charlotte is Elisabeth\'s mother' },
  { id: 'r-peter-franziska', sourceId: 'peter', targetId: 'franziska', type: 'parent-child', description: 'Peter is Franziska\'s father' },
  { id: 'r-peter-elisabeth', sourceId: 'peter', targetId: 'elisabeth', type: 'parent-child', description: 'Peter is Elisabeth\'s father' },
  { id: 'r-helge-peter', sourceId: 'helge-child', targetId: 'peter', type: 'parent-child', description: 'Helge is Peter\'s father' },
  { id: 'r-bernd-helge', sourceId: 'bernd', targetId: 'helge-child', type: 'parent-child', description: 'Bernd is Helge\'s father' },
  { id: 'r-noah-charlotte', sourceId: 'noah', targetId: 'charlotte', type: 'parent-child', description: 'Noah is Charlotte\'s biological father' },
  { id: 'r-noah-helge', sourceId: 'noah', targetId: 'helge-child', type: 'mentor', description: 'Noah manipulated and used Helge as his henchman' },

  // ── Charlotte ↔ Elisabeth bootstrap paradox ───────────────────────────────
  { id: 'r-elisabeth-charlotte', sourceId: 'elisabeth', targetId: 'charlotte', type: 'parent-child', description: 'Elisabeth gives birth to Charlotte in 2041 (bootstrap paradox: Charlotte is her own mother\'s mother)' },

  // ── Tiedemann family ──────────────────────────────────────────────────────
  { id: 'r-egon-claudia', sourceId: 'egon', targetId: 'claudia-adult', type: 'parent-child', description: 'Egon is Claudia\'s father' },
  { id: 'r-doris-claudia', sourceId: 'doris', targetId: 'claudia-adult', type: 'parent-child', description: 'Doris is Claudia\'s mother' },
  { id: 'r-egon-doris', sourceId: 'egon', targetId: 'doris', type: 'romantic', description: 'Egon and Doris are married in 1953' },
  { id: 'r-claudia-regina', sourceId: 'claudia-adult', targetId: 'regina', type: 'parent-child', description: 'Claudia is Regina\'s mother' },
  { id: 'r-tronte-regina', sourceId: 'tronte', targetId: 'regina', type: 'parent-child', description: 'Tronte is Regina\'s biological father (affair with Claudia)' },
  { id: 'r-regina-aleksander', sourceId: 'regina', targetId: 'aleksander', type: 'romantic', description: 'Regina and Aleksander are married' },
  { id: 'r-aleksander-bartosz', sourceId: 'aleksander', targetId: 'bartosz', type: 'parent-child', description: 'Aleksander is Bartosz\'s father' },
  { id: 'r-regina-bartosz', sourceId: 'regina', targetId: 'bartosz', type: 'parent-child', description: 'Regina is Bartosz\'s mother' },

  // ── Cross-family key relationships ────────────────────────────────────────
  { id: 'r-jonas-martha', sourceId: 'jonas-young', targetId: 'martha-jonas', type: 'romantic', description: 'Jonas and Martha are romantic partners — though she is technically his aunt', world: 'Jonas' },
  { id: 'r-jonas-martha-alt', sourceId: 'jonas-young', targetId: 'martha-alt', type: 'romantic', description: 'Jonas and Alt-Martha become partners in the alternate world', world: 'Eva' },
  { id: 'r-jonas-bartosz', sourceId: 'jonas-young', targetId: 'bartosz', type: 'friend', description: 'Best friends who later become enemies as Bartosz joins Noah' },
  { id: 'r-bartosz-adam', sourceId: 'bartosz', targetId: 'adam', type: 'enemy', description: 'Bartosz betrays Jonas/Adam and joins Noah\'s faction' },
  { id: 'r-claudia-adam', sourceId: 'claudia-adult', targetId: 'adam', type: 'enemy', description: 'Claudia opposes Adam\'s goals — the only one who figured out how to truly end the cycle' },
  { id: 'r-claudia-noah', sourceId: 'claudia-adult', targetId: 'noah', type: 'enemy', description: 'Claudia is called "The White Devil" by Noah' },
  { id: 'r-adam-eva', sourceId: 'adam', targetId: 'eva', type: 'enemy', description: 'Adam and Eva lead opposing factions, both manipulating events to different ends' },
  { id: 'r-noah-adam', sourceId: 'noah', targetId: 'adam', type: 'mentor', description: 'Noah works for Adam — though Noah later turns against him when he learns the truth' },
  { id: 'r-agnes-adam', sourceId: 'agnes', targetId: 'adam', type: 'mentor', description: 'Agnes betrays Noah and delivers him to Adam' },
  { id: 'r-ulrich-helge', sourceId: 'ulrich-adult', targetId: 'helge-child', type: 'enemy', description: 'Ulrich attempts to kill young Helge in 1953 to prevent the deaths of children' },
  { id: 'r-magnus-franziska', sourceId: 'magnus', targetId: 'franziska', type: 'romantic', description: 'Magnus and Franziska are a couple' },
  { id: 'r-doris-agnes', sourceId: 'doris', targetId: 'agnes', type: 'romantic', description: 'Doris and Agnes have an affair in 1953' },
  { id: 'r-tannhaus-unknown', sourceId: 'tannhaus', targetId: 'the-unknown', type: 'enemy', description: 'The Unknown killed Tannhaus\'s family in the Origin World, causing his grief that led to the time machine' },
  { id: 'r-jonas-altmartha-unknown', sourceId: 'martha-alt', targetId: 'the-unknown', type: 'parent-child', description: 'Alt-Martha is The Unknown\'s mother' },
  { id: 'r-jonas-unknown', sourceId: 'jonas-young', targetId: 'the-unknown', type: 'parent-child', description: 'Jonas is The Unknown\'s father' },
  { id: 'r-hannah-ulrich', sourceId: 'hannah', targetId: 'ulrich-adult', type: 'romantic', description: 'Hannah and Ulrich had an affair' },
  { id: 'r-claudia-tannhaus', sourceId: 'claudia-adult', targetId: 'tannhaus', type: 'mentor', description: 'Claudia sought guidance from Tannhaus about time travel' },
];
