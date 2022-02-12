import { Block } from "./block";
import { Pos, RenderContext, Size } from "./context";
import { Layout } from "./layout";

interface ContainerInterface extends Layout {
  layout(width: number, height: number) : void;
  addChild(child : ContainerInterface) : void;
  removeChild(child : ContainerInterface) : void;
  
}

class Container implements ContainerInterface {
  protected children : Array<ContainerInterface>;
  protected width : number = 0;
  protected height : number = 0;

  constructor()
  {
    this.children = new Array<ContainerInterface>();
  }

  getExpectedWidth() {
    return null;
  }

  getExpectedHeight() {
    return null;
  }

  getWidth() : number {
    return this.width;
  }

  getHeight() : number {
    return this.height;
  }

  layout(width : number, height: number)
  {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.layout(width, height);
    }

    this.width = width;
    this.height = height;
  }

  addChild(child: ContainerInterface)
  {
    this.children.push(child);
  }

  removeChild(child: ContainerInterface ) {
    let children = [];

    for (var i = 0; i < this.children.length; i ++ ) {
      if (this.children[i] !== child) {
        children.push(this.children[i]);
      }
    }

    return children;
  }

  render(context : RenderContext) {
    for (let i = 0; i < this.children.length; i ++ ) {
      this.children[i].render(context);
    }
  }
}

class VerticalContainer extends Container {
  protected weights: Array<number>;

  constructor(weights: Array<number>)
  {
    super();
    this.weights = weights;
  }

  addChild(child: ContainerInterface): void {
    if (this.children.length >= this.weights.length) {
      throw new Error("Can not add more than " + this.weights.length + " children");
    }

    super.addChild(child);
  }

  layout(width: number, height: number): void {
    let sum : number = 0;

    for ( let i = 0; i < this.weights.length; i ++ ) {
      sum = sum + this.weights[i];
    }

    for ( let i = 0; i < this.children.length; i ++ ) {
      let weight = this.weights[i];
      let size = Math.round(height * weight / sum);
      this.children[i].layout(width, size);
    }

    this.width = width;
    this.height = height;
  }

  render(context: RenderContext): void {
    // console.log("Vertical Layout Conainer");
    var sum = 0;

    for ( let i = 0; i < this.children.length; i ++ ) {
      let newContext = new RenderContext(
        new Pos(context.getOrigin().x, context.getOrigin().y + sum), 
        new Size(this.children[i].getWidth(), this.children[i].getHeight())
      );

      this.children[i].render(newContext);
      sum += this.children[i].getHeight();
    }
  }
}

export {
  Container,
  VerticalContainer,
}