// @ts-check

import _ from 'lodash';

export const makeGraph = (tree, parent, leafs = {}) => {
  const [leaf, children] = tree;

  if (!children) {
    return { ...leafs, [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent]
    .filter((n) => n && !_.isArray(n));

  return {
    ...leafs,
    [leaf]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...makeGraph(c, leaf) }), {}),
  };
};

export const buildTreeFromLeaf = (graph, leaf) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbors = graph[current]
      .filter((n) => !checked.includes(n))
      .map((n) => iter(n, checked));
    return _.isEmpty(neighbors) ? [current] : [current, neighbors];
  };

  return iter(leaf, []);
};

export const sortGraph = (graph) => {
  const sortLeaf = (acc, neighbors, leaf) => ({ ...acc, [leaf]: _.sortBy(neighbors) });
  return _.reduce(graph, sortLeaf, {});
};

export const sortTree = (tree) => {
  const [root] = tree;
  const graph = makeGraph(tree);
  const sortedGraph = sortGraph(graph);

  return buildTreeFromLeaf(sortedGraph, root);
};
