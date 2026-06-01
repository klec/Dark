import type { Episode } from '../types';

export class EpisodeGuide {
  private el: HTMLElement;
  private episodes: Episode[] = [];
  private open = false;

  constructor() {
    this.el = document.getElementById('episode-guide')!;
    const toggleBtn = document.getElementById('episode-toggle')!;
    toggleBtn.addEventListener('click', () => this.toggle());
  }

  setEpisodes(episodes: Episode[]): void {
    this.episodes = episodes.sort((a, b) => a.season - b.season || a.episode - b.episode);
    this.render();
  }

  private toggle(): void {
    this.open = !this.open;
    this.el.classList.toggle('open', this.open);
    document.getElementById('episode-toggle')!.classList.toggle('active', this.open);
  }

  private render(): void {
    const content = document.getElementById('episode-content')!;
    const seasons = [1, 2, 3] as const;

    content.innerHTML = seasons.map(s => {
      const eps = this.episodes.filter(e => e.season === s);
      const seasonLabels = ['The Secrets of Winden', 'The Apocalypse', 'The Last Cycle'];
      return `
        <div class="season-section">
          <h3 class="season-title">Season ${s} — <em>${seasonLabels[s - 1]}</em></h3>
          <div class="episodes-list">
            ${eps.map(e => `
              <details class="episode-item">
                <summary class="episode-header">
                  <span class="ep-num">S${e.season}E${String(e.episode).padStart(2, '0')}</span>
                  <span class="ep-title">${e.title}</span>
                  <span class="ep-years">${e.timePeriods.sort((a, b) => a - b).join(' · ')}</span>
                </summary>
                <p class="ep-summary">${e.summary}</p>
              </details>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  }
}
