import { useState } from "react";
import { Container, Graphics, Text } from "@pixi/react";
import { TextStyle } from "pixi.js";

interface ElevatorProps {
  x: number;
  y: number;
  floors: number;
  currentFloor: number;
}

const Elevator = ({ x, y, floors, currentFloor }: ElevatorProps) => {
  const [position, setPosition] = useState(y + (floors - currentFloor) * 50);

  return (
    <Container x={x} y={position}>
      {/* Корпус лифта */}
      <Graphics
        draw={(g) => {
          g.clear();
          g.beginFill(0x666666);
          g.drawRect(0, 0, 80, 100);
          g.endFill();
        }}
      />
      {/* Двери */}
      <Graphics
        draw={(g) => {
          g.beginFill(0xaaaaaa);
          g.drawRect(5, 5, 30, 90);
          g.drawRect(45, 5, 30, 90);
          g.endFill();
        }}
      />
      {/* Отображение этажа */}
      <Text
        text={`Этаж: ${currentFloor}`}
        x={10}
        y={-20}
        style={
          new TextStyle({
            fill: "#ffffff",
            fontSize: 14,
          })
        }
      />
    </Container>
  );
};

export default Elevator;
