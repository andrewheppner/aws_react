import React, { Component } from "react";
import posed from "react-pose";
import { transform, value } from "popmotion";
import CodeIcon from "@material-ui/icons/Code";

const TRIGGER_DISTANCE = 300;
const OPACITY_DISTANCE = 600;

const { pipe, interpolate, clamp, blendColor } = transform;

const RevealedPanel = posed.div({
  passive: {
    backgroundColor: [
      "x",
      pipe(
        interpolate([0, -TRIGGER_DISTANCE], [0, 1]),
        clamp(0, 1),
        blendColor("#ccc", "#4D11DA")
      ),
      true
    ]
  }
});

const OpacityReveal = posed.div({
  passive: {
    opacity: [
      "x",
      pipe(
        interpolate([0, -OPACITY_DISTANCE], [0, 1]),
        clamp(0, 1)
      ),
      true
    ]
  }
});

const Swipeable = posed.div({
  draggable: "x",
  dragBounds: {
    right: 0
  },
  dragEnd: {
    transition: ({ from, to, velocity }) => {
      if (from <= -TRIGGER_DISTANCE) {
        return {
          type: "tween",
          ease: "linear",
          from,
          to: -window.innerWidth,
          duration: 300
        };
      } else {
        return {
          type: "spring",
          from,
          to,
          velocity,
          stiffness: 600,
          damping: 50
        };
      }
    }
  }
});

export class BlackSquirrel extends Component {
  x = value(0);
  y = value(0);
  z = value(0);

  render() {
    const v = { x: this.x };
    const v2 = { x: this.y };
    const v3 = { x: this.z };
    return (
      <div>
        <h2>Black Squirrel information</h2>
        <div className="relative">
          <RevealedPanel parentValues={v} className="h3 w-50" />
          <Swipeable
            values={v}
            className="h3 w-50 bg-moon-gray absolute top-0 left-0"
          />
        </div>
        <div className="mt2 relative">
          <RevealedPanel
            parentValues={v2}
            className="h3 w-50 pr3 flex items-center justify-end"
          >
            <CodeIcon />
          </RevealedPanel>
          <Swipeable
            values={v2}
            className="h3 w-50 bg-moon-gray absolute top-0 left-0"
          />
        </div>
        <div className="mt2 relative">
          <div className="h3 w-50 pr3 flex items-center justify-end bg-yellow">
            <OpacityReveal parentValues={v3}>
              <CodeIcon />
            </OpacityReveal>
          </div>
          <Swipeable
            values={v3}
            className="h3 w-50 bg-moon-gray absolute top-0 left-0"
          />
        </div>
      </div>
    );
  }
}
