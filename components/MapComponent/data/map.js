export default function getData() {
  return {
    textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 300,
    },
    backgroundColor: "#fff",
    tooltip: {
      trigger: "item",
    },
    geo: {
      map: "world",
    },
    series: [
      {
        type: "map",
        mapType: "world",
        select: {
          itemStyle: {
            color: "rgba(255,215,0,0.8)",
          },
        },
      },
    ],
  };
}
