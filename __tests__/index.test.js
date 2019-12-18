import {
  makeGraph, buildTreeFromLeaf, sortGraph, sortTree,
} from '../src';

describe('Graphs', () => {
  const tree = ['A', [
    ['C', [
      ['F', [
        ['J', [
          ['O'],
          ['N'],
        ]],
        ['I', [
          ['M'],
        ]],
      ]],
      ['G', [
        ['K'],
        ['L'],
      ]],
    ]],
    ['B', [
      ['E'],
      ['D', [
        ['H'],
      ]],
    ]],
  ]];

  let graph;

  it('#makeGraph', () => {
    const expected = {
      A: ['C', 'B'],
      C: ['F', 'G', 'A'],
      F: ['J', 'I', 'C'],
      J: ['O', 'N', 'F'],
      O: ['J'],
      N: ['J'],
      I: ['M', 'F'],
      M: ['I'],
      G: ['K', 'L', 'C'],
      K: ['G'],
      L: ['G'],
      B: ['E', 'D', 'A'],
      E: ['B'],
      D: ['H', 'B'],
      H: ['D'],
    };
    graph = makeGraph(tree);
    expect(graph).toEqual(expected);
  });

  it('#buildTreeFromLeaf', () => {
    const expected = ['F', [
      ['J', [
        ['O'],
        ['N'],
      ]],
      ['I', [
        ['M'],
      ]],
      ['C', [
        ['G', [
          ['K'],
          ['L'],
        ]],
        ['A', [
          ['B', [
            ['E'],
            ['D', [
              ['H'],
            ]],
          ]],
        ]],
      ]],
    ]];

    const actual = buildTreeFromLeaf(graph, 'F');
    expect(actual).toEqual(expected);
  });

  it('#sortGraph', () => {
    const expected = {
      A: ['B', 'C'],
      C: ['A', 'F', 'G'],
      F: ['C', 'I', 'J'],
      J: ['F', 'N', 'O'],
      O: ['J'],
      N: ['J'],
      I: ['F', 'M'],
      M: ['I'],
      G: ['C', 'K', 'L'],
      K: ['G'],
      L: ['G'],
      B: ['A', 'D', 'E'],
      E: ['B'],
      D: ['B', 'H'],
      H: ['D'],
    };
    const actual = sortGraph(graph);
    expect(actual).toEqual(expected);
  });

  it('#sortTree', () => {
    const expected = ['A', [
      ['B', [
        ['D', [
          ['H'],
        ]],
        ['E'],
      ]],
      ['C', [
        ['F', [
          ['I', [
            ['M'],
          ]],
          ['J', [
            ['N'],
            ['O'],
          ]],
        ]],
        ['G', [
          ['K'],
          ['L'],
        ]],
      ]],
    ]];

    const actual = sortTree(tree);
    expect(actual).toEqual(expected);
  });
});
