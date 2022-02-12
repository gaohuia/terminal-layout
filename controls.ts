import { Block } from "./block";
import { RenderContext } from "./context";

class Text extends Block {
  private text : string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  render(context: RenderContext): void {
    context.line(0, this.text);
  }

  setText(text)
  {
    this.text = text;
  }
}

class ListView extends Block {
  private data : Array<string>;

  constructor(data : Array<string>)
  {
    super();
    this.data = data;
  }

  setData(data: Array<string>)
  {
    this.data = data;
  }

  render(context: RenderContext): void {
    let limit = Math.max(this.height, this.data.length);

    for (let i = 0; i < limit; i ++ ) {
      context.line(i, this.data[i]);
    }
  }
}



export {
  ListView, Text
}