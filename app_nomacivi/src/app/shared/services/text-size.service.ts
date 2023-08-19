import { Injectable } from "@angular/core";
import { Size, SizeOptions } from "../constants/size-options";

const BASE_SIZE = {
  sm1: 10, // --font-size-sizeSM1
  sm2: 12, // --font-size-sizeSM2
  a: 14, // --font-size-sizeA
  b: 15, // --font-size-sizeB
  c: 16, // --font-size-sizeC
  d: 20, // --font-size-sizeD
  e: 24, // --font-size-sizeE
  f: 30, // --font-size-sizeF
  g: 32  // --font-size-sizeG
}

@Injectable({
  providedIn: 'root'
})
export class TextSizeService {

  private size: Size = SizeOptions.normal;
  private sizeTarget: Record<string, number> = {}; 
  
  getSize():Size {
    return this.size;
  }

  setSize(size: Size):void {
    this.size = size;
    const addAmount = {small:-2, normal:0, medium:2, big:4, extra:6};
    this.sizeTarget = {...BASE_SIZE};
    Object.keys(this.sizeTarget).forEach(value => {
        this.sizeTarget[value] = BASE_SIZE[value as keyof typeof BASE_SIZE] + addAmount[this.size]
      })
  }

  getTargetSizes():Record<string, number> {
    return this.sizeTarget; 
  }

  mapNumberToSizeOption(number: number): Size {
    switch (number) {
      case 0:
        return SizeOptions.small;
      case 1:
        return SizeOptions.normal;
      case 2:
        return SizeOptions.medium;
      case 3:
        return SizeOptions.big;
      case 4:
        return SizeOptions.extra;
      default:
        throw new Error(`Invalid number: ${number}`);
    }
  }

  mapSizeOptionToNumber(size: Size): number {
    switch (size) {
      case SizeOptions.small:
        return 0;
      case SizeOptions.normal:
        return 1;
      case SizeOptions.medium:
        return 2;
      case SizeOptions.big:
        return 3;
      case SizeOptions.extra:
        return 4;
      default:
        throw new Error(`Invalid size option: ${size}`);
    }
  }
}