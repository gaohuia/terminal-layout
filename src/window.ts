import { terminal } from "terminal-kit";

import { Container } from "./container";
import { Pos, RenderContext, Size } from "./context";

class Window extends Container {

  constructor() {
    super();
  }

  loop() {
    setInterval(() => {
      const context = new RenderContext(new Pos(0, 0), new Size(terminal.width, terminal.height));
      context.clear();
      this.layout(terminal.width, terminal.height);
      this.render(context);
      terminal.moveTo(1, terminal.height - 1);
    }, 100);
  }

}

export {
  Window
}