import { Container } from "./container";
import { RenderContext } from "./context";

class Block extends Container{

  constructor() {
    super();
  }

  render(context: RenderContext) {
    context.line(0, "HELLO WORLD");
    // console.log(context.getOrigin(), context.getSize());
  }
}

export {
  Block
}