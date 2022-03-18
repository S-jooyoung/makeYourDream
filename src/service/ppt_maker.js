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
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
      [
        "",
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        "",
      ],
      [
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        { text: "메인", options: { fill: { color: "#FFE9FF" } } },
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      [
        "",
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
      [
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
        "",
        { text: "A1", options: { fill: { color: "#C983FF" } } },
        "",
      ],
      ["", "", "", "", "", "", "", "", ""],
    ];

    // NOTE: Follow HTML conventions for colspan/rowspan cells - cells spanned are left out of arrays - see above
    // The table above has 6 columns, but each of the 3 rows has 4-5 elements as colspan/rowspan replacing the missing ones
    // (e.g.: there are 5 elements in the first row, and 6 in the second)
    slide.addTable(arrTabRows1, tabOpts1);

    // Send the PPTX Presentation to the user, using your choice of file name
    this.pptx.writeFile({ fileName: "Mandart-Ppt-Slide" });
  }
}

export default PptMaker;
