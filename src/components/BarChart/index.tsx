import React from "react";

type BarItem = any[];

interface IBarChartProps {
  stat: BarItem[];
}

const BarChart = ({ stat }: IBarChartProps) => {
  const columnHeight = 40;
  const itemPerPixel = 100;
  const svgWidth = `100%`;
  const rowsYGap = 5;
  const textXGap = 8;
  const textYGap = textXGap * 2;

  return (
    <svg
      className="chart"
      width={svgWidth}
      height={columnHeight * stat.length}
      aria-labelledby="title desc"
      role="img"
    >
      <title id="title">A bar chart showing information</title>
      {stat.map((item, i) => {
        const countItem: number = item[1];
        const nameItem: string = item[0];
        return (
          <g className="bar" key={countItem + nameItem}>
            <rect
              width={countItem * itemPerPixel}
              height={columnHeight - rowsYGap}
              y={columnHeight * i}
            />
            <text
              x={countItem * itemPerPixel + textXGap}
              y={columnHeight * i + textYGap}
              dy=".35em"
            >
              {nameItem} {countItem}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default BarChart;
