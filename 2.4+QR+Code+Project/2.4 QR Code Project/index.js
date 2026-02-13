import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL"
    }
  ])
  .then((answers) => {
    const URL = answers.URL;

    const qr_png = qr.image(URL, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_img.png"));


    fs.writeFile("URL.txt", URL, (err) => {
      if (err) throw err;
      console.log("The URL has been saved to URL.txt!");
    });

    console.log("QR Code generated as qr_img.png!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in this environment");
    } else {
      console.log("Something went wrong:", error);
    }
  });
