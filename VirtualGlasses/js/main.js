let dataGlasses = [{
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    },
];

let renderGlasses = () => {
    let content = "";

    dataGlasses.map((product, index) => {
        content += `
      
  <img id="${product.id}" class="col col-lg-4"  src="${product.src}">
       
              
            
        
        `;
    });
    document.querySelector("#vglassesList").innerHTML = content;
};
renderGlasses();

let renderImg = () => {
    let elem = document.querySelectorAll("img");
    console.log(elem);
    let cont,
        cont1 = "";
    for (let i = 0; i < elem.length; i++) {
        // if (elem[i].id == product.id) {

        // }

        elem[i].onclick = () => {

            // document.querySelector(".vglasses__info").removeclass('.display')
            renderInfo(elem[i].id);
            cont = `
            <img id="${elem[i].id}"   src="${elem[i].src}">
            
            `;

            document.querySelector("#avatar").innerHTML = cont;
        };
    }
};
renderImg();

let renderInfo = (id) => {
    // document.getElementsByClassName('vglasses__info').style.display = 'block'
    dataGlasses.map((product, index) => {
        if (id == product.id) {
            let cont2 = "";

            cont2 = `
        <div class="vglasses__header">
            <p>${product.name}-${product.brand}(${product.color})</p>
        </div>
        <div class="vglasses__body d-flex algign">
            <span style="background: red;
            padding: 5px;">${product.price + "$"}</span>
            <p>stocking</p>
        </div>
        <div class="vglasses__bottom">
            <p>${product.description}</p>
        </div> 
 
 `;
            document.querySelector("#glassesInfo").innerHTML = cont2;
        }
    });
};