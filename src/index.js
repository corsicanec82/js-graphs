// @ts-check

import _ from 'lodash';

export const makeJoints = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent]
    .filter((n) => n && !_.isArray(n));

  return {
    [leaf]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...makeJoints(c, leaf) }), {}),
  };
};

export const buildTreeFromLeaf = (joints, leaf) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbors = joints[current]
      .filter((n) => !checked.includes(n))
      .map((n) => iter(n, checked));
    return _.isEmpty(neighbors) ? [current] : [current, neighbors];
  };

  return iter(leaf, []);
};

export const sortJoints = (joints) => {
  const sortLeaf = (acc, neighbors, leaf) => ({ ...acc, [leaf]: _.sortBy(neighbors) });
  return _.reduce(joints, sortLeaf, {});
};

export const sortTree = (tree) => {
  const [root] = tree;
  const joints = makeJoints(tree);
  const sortedJoints = sortJoints(joints);

  return buildTreeFromLeaf(sortedJoints, root);
};
