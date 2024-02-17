import { LayerConfig, LayerType } from './layer'

type DesignData = {
  _id: string
  name: string
  layers: Record<string, LayerConfig>
}

export const data: DesignData = {
  _id: '65686b17593a9c18ecca7ed7',
  name: 'Untitled Design',
  layers: {
    ROOT: {
      type: 'root',
      props: {
        type: 'root',
        position: {
          x: 0,
          y: 0,
        },
        boxSize: {
          width: 600,
          height: 600,
        },
      },
      children: ['9bff0ff0-caa4-442c-a103-2f5136213544', '9bff0ff0-caa4-442c-a103-2f5136213545'],
      parent: null,
    },
    '9bff0ff0-caa4-442c-a103-2f5136213544': {
      type: 'text',
      props: {
        type: 'text',
        text: '<p>Untitled Text</p>',
        position: {
          x: 50,
          y: 100,
        },
        boxSize: {
          width: 350,
          height: 50,
          x: 50,
          y: 50,
        },
        rotate: 0,
        opacity: 100,
        fontSize: 18,
      },
      children: [],
      parent: 'ROOT',
    },
    '9bff0ff0-caa4-442c-a103-2f5136213545': {
      type: 'text',
      props: {
        type: 'text',
        text: '<p>Another Untitled Text</p>',
        position: {
          x: 100,
          y: 300,
        },
        boxSize: {
          width: 350,
          height: 50,
          x: 50,
          y: 50,
        },
        rotate: 0,
        opacity: 100,
        fontSize: 18,
      },
      children: [],
      parent: 'ROOT',
    },
  },
}
