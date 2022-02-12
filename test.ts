
import {
  VerticalContainer,
  Pos,
  RenderContext,
  Size,
  ListView,
  Text,
} from "./index";
import { Window } from "./src/window";


const win = new Window();

const container = new VerticalContainer([5, 5]);

let v = new Text("AAA++");

container.addChild(v);
container.addChild(new ListView(['+++Hello World', '123123123', 'MEEEAGE']));

win.addChild(container);
win.loop();

let i = 0;

setInterval(function(){
  v.setText("AAAA + " + i);
  i ++ ;
}, 100);

