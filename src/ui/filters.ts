import type { FilterState, Family, World } from '../types';
import { TIME_PERIODS } from '../data/timePeriods';

type FilterChangeCallback = (state: FilterState) => void;

export class Filters {
  private state: FilterState = {
    timePeriods: new Set(),
    families: new Set(),
    worlds: new Set(),
    searchQuery: '',
  };
  private onChange?: FilterChangeCallback;

  constructor() {
    this.renderTimePeriods();
    this.renderFamilies();
    this.renderWorlds();
    this.bindSearch();
    this.bindReset();
  }

  onFilterChange(cb: FilterChangeCallback): void {
    this.onChange = cb;
  }

  private emit(): void {
    this.onChange?.(this.getState());
  }

  getState(): FilterState {
    return {
      timePeriods: new Set(this.state.timePeriods),
      families: new Set(this.state.families),
      worlds: new Set(this.state.worlds),
      searchQuery: this.state.searchQuery,
    };
  }

  private renderTimePeriods(): void {
    const container = document.getElementById('filter-time')!;
    container.innerHTML = TIME_PERIODS.map(tp => `
      <button class="filter-btn" data-type="time" data-value="${tp.year}" title="${tp.description}">
        ${tp.label}
      </button>
    `).join('');

    container.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const year = Number(btn.dataset.value);
        btn.classList.toggle('active');
        if (this.state.timePeriods.has(year)) {
          this.state.timePeriods.delete(year);
        } else {
          this.state.timePeriods.add(year);
        }
        this.emit();
      });
    });
  }

  private renderFamilies(): void {
    const container = document.getElementById('filter-family')!;
    const families: { id: Family; color: string }[] = [
      { id: 'Kahnwald', color: '#e8b84b' },
      { id: 'Nielsen', color: '#4a9edd' },
      { id: 'Doppler', color: '#e05c5c' },
      { id: 'Tiedemann', color: '#6ab04c' },
      { id: 'Other', color: '#9b59b6' },
    ];

    container.innerHTML = families.map(f => `
      <button class="filter-btn family-btn" data-type="family" data-value="${f.id}"
        style="--family-color: ${f.color}">
        <span class="family-dot" style="background: ${f.color}"></span>${f.id}
      </button>
    `).join('');

    container.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fam = btn.dataset.value as Family;
        btn.classList.toggle('active');
        if (this.state.families.has(fam)) {
          this.state.families.delete(fam);
        } else {
          this.state.families.add(fam);
        }
        this.emit();
      });
    });
  }

  private renderWorlds(): void {
    const container = document.getElementById('filter-world')!;
    const worlds: { id: World; label: string }[] = [
      { id: 'Jonas', label: '● Jonas\'s World' },
      { id: 'Eva', label: '◆ Eva\'s World' },
      { id: 'Both', label: '★ Both' },
    ];

    container.innerHTML = worlds.map(w => `
      <button class="filter-btn world-btn" data-type="world" data-value="${w.id}">${w.label}</button>
    `).join('');

    container.querySelectorAll<HTMLButtonElement>('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const world = btn.dataset.value as World;
        btn.classList.toggle('active');
        if (this.state.worlds.has(world)) {
          this.state.worlds.delete(world);
        } else {
          this.state.worlds.add(world);
        }
        this.emit();
      });
    });
  }

  private bindSearch(): void {
    const input = document.getElementById('search-input') as HTMLInputElement;
    input.addEventListener('input', () => {
      this.state.searchQuery = input.value;
      this.emit();
    });

    // Cmd+K / Ctrl+K shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
        input.select();
      }
      if (e.key === 'Escape' && document.activeElement === input) {
        input.value = '';
        this.state.searchQuery = '';
        input.blur();
        this.emit();
      }
    });
  }

  private bindReset(): void {
    const btn = document.getElementById('filter-reset')!;
    btn.addEventListener('click', () => {
      this.state = { timePeriods: new Set(), families: new Set(), worlds: new Set(), searchQuery: '' };
      document.querySelectorAll('.filter-btn.active').forEach(b => b.classList.remove('active'));
      (document.getElementById('search-input') as HTMLInputElement).value = '';
      this.emit();
    });
  }
}
