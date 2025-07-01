/** Дженерики */

const array: Array<number | string | boolean> = [1, 'a', true]

const promise = new Promise<string>(res => {
  setTimeout(() => {
    res('resolved')
  })
})

promise.then(value => value.trim())

/** --- */

function dub<T>(array: T[]) {
  return array.concat(array)
}

function fill<T>(array: any[], value: T) {
  return array.fill(value)
}

function merge<T, R>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

const res1 = dub(['a', 'b'])
const res2 = dub([1, 2])

const res3 = fill([1, 2], 'str')

const res5 = merge({ a: 1 }, { b: 's' })

/** --- */

function log<T extends string | number>(data: T) {
  console.log(data)
  return data
}

let res6 = <number>log(42)
let res7 = log(42) as number

/** --- */

const obj = { a: 1, b: 2, c: 's' }

function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const res8 = getValue(obj, 'c')

/** --- */

class Col<T extends number | string> {
  constructor(private _items: T[]) {}

  add(value: T) {
    this._items.push(value)
  }

  get items() {
    return this._items
  }
}

const col1 = new Col<number>([1, 2, 3])
const col2 = new Col<string>(['a', 'b'])
col1.add(2)

class List<R> extends Col<string> {
  constructor(public type: R) {
    super(['a'])
  }
}

const list1 = new List('str')
const list2 = new List(100)

list2.add('100')

/***/
/** Классы */
/** 9 */
abstract class Logger {
  abstract log(message: string): void

  table(data: object) {
    console.table(data)
  }
}

class MessageLogger extends Logger {
  log(message: string): void {
    console.log(message)
  }
}

const logger = new MessageLogger()

logger.log('hello!')
logger.table({ a: 1, b: 42 })

/** 8 */

interface Lifecycle {
  hasChanged: boolean
  onInit(): void

  onDestroy?(a: boolean): void
}

class Comp implements Lifecycle {
  hasChanged: boolean = true
  onInit(): void {
    console.log(this.hasChanged)
  }

  // onDestroy(a: boolean): void {}
}

/** 7 */
class Figure {
  static BASE_TYPE = 'FIG'
  private id: number

  constructor(public size: number, public color: string) {
    this.id = Math.random()
  }

  protected getId(): number {
    return this.id
  }
}

class Box extends Figure {
  // #weight: number
  static readonly TYPE = 'BOX'

  static logId() {
    console.log(Math.random())
  }

  getInfo() {
    return {
      size: this.size,
      color: this.color,
      id: this.getId(),
      // weight: this.#weight,
    }
  }
}

const box = new Box(10, 'blue')

Box.logId()

console.log(box.getInfo(), Box.BASE_TYPE)

/** Interface */
interface ComponentProps {
  tpl: string
  sel: string
}

function Component(props: ComponentProps) {
  return function (target: any) {
    const node = document.querySelector(props.sel)
    const instance = new target('Test')
    if (node) {
      node.insertAdjacentHTML('afterbegin', props.tpl)
      node.querySelector('span')!.textContent = instance.name
    }
  }
}

@Component({
  sel: '#app',
  tpl: `
    <h1>Component</h1>
    <h2><span></span></h2>
  `,
})
class User {
  constructor(public name: string) {
    console.log(this.name)
  }
}

// const user = new User('Test')

/***/
/** Namespace */

namespace Lib {
  export const NUM = 42

  const prConst = 'test'

  export const NUM2 = prConst + ' test'

  export interface ILib {
    log(): void
  }
}

console.log(Lib.NUM2)
