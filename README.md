# js-graphs

[![github action status](https://github.com/hexlet-components/js-graphs/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-graphs/actions)

## Install

```sh
npm install @hexlet/graphs
```

## Usage example

```javascript
import {
  makeJoints, buildTreeFromLeaf, sortTree,
} from '@hexlet/graphs';

const tree = ['B', [
  ['D'],
  ['A', [
    ['C', [
      ['F'],
      ['E'],
    ]],
  ]],
]];

const joints = makeJoints(tree);
const transformed = buildTreeFromLeaf(joints);
// ['C', [
//   ['F'],
//   ['E'],
//   ['A', [
//     ['B', [
//       ['D'],
//     ]],
//   ]],
// ]];

sortTree(transformed);
// ['C', [
//   ['A', [
//     ['B', [
//       ['D'],
//     ]],
//   ]],
//   ['E'],
//   ['F'],
// ]];
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-points/tree/master/docs)

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=exercises-javascript)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=exercises-javascript).
