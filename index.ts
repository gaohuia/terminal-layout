
import { terminal } from "terminal-kit";

import { Block } from "./block";
import { VerticalContainer } from "./container";
import { Pos, RenderContext, Size } from "./context";
import { ListView, Text } from "./controls";

const container = new VerticalContainer([5, 5]);

let v = new Text("AAA++");

container.addChild(v);
container.addChild(new ListView(['+++Hello World', '123123123', 'MEEEAGE']));

let i = 0;

setInterval(function(){
  const context = new RenderContext(new Pos(0, 0), new Size(terminal.width, terminal.height));
  context.clear();
  container.layout(terminal.width, terminal.height);
  container.render(context);
  terminal.moveTo(1, terminal.height - 1);

  v.setText("AAAA + " + i);
  i ++ ;
}, 100);

