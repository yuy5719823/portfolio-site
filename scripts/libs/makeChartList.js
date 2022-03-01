class MakeChartList {
  constructor() {
    this._init();
    this.languageSet;
  }

  _init() {
    new FetchSkils().fetchData().then((data) => {
      this.languageSet = data;
      data.forEach((data) => {
        this._createChartNode(data.id, this._converseCountToPercentage(data.count), data.language);
      });
    });
  }

  animateChart() {
    this.languageSet.forEach((data) => {
      this._createChart(this._converseCountToPercentage(data.count), `#chart-${data.id}`);
    });
  }

  _createChart(percentage, el) {
    const data = {
      datasets: [
        {
          data: [percentage, 100 - percentage],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(0,0,0,0.3)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(0,0,0,0)"],
          borderWidth: 0,
          cutout: "60%",
        },
      ],
    };

    const ctx = document.querySelector(el);

    new Chart(ctx, {
      type: "doughnut",
      data: data,
    });
  }

  _createChartNode(index, percent, language) {
    const skilList = document.querySelector(".skilList");
    skilList.innerHTML += `
    <div class="chart">
    <div class="chart-main">
      <canvas id="chart-${index}"> </canvas>
      <span class="chart-percentage">${percent}%</span>
    </div>
    <p class="language">${language}</p>
  </div>`;
  }

  _converseCountToPercentage = (count) => {
    if (count > 10) {
      return 100;
    }
    return count * 10;
  };
}
