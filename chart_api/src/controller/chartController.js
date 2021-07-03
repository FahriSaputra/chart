const { Chart } = require("../../db/models");

exports.getChart = async (req, res) => {
  try {
    const { year } = req.params;
    const chart = await Chart.findAll({ where: { year } });

    const valueChart = [];

    for (let i of chart) {
      valueChart.push(i.value);
    }

    res.send({
      status: "Success",
      data: valueChart,
      detail: chart,
    });
    console.log(valueChart);
  } catch (err) {
    res.status(500).send({
      status: "Error",
      message: err.message,
    });
  }
};
