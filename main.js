///fake data
const products = [
    {
        id: 1,
        title: "Ground Nuts Oil Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        category: "snack-and-spices",
        sub_category: "snack",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 2,
        title: "Organic Litchi Juice Pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        category: "snack-and-spices",
        sub_category: "Juice",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 3,
        title: "Crunchy Banana Chips",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        category: "snack-and-spices",
        sub_category: "chips",
        rate: 4,
        isDiscount: true,
        oldPridce: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 4,
        title: "Organic dragon fruit",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 3,
        isDiscount: false,
        oldPridce: 30,
        newPrice: null,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 5,
        title: "Fresh blue berry",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 5,
        isDiscount: false,
        oldPridce: 30,
        newPrice: null,
        out_of_stock: true,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
];
let category = "all";
const category_container = document.querySelector(".products-header-categories");
function handleCategories() {
    if (category === "all") {
        return handleDisplayProduct(products);
    } else {
        const productFilter = products.filter((product) => product.category === category);
        return handleDisplayProduct(productFilter)
    }
};
const items = document.querySelectorAll(".products-header-categories h3");
const pro = document.querySelector(".products-container");
items.forEach((item) => 
    item.onclick=() => {
         category = item.dataset.value
        items.forEach((item) => {
            item.classList.remove("active")
        })
        item.classList.add("active")
        handleCategories();
    })
    
function handleDisplayProduct(data) {
    let html = ``
    data.forEach((product) => {
        html += ` <div class="product-card"><div class="product-container-image">
                        <img src="${product.image}" alt="" />
                        <div class="icons">
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Heart">
                                        <path
                                            d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="icon" onclick="showQuickView(${product.id})">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="32"
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z"></path>
                                    <circle cx="256" cy="256" r="80" fill="none" stroke-miterlimit="10" stroke-width="32"></circle>
                                </svg>
                            </div>
                            <div class="icon eye" >
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"></path>
                                </svg>
                            </div>
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Shopping_Cart">
                                        <path
                                            d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="para">
                            <p>${product.sub_category}</p>
                            <span>
  ${"★".repeat(product.rate)}${"☆".repeat(5 - product.rate)}
</span>
                        </div>
                        <h2>${product.title}</h2>
                        <div class="para2">
                            <div><span>${product.isDiscount ? product.newPrice + "$" : product.oldPridce + "$"}</span>
                             ${product.isDiscount ? `<del>${product.oldPridce}$</del>` : ""}</div>
                            <p>${product.weight?.[0]} ${product.sub_category?.toLowerCase() == "juice" ? "ml" : "gm"}</p>
                        </div>
                    </div>
        </div>
        `;
       
    })
    console.log(data)
    pro.innerHTML = html;
}
handleCategories();

const popup=document.querySelector(".popup")
const containerProduct=document.querySelector(".container-product")
function showQuickView(productId) {
    popup.classList.add("show");
    containerProduct.classList.add("show");

    const currentProduct = products.find((product) => product.id == productId);
    generatePopupData(currentProduct);
}
function generatePopupData(product){
    containerProduct.innerHTML = `   <div class="popup-container-close" onclick="closePopup()">
                    <span></span>
                </div>
               
                <div class="container-product-image">
                   
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="container-product-inf">
                    <h2>${product.title}</h2>
                   <span>${"★".repeat(product.rate)}${"☆".repeat(5 - product.rate)}</span>
                   <p>${product.description}</p>
                   <div><strong>${product.isDiscount ? product.newPrice + "$" : product.oldPridce + "$"}</strong>
                    ${product.isDiscount ? `<del>${product.oldPridce}$</del>` : ""}</div>
                   <div class="wieght">
                    <h4 class="active">250g</h4>
                    <h4>500g</h4>
                    <h4>1kg</h4>
                    <h4>2kg</h4>
                   </div>
                   <div class="mogab">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                    <div class="btn">
                        <span> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12zm-106 0H198v-80.75a58 58 0 1 1 116 0z">
                            </path>
                        </svg></span>
                       <p>Add to cart</p>
                    </div>
                    
                   </div>
                </div>
                `;
};
function closePopup() {
    popup.classList.remove("show");
    containerProduct.classList.remove("show");
}