import { RELATIONSHIP_COLORS, FAMILY_COLORS } from '../data/timePeriods';

export function renderLegend(): void {
  const relEl = document.getElementById('legend-relationships')!;
  const famEl = document.getElementById('legend-families')!;

  relEl.innerHTML = Object.entries(RELATIONSHIP_COLORS).map(([type, color]) => `
    <div class="legend-item">
      <span class="legend-line" style="background: ${color}"></span>
      <span class="legend-label">${type.replace('-', ' ')}</span>
    </div>
  `).join('');

  famEl.innerHTML = Object.entries(FAMILY_COLORS).map(([family, color]) => `
    <div class="legend-item">
      <span class="legend-dot" style="background: ${color}"></span>
      <span class="legend-label">${family}</span>
    </div>
  `).join('');
}
