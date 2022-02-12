import { terminal } from "terminal-kit";

class Pos {
  public x: number;
  public y: number;

  constructor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }
}

class Size {
  public width : number;
  public height: number;

  constructor(width : number, height : number) {
    this.width = width;
    this.height = height;
  }
}

class RenderContext {
  private origin : Pos;
  private size : Size;

  constructor(origin : Pos, size: Size, ) {
    this.origin = origin;
    this.size = size;
  }

  public getOrigin() : Pos
  {
    return this.origin;
  }

  public getSize() : Size
  {
    return this.size;
  }

  line(i : number, str: string)
  {
    terminal.moveTo(this.origin.x, this.origin.y + i);
    terminal(str);
  }

  clear()
  {
    let emptyLine = new Array(this.size.width);
    emptyLine.fill(" ");

    let empty = emptyLine.join("");

    for (let i = 0; i < this.size.height; i ++ ) {
      terminal.moveTo(this.origin.x, this.origin.y + i);
      terminal(empty);
    }
  }
}

export {
  RenderContext,
  Pos,
  Size
}