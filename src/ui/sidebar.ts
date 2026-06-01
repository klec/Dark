import type { Character } from '../types';
import { TIME_PERIODS } from '../data/timePeriods';

export class Sidebar {
  private el: HTMLElement;
  private visible = false;

  constructor() {
    this.el = document.getElementById('sidebar')!;
  }

  show(char: Character): void {
    this.el.innerHTML = this.renderCharacter(char);
    const closeBtn = document.createElement('button');
    closeBtn.id = 'sidebar-close-btn';
    closeBtn.className = 'sidebar-close';
    closeBtn.innerHTML = '✕';
    closeBtn.addEventListener('click', () => this.hide());
    this.el.prepend(closeBtn);

    this.el.classList.add('open');
    this.visible = true;
    this.setupPhotoCarousel();
  }

  hide(): void {
    this.el.classList.remove('open');
    this.visible = false;
  }

  isVisible(): boolean {
    return this.visible;
  }

  private renderCharacter(char: Character): string {
    const familyColor: Record<string, string> = {
      Kahnwald: '#e8b84b', Nielsen: '#4a9edd',
      Doppler: '#e05c5c', Tiedemann: '#6ab04c', Other: '#9b59b6',
    };

    const worldBadge = char.world === 'Both'
      ? '<span class="badge badge-both">Both Worlds</span>'
      : char.world === 'Eva'
        ? '<span class="badge badge-eva">Eva\'s World ◆</span>'
        : '<span class="badge badge-jonas">Jonas\'s World ●</span>';

    const appearances = char.appearances
      .sort((a, b) => a.timePeriod - b.timePeriod)
      .map(app => {
        const era = TIME_PERIODS.find(t => t.year === app.timePeriod);
        return `
        <div class="appearance-card" data-photo="${app.photoUrl ?? ''}">
          <div class="appearance-photo">
            ${app.photoUrl
              ? `<img src="${app.photoUrl}" alt="${char.name} in ${app.timePeriod}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'photo-placeholder\'>${app.ageGroup[0].toUpperCase()}</div>'">`
              : `<div class="photo-placeholder">${app.ageGroup[0].toUpperCase()}</div>`
            }
          </div>
          <div class="appearance-info">
            <span class="appearance-year">${app.timePeriod}</span>
            <span class="appearance-actor">${app.actorName}</span>
            <span class="appearance-age">${app.ageGroup}</span>
            ${era ? `<span class="appearance-era-hint">${era.description.substring(0, 60)}…</span>` : ''}
          </div>
        </div>`;
      })
      .join('');

    return `
      <div class="char-header" style="border-left: 4px solid ${familyColor[char.family] ?? '#888'}">
        <div class="char-family-tag" style="color: ${familyColor[char.family] ?? '#888'}">${char.family}</div>
        <h2 class="char-name">${char.name}</h2>
        ${worldBadge}
      </div>
      <p class="char-description">${char.description}</p>
      <h3 class="section-title">Appearances Across Time</h3>
      <div class="appearances-list">
        ${appearances || '<p class="no-data">No appearance data</p>'}
      </div>
    `;
  }

  private setupPhotoCarousel(): void {
    // Images load lazily — no additional setup needed
  }
}
