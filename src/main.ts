import './style.css';
import { openDarkDB } from './db/schema';
import { seedDatabase } from './db/seed';
import { getAllEpisodes } from './db/schema';
import { CHARACTERS } from './data/characters';
import { RELATIONSHIPS } from './data/relationships';
import { DarkGraph } from './graph/graph';
import { Sidebar } from './ui/sidebar';
import { Filters } from './ui/filters';
import { EpisodeGuide } from './ui/episodeGuide';
import { renderLegend } from './ui/legend';

async function main(): Promise<void> {
  const loading = document.getElementById('loading')!;
  const app = document.getElementById('app')!;

  const loadingText = document.getElementById('loading-text')!;

  try {
    loadingText.textContent = 'Opening database…';
    const db = await openDarkDB();

    loadingText.textContent = 'Loading character data…';
    await seedDatabase(db);

    const episodes = await getAllEpisodes(db);

    // Use static data directly to ensure photos and latest data are always current
    const characters = CHARACTERS;
    const relationships = RELATIONSHIPS;

    loadingText.textContent = 'Rendering graph…';

    const graphContainer = document.getElementById('graph')!;
    const graph = new DarkGraph(graphContainer);
    graph.load(characters, relationships);

    const sidebar = new Sidebar();
    const filters = new Filters();
    const episodeGuide = new EpisodeGuide();

    episodeGuide.setEpisodes(episodes);
    renderLegend();

    graph.onCharacterClick(char => {
      sidebar.show(char);
    });

    filters.onFilterChange(state => {
      const hasFilters =
        state.timePeriods.size > 0 ||
        state.families.size > 0 ||
        state.worlds.size > 0 ||
        state.searchQuery.length > 0;

      if (hasFilters) {
        graph.applyFilter(state, characters, relationships);
      } else {
        graph.resetFilter();
      }
    });

    // Fit button
    document.getElementById('btn-fit')?.addEventListener('click', () => graph.fitView());

    // Close sidebar on graph click (not on node)
    graphContainer.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName === 'CANVAS' && sidebar.isVisible()) {
        sidebar.hide();
      }
    });

    loading.style.display = 'none';
    app.style.display = 'flex';

    graph.fitView();
  } catch (err) {
    const loadingText2 = loadingText;
    loadingText2.textContent = `Error: ${(err as Error).message}`;
    loading.style.color = '#ff6b6b';
    console.error(err);
  }
}

main();
