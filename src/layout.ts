import { RenderContext } from "./context";

interface Layout {
  getExpectedHeight();
  getExpectedWidth();
  getWidth();
  getHeight();
  render(context: RenderContext): void;
}

export {
  Layout
}