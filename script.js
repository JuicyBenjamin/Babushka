const url = "https://babushka-dd8a.restdb.io/rest/menu";
let jsonData = "";
const options = {
  headers: {
    "x-apikey": "600ec2fb1346a1524ff12de4",
  },
};
async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  formatering(json);
}

window.addEventListener("load", hentData);

function formatering(json) {
  json.forEach((element) => {
    const menukort = document.getElementById("menukort");
    const card = document.createElement("div");
    card.classList.add("card");
    menukort.appendChild(card);

    const img = document.createElement("img");
    img.src = `images/${element.billednavn}-md.jpg`;
    img.alt = element.billednavn;
    card.appendChild(img);

    //     const name = document.createElement("h2");
    //     name.textContent = `${element.fornavn} ${element.efternavn}`;
    //     card.appendChild(name);

    //     const mail = document.createElement("a");
    //     mail.href = "mailto:" + element.email;
    //     mail.textContent = element.email;
    //     card.appendChild(mail);

    //     const hobby = document.createElement("p");
    //     hobby.textContent = "Hobby: " + element.hobby;
    //     card.appendChild(hobby);
    //     console.log(element);

    //     console.log(element["fødselsdag"]);
    //     const birthday = document.createElement("p");
    //     birthday.textContent =
    //       "Fødselsdag: " + new Date(element["fødselsdag"]).toLocaleDateString();
    //     card.appendChild(birthday);
    //   });
    // menukort.textContent = JSON.stringify(json);
    console.log(element);
  });
}
