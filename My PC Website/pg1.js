const components = {
    Monitors: [
        { brand: "Dell", model: "S-series 22 Inch", price: 7999},
        { brand: "Acer", model: "Nitro 23.5 Inch", price: 6799 },
        { brand: "Lenovo", model: "L22 24.2 Inch", price: 7890 },
        { brand: "HP", model: "M-series 18.5 Inch", price: 6990 },
        { brand: "Samsung", model: "Curved 27 Inch", price: 10099 },  
    ],
    Motherboards: [
        { brand: "Gigabyte", model: "B550 M DS3H", price: 10500 },
        { brand: "MSI", model: "B450 PRO", price: 5649 },
        { brand: "ASRock", model: "B450M-HDV", price: 8499 },
        { brand: "Asus", model: "EX B460M-V5", price: 7399 },
    ],
    SMPS: [
        { brand: "Cooler Master", model: "MWE 650 Bronze V2", price: 5299},
        { brand: "DeepCool", model: "PF650", price: 4450},
        { brand: "Gigabyte", model: "P650B", price: 4877},
        { brand: "Corsair", model: "CV 650", price: 5799 },
        { brand: "Ant Esports", model: "FP 650", price: 3590 },
        { brand: "Fingers", model: "BlackBox 500", price: 2190},
    ],
    Processors: [
        { brand: "AMD Ryzen", model: "9 X-Series", price: 50564 },
        { brand: "AMD Ryzen", model: "7 X-Series", price: 29300 },
        { brand: "AMD Ryzen", model: "7 G-Series", price: 19700 },
        { brand: "AMD Ryzen", model: "5 5000-Series", price: 11520 },
        { brand: "AMD Ryzen", model: "5 4000-Series", price: 7150 },
        { brand: "AMD Ryzen", model: "3 3000-Series", price: 5600 },
        { brand: "Intel i9", model: "13th Gen", price: 64500 },
        { brand: "Intel i9", model: "12th Gen", price: 38000 },
        { brand: "Intel i7", model: "13th Gen", price: 35217 },
        { brand: "Intel i7", model: "12th Gen", price: 22240 },
        { brand: "Intel i5", model: "13th Gen", price: 21010 },
        { brand: "Intel i5", model: "12th Gen", price: 17812 },
        { brand: "Intel i3", model: "13th Gen", price: 13507 },
        { brand: "Intel i3", model: "12th Gen", price: 10063 },
    ],
    RAM: [
        { brand: "Corsair Vengeance", model: "LPX DDR5 16GB", price: 5120 },
        { brand: "Corsair Vengeance", model: "LPX DDR4 16GB", price: 4100 },
        { brand: "Corsair Vengeance", model: "LPX DDR4 8GB", price: 2200 },
        { brand: "G.Skill", model: "RipJaws DDR5 16GB", price: 5400 },
        { brand: "G.Skill", model: "RipJaws DDR4 16GB", price: 4120 },
        { brand: "G.Skill", model: "RipJaws DDR4 8GB", price: 2180 },
        { brand: "XPG GAMMIX", model: "D30 DDR5 16GB", price: 5320 },
        { brand: "XPG GAMMIX", model: "D30 DDR4 16GB", price: 4220 },
        { brand: "XPG GAMMIX", model: "D30 DDR4 8GB", price: 2100 },
    ],
    Storage: [
        { brand: "WD-Blue", model: "512GB SSD ", price: 6200 },
        { brand: "WD-Blue", model: "1TB SSD", price: 12110 },
        { brand: "Samsung", model: "512GB SSD", price: 7400 },
        { brand: "Samsung", model: "1TB SSD", price: 14588 },
    ],
    Cabinets: [
        { brand: "ANT Esports", model: "510 Air ", price: 4500 },
        { brand: "ANT Esports", model: "660 Air", price: 6200 },
        { brand: "Frontech", model: "Garnet silver ", price: 3500 },
        { brand: "Frontech", model: "X50G ", price: 5800 },
    ],
    Keyboard: [
        { brand: "Dell", model: "KB216 ", price: 699 },
        { brand: "Zebronics", model: "Zeb-K20 ", price: 422 },
        { brand: "Intex", model: "I-KB439X ", price: 560 },
        { brand: "HP", model: "HP 360k", price: 486 },
    ],
    Mouse: [
        { brand: "Dell", model: "MS 116-BK", price: 250 },
        { brand: "Potronics", model: "PWM-118", price: 590 },
        { brand: "Lenovo", model: "LM-300R", price: 459 },
        { brand: "HP", model: "HS-730K", price: 345 },
    ]
    
     
};

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".product-list");

    function displayProducts(category) {
        container.innerHTML = `<h2>${category}</h2>`;
        components[category].forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
                <p>${product.brand} - ${product.model}</p>
                <p>Price: &#x20B9;${product.price}</p>
                <button>Add to Cart</button>
            `;
            container.appendChild(productDiv);
        });
    }
    document.querySelector("#monitors-link").addEventListener("click", function () {
        displayProducts("Monitors");
    });
    document.querySelector("#motherboards-link").addEventListener("click", function () {
        displayProducts("Motherboards");
    });
    document.querySelector("#smps-link").addEventListener("click", function () {
        displayProducts("SMPS");
    });
    document.querySelector("#processors-link").addEventListener("click", function () {
        displayProducts("Processors");
    });
    document.querySelector("#ram-link").addEventListener("click", function () {
        displayProducts("RAM");
    });
    document.querySelector("#storage-link").addEventListener("click", function () {
        displayProducts("Storage");
    });
    document.querySelector("#cabinets-link").addEventListener("click", function () {
        displayProducts("Cabinets");
    });
    document.querySelector("#keyboard-link").addEventListener("click", function () {
        displayProducts("Keyboard");
    });
    document.querySelector("#mouse-link").addEventListener("click", function () {
        displayProducts("Mouse");
    });

    displayProducts("Monitors");
    displayProducts("Motherboards");
    displayProducts("SMPS");
    displayProducts("Processors");
    displayProducts("RAM");
    displayProducts("Storage");
    displayProducts("Cabinets");
    displayProducts("Keyboard");
    displayProducts("Mouse");
});
