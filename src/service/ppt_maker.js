import PptxGenJs from "pptxgenjs";

class PptMaker {
  constructor() {
    // Create a new Presentation
    this.pptx = new PptxGenJs();
  }

  // 만다르트 ppt
  mandart() {
    // Add a new Slide to the Presentaion
    let slide = this.pptx.addSlide();

    let tabOpts1 = {
      x: 0.5,
      y: 0.5,
      w: "90%",
      h: 5,
      fill: { color: "F9F9F9" },
      color: "3D3D3D",
      fontSize: 8,
      border: { pt: 2, color: "FFFFFF" },
      align: "center",
      valign: "middle",
    };

    let arrTabRows1 = [
      ["", "", "", "", "", "", "", "", ""],
      [
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
      [
        "",
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        { text: "", options: { fill: { color: "#C983FF" } } },
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        "",
      ],
      [
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        {
          text: "Destiny is no matter of chance",
          options: { fill: { color: "#FFE9FF" } },
        },
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      [
        "",
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        { text: "", options: { fill: { color: "#C983FF" } } },
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
      [
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
    ];

    // NOTE: Follow HTML conventions for colspan/rowspan cells - cells spanned are left out of arrays - see above
    // The table above has 6 columns, but each of the 3 rows has 4-5 elements as colspan/rowspan replacing the missing ones
    // (e.g.: there are 5 elements in the first row, and 6 in the second)
    slide.addTable(arrTabRows1, tabOpts1);

    // Send the PPTX Presentation to the user, using your choice of file name
    this.pptx.writeFile({ fileName: "만다르트 계획표" });
  }

  month() {
    // Add a new Slide to the Presentaion
    let slide = this.pptx.addSlide();

    let tabOpts1 = {
      x: 0,
      y: 0,
      rowH: [0.25, 0.5, 0.25, 1, 0.25, 0.4, 0.4, 0.4, 0.4, 0.4, 1.5],
      w: 10,
      h: 1,
      fill: { color: "F9F9F9" },
      color: "3D3D3D",
      fontSize: 8,
      border: { pt: 2, color: "FFFFFF" },
      align: "left",
      valign: "middle",
    };

    let arrTabRows1 = [
      [
        {
          text: " ⭐️       월의 나 (확언)",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 10,
          },
        },
      ],
      [{ text: "", options: { colspan: 10 } }],
      [
        {
          text: " ⭐️       월 목표",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 8,
          },
        },
        {
          text: "보상수치",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 2,
            align: "center",
          },
        },
      ],
      [
        { text: "", options: { colspan: 8 } },
        { test: "", options: { colspan: 2 } },
      ],
      [
        {
          text: " ⭐️       월 할 일",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 10,
          },
        },
      ],
      [
        {
          text: "고정된 일",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 8,
            rowspan: 5,
            colspan: 1,
            align: "center",
          },
        },
        {
          text: "1주차",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "2주차",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "3주차",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "4주차",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "5주차",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "월 중 해야 할 일",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 8,
            rowspan: 5,
            colspan: 1,
            align: "center",
          },
        },
        {
          text: "",
          options: {
            colspan: 9,
          },
        },
      ],
    ];

    // NOTE: Follow HTML conventions for colspan/rowspan cells - cells spanned are left out of arrays - see above
    // The table above has 6 columns, but each of the 3 rows has 4-5 elements as colspan/rowspan replacing the missing ones
    // (e.g.: there are 5 elements in the first row, and 6 in the second)
    slide.addTable(arrTabRows1, tabOpts1);

    // Send the PPTX Presentation to the user, using your choice of file name
    this.pptx.writeFile({ fileName: "월간계획표" });
  }

  week() {
    // Add a new Slide to the Presentaion
    let slide = this.pptx.addSlide();

    let tabOpts1 = {
      x: 0,
      y: 0,
      rowH: [0.25, 0.5, 0.25, 1, 0.25, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 1.5],
      w: 10,
      h: 1,
      fill: { color: "F9F9F9" },
      color: "3D3D3D",
      fontSize: 8,
      border: { pt: 2, color: "FFFFFF" },
      align: "left",
      valign: "middle",
    };

    let arrTabRows1 = [
      [
        {
          text: " ⭐️   월   주차의 나 (확언)",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 10,
          },
        },
      ],
      [{ text: "", options: { colspan: 10 } }],
      [
        {
          text: " ⭐️   월   주차 목표",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 8,
          },
        },
        {
          text: "보상수치",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 2,
            align: "center",
          },
        },
      ],
      [
        { text: "", options: { colspan: 8 } },
        { test: "", options: { colspan: 2 } },
      ],
      [
        {
          text: " ⭐️   월   주차 할 일",
          options: {
            fill: { color: "#C983FF" },
            bold: true,
            fontSize: 10,
            colspan: 10,
          },
        },
      ],
      [
        {
          text: "고정된 일",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 8,
            rowspan: 7,
            colspan: 1,
            align: "center",
          },
        },
        {
          text: "     (월)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (화)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (수)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (목)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (금)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (토)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "     (일)",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 10,
            colspan: 1,
            align: "center",
          },
        },
        { text: "", options: { colspan: 8 } },
      ],
      [
        {
          text: "월 중 해야 할 일",
          options: {
            fill: { color: "#D1B4E8" },
            bold: true,
            fontSize: 8,
            rowspan: 7,
            colspan: 1,
            align: "center",
          },
        },
        {
          text: "",
          options: {
            colspan: 9,
          },
        },
      ],
    ];

    // NOTE: Follow HTML conventions for colspan/rowspan cells - cells spanned are left out of arrays - see above
    // The table above has 6 columns, but each of the 3 rows has 4-5 elements as colspan/rowspan replacing the missing ones
    // (e.g.: there are 5 elements in the first row, and 6 in the second)
    slide.addTable(arrTabRows1, tabOpts1);

    // Send the PPTX Presentation to the user, using your choice of file name
    this.pptx.writeFile({ fileName: "주간계획표" });
  }
}

export default PptMaker;
