import { Snack } from './models/Vendr.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  snacks = [
    new Snack({
      emoji: '🍫',
      name: 'Sample',
      price: 3.50,
      imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    }),
    new Snack({
      emoji: '🍫',
      name: 'Sample',
      price: 3.50,
      imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    }),
    new Snack({
      emoji: '🍫',
      name: 'Sample',
      price: 3.50,
      imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    }),
    new Snack({
      emoji: '🍫',
      name: 'Sample',
      price: 3.50,
      imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'
    })
  ]

  money = 0




}

export const AppState = createObservableProxy(new ObservableAppState())