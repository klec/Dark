import cytoscape, { type Core, type NodeSingular, type EventObject } from 'cytoscape';
// @ts-ignore — no types for this plugin
import coseBilkent from 'cytoscape-cose-bilkent';
import type { Character, Relationship, FilterState } from '../types';import { FAMILY_COLORS, RELATIONSHIP_COLORS } from '../data/timePeriods';

cytoscape.use(coseBilkent);

export class DarkGraph {
  private cy: Core;
  private onNodeClick?: (char: Character) => void;

  constructor(container: HTMLElement) {
    this.cy = cytoscape({
      container,
      elements: [],
      style: this.buildStyle(),
      layout: { name: 'grid' },
      minZoom: 0.1,
      maxZoom: 3,
      wheelSensitivity: 0.3,
    });

    this.cy.on('tap', 'node', (evt: EventObject) => {
      const node = evt.target as NodeSingular;
      const char = node.data('character') as Character;
      if (char && this.onNodeClick) this.onNodeClick(char);
    });

    this.setupHoverEffects();

    // expose for debugging
    (window as unknown as Record<string, unknown>)['cy'] = this.cy;
  }

  load(characters: Character[], relationships: Relationship[]): void {
    const nodes = characters.map(c => ({
      data: {
        id: c.id,
        label: c.name,
        family: c.family,
        world: c.world,
        character: c,
        photo: c.appearances?.[0]?.photoUrl ?? '',
        bgSize: 'cover', // will be updated after image loads
      },
    }));

    const edges = relationships.map(r => ({
      data: {
        id: r.id,
        source: r.sourceId,
        target: r.targetId,
        type: r.type,
        label: r.type.replace('-', ' '),
        description: r.description ?? '',
      },
    }));

    this.cy.elements().remove();
    this.cy.add([...nodes, ...edges]);
    this.runLayout();

    // After load, set node dimensions to match each photo's aspect ratio
    const BASE = 56;
    this.cy.nodes().forEach(node => {
      const photo = node.data('photo') as string;
      if (!photo) return;
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return;
        const ratio = w / h;
        if (ratio > 1) {
          // landscape
          node.style({ width: Math.round(BASE * ratio), height: BASE });
        } else if (ratio < 1) {
          // portrait
          node.style({ width: BASE, height: Math.round(BASE / ratio) });
        } else {
          node.style({ width: BASE, height: BASE });
        }
      };
      img.src = photo;
    });
  }

  applyFilter(state: FilterState, allCharacters: Character[], _allRelationships: Relationship[]): void {
    const { timePeriods, families, worlds, searchQuery } = state;
    const q = searchQuery.toLowerCase();

    const visibleIds = new Set(
      allCharacters
        .filter(c => {
          if (families.size > 0 && !families.has(c.family)) return false;
          if (worlds.size > 0 && !worlds.has(c.world) && c.world !== 'Both') return false;
          if (timePeriods.size > 0) {
            const charYears = c.appearances.map(a => a.timePeriod);
            if (!charYears.some(y => timePeriods.has(y))) return false;
          }
          if (q && !c.name.toLowerCase().includes(q)) return false;
          return true;
        })
        .map(c => c.id)
    );

    this.cy.nodes().forEach(n => {
      const show = visibleIds.has(n.id());
      n.style('display', show ? 'element' : 'none');
    });

    this.cy.edges().forEach(e => {
      const src = visibleIds.has(e.data('source') as string);
      const tgt = visibleIds.has(e.data('target') as string);
      e.style('display', src && tgt ? 'element' : 'none');
    });
  }

  resetFilter(): void {
    this.cy.elements().style('display', 'element');
  }

  fitView(): void {
    this.cy.fit(this.cy.elements(':visible'), 40);
  }

  onCharacterClick(cb: (char: Character) => void): void {
    this.onNodeClick = cb;
  }

  highlightNode(id: string): void {
    this.cy.nodes().removeClass('highlighted');
    const node = this.cy.$(`#${id}`);
    node.addClass('highlighted');
    this.cy.animate({ fit: { eles: node, padding: 100 } }, { duration: 400 });
  }

  private runLayout(): void {
    const layout = this.cy.layout({
      name: 'cose-bilkent' as never,
      animate: true,
      animationDuration: 800,
      randomize: false,
      idealEdgeLength: 240,
      nodeRepulsion: 20000,
      nodeDimensionsIncludeLabels: true,
      // @ts-ignore
      edgeElasticity: 0.45,
      gravity: 0.08,
      gravityRange: 2.5,
      numIter: 2500,
      tile: true,
      tilingPaddingVertical: 30,
      tilingPaddingHorizontal: 30,
    } as never);

    layout.one('layoutstop', () => {
      this.cy.fit(this.cy.elements(':visible'), 40);
    });

    layout.run();
  }

  private buildStyle(): cytoscape.StylesheetStyle[] {
    return [
      {
        selector: 'node',
        style: {
          'background-color': (ele: NodeSingular) => FAMILY_COLORS[ele.data('family')] ?? '#888',
          'background-image': (ele: NodeSingular) => {
            const photo = ele.data('photo') as string;
            return photo || 'none';
          },
          'background-fit': 'cover' as never,
          'background-position-x': '50%',
          'background-position-y': '20%',
          'border-color': (ele: NodeSingular) => ele.data('world') === 'Eva' ? '#cc66ff' : ele.data('world') === 'Both' ? '#ffffff' : FAMILY_COLORS[ele.data('family')] ?? '#888',
          'border-width': 3,
          'border-opacity': 0.9,
          'label': 'data(label)',
          'color': '#ffffff',
          'font-size': '11px',
          'font-family': 'Inter, sans-serif',
          'text-valign': 'bottom',
          'text-halign': 'center',
          'text-margin-y': 6,
          'text-background-color': 'rgba(0,0,0,0.7)',
          'text-background-opacity': 1,
          'text-background-padding': '3px',
          'text-background-shape': 'roundrectangle',
          'width': 56,
          'height': 56,
          'shape': 'roundrectangle',
          'corner-radius': 6 as never,
          'transition-property': 'border-color, width, height' as never,
          'transition-duration': '0.2s' as never,
          'overlay-padding': '6px',
        },
      },
      {
        selector: 'node.highlighted',
        style: {
          'width': 60,
          'height': 60,
          'border-color': '#ffffff',
          'border-width': 4,
          'z-index': 9999,
        },
      },
      {
        selector: 'node:selected',
        style: {
          'border-color': '#ffffff',
          'border-width': 3,
        },
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': (ele: cytoscape.EdgeSingular) => RELATIONSHIP_COLORS[ele.data('type')] ?? '#888',
          'target-arrow-color': (ele: cytoscape.EdgeSingular) => RELATIONSHIP_COLORS[ele.data('type')] ?? '#888',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'opacity': 0.7,
          'label': '',
          'transition-property': 'opacity' as never,
          'transition-duration': '0.2s' as never,
        },
      },
      {
        selector: 'edge:hover',
        style: {
          'opacity': 1,
          'width': 3,
          'label': 'data(label)',
          'color': '#ffffff',
          'font-size': '10px',
          'text-background-color': 'rgba(0,0,0,0.8)',
          'text-background-opacity': 1,
          'text-background-padding': '3px',
        },
      },
    ];
  }

  private setupHoverEffects(): void {
    this.cy.on('mouseover', 'node', (evt: EventObject) => {
      const node = evt.target as NodeSingular;
      node.connectedEdges().style('opacity', 1);
      node.neighborhood('node').style('border-color', '#fff');
      node.neighborhood('node').style('border-width', 2);
    });

    this.cy.on('mouseout', 'node', (evt: EventObject) => {
      const node = evt.target as NodeSingular;
      node.connectedEdges().style('opacity', 0.7);
      node.neighborhood('node').style('border-color', '');
      node.neighborhood('node').style('border-width', '');
    });
  }
}
