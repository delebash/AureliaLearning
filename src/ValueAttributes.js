//Single Value

// import {bindable, inject} from 'aurelia-framework';
// @inject(Element)
// export class SingleValueAttribCustomAttribute {
//   static inject = [Element];
//   defaultColor = 'orange';
//   constructor(element) {
//
//     this.element = element;
//     this.element.style.width = this.element.style.height = '100px';
//     this.element.style.backgroundColor = this.defaultColor;
//   }
//
//   valueChanged(color) {
//     if(color.trim() !== '') {
//       this.element.style.backgroundColor = color;
//     }
//   }
// }


//Options Binding
// import {bindable, inject} from 'aurelia-framework';
//
// @inject(Element)
// export class OptionsCustomAttribute {
//   @bindable sideLength;
//   @bindable color;
//
//   constructor(element){
//     this.element = element;
//   }
//
//   sideLengthChanged(newValue, oldValue){
//     this.element.style.width = this.element.style.height = `${newValue}px`;
//   }
//
//   colorChanged(newValue, oldValue){
//     this.element.style.backgroundColor = newValue;
//   }
// }


//Dynamic Options
import {dynamicOptions, inject} from 'aurelia-framework';

@dynamicOptions
@inject(Element)
export class DynamicCustomAttribute {
  constructor(element){
    this.element = element;
  }

  propertyChanged(name, newValue, oldValue){
    switch(name){
      case 'fill':
        this.element.style.backgroundColor = newValue;
        break;
      case 'size':
        this.element.style.width = this.element.style.height = `${newValue}px`;
        break;
      default:
        this.element.style[name] = value;
        break;
    }
  }
}
