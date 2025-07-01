"use strict";
/** Дженерики */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const array = [1, 'a', true];
const promise = new Promise(res => {
    setTimeout(() => {
        res('resolved');
    });
});
promise.then(value => value.trim());
/** --- */
function dub(array) {
    return array.concat(array);
}
function fill(array, value) {
    return array.fill(value);
}
function merge(a, b) {
    return Object.assign({}, a, b);
}
const res1 = dub(['a', 'b']);
const res2 = dub([1, 2]);
const res3 = fill([1, 2], 'str');
const res5 = merge({ a: 1 }, { b: 's' });
/** --- */
function log(data) {
    console.log(data);
    return data;
}
let res6 = log(42);
let res7 = log(42);
/** --- */
const obj = { a: 1, b: 2, c: 's' };
function getValue(obj, key) {
    return obj[key];
}
const res8 = getValue(obj, 'c');
/** --- */
class Col {
    constructor(_items) {
        this._items = _items;
    }
    add(value) {
        this._items.push(value);
    }
    get items() {
        return this._items;
    }
}
const col1 = new Col([1, 2, 3]);
const col2 = new Col(['a', 'b']);
col1.add(2);
class List extends Col {
    constructor(type) {
        super(['a']);
        this.type = type;
    }
}
const list1 = new List('str');
const list2 = new List(100);
list2.add('100');
/***/
/** Классы */
/** 9 */
class Logger {
    table(data) {
        console.table(data);
    }
}
class MessageLogger extends Logger {
    log(message) {
        console.log(message);
    }
}
const logger = new MessageLogger();
logger.log('hello!');
logger.table({ a: 1, b: 42 });
class Comp {
    constructor() {
        this.hasChanged = true;
        // onDestroy(a: boolean): void {}
    }
    onInit() {
        console.log(this.hasChanged);
    }
}
/** 7 */
class Figure {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.id = Math.random();
    }
    getId() {
        return this.id;
    }
}
Figure.BASE_TYPE = 'FIG';
class Box extends Figure {
    static logId() {
        console.log(Math.random());
    }
    getInfo() {
        return {
            size: this.size,
            color: this.color,
            id: this.getId(),
            // weight: this.#weight,
        };
    }
}
// #weight: number
Box.TYPE = 'BOX';
const box = new Box(10, 'blue');
Box.logId();
console.log(box.getInfo(), Box.BASE_TYPE);
function Component(props) {
    return function (target) {
        const node = document.querySelector(props.sel);
        const instance = new target('Test');
        if (node) {
            node.insertAdjacentHTML('afterbegin', props.tpl);
            node.querySelector('span').textContent = instance.name;
        }
    };
}
let User = class User {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
};
User = __decorate([
    Component({
        sel: '#app',
        tpl: `
    <h1>Component</h1>
    <h2><span></span></h2>
  `,
    })
], User);
// const user = new User('Test')
/** Namespace */
var Lib;
(function (Lib) {
    Lib.NUM = 42;
    const prConst = 'test';
    Lib.NUM2 = prConst + ' test';
})(Lib || (Lib = {}));
console.log(Lib.NUM2);
//# sourceMappingURL=app.js.map