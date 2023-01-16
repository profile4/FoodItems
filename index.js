const arr = [
    {
        name: "noodles",
        category: "snacks",
        calorie: 350,
        isJunk: true,
        url: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
      },
      {
        name: "burger",
        category: "snacks",
        calorie: 400,
        isJunk: true,
        url: "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      },
      {
        name: "momos",
        category: "snacks",
        calorie: 200,
        isJunk: true,
        url: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      },
      {
        name: "bread-omlette",
        category: "breakfast",
        calorie: 300,
        isJunk: false,
        url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/egg-omelet-recipe.jpg",
      },
      {
        name: "oatmeal",
        category: "breakfast",
        calorie: 150,
        isJunk: false,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/instant-oatmeal-with-cranberries-and-pecans-1641506842.jpg?crop=0.433xw:0.975xh;0.234xw,0.00617xh&resize=980:*",
      },
      {
        name: "french-toast",
        category: "breakfast",
        calorie: 350,
        isJunk: false,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-make-french-toast-1589827448.jpg?crop=0.522xw:0.523xh;0.179xw,0.329xh&resize=980:*",
      },
      {
        name: "pancakes",
        category: "breakfast",
        calorie: 500,
        isJunk: true,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blender-pancakes-1641506592.jpg?crop=0.507xw:0.508xh;0.253xw,0.258xh&resize=980:*",
      },
    ];
let a = document.querySelector("#food-items");
arr.map(e => 
    document.querySelector("#food-items").innerHTML+=
    `<div class="outer-div">
        <div class="imageholder">
            <img src = ${e.url}>
        </div>
        <div class="contentholder">
            <p>Name: ${e.name}</p>
            <p>Category: ${e.category}</p>
            <p>Calorie: ${e.calorie}</p>
            <p>Junk Food: ${e.isJunk}</p>
        </div>
    </div>`
)
function BreakFast(){
    document.querySelector("#food-items").innerHTML = "";
    arr.map(e => {
        if(e.category  === "breakfast"){
        document.querySelector("#food-items").innerHTML+=
        `<div class="outer-div">
            <div class="imageholder">
                <img src = ${e.url}>
            </div>
            <div class="contentholder">
                <p>Name: ${e.name}</p>
                <p>Category: ${e.category}</p>
                <p>Calorie: ${e.calorie}</p>
                <p>Junk Food: ${e.isJunk}</p>
            </div>
        </div>`}
    }
    )
}
function All(){
    document.querySelector("#food-items").innerHTML = "";
    arr.map(e => 
        document.querySelector("#food-items").innerHTML+=
        `<div class="outer-div">
            <div class="imageholder">
                <img src = ${e.url}>
            </div>
            <div class="contentholder">
                <p>Name: ${e.name}</p>
                <p>Category: ${e.category}</p>
                <p>Calorie: ${e.calorie}</p>
                <p>Junk Food: ${e.isJunk}</p>
            </div>
        </div>`
    )
}
function CaloriesLessThan300(){
    document.querySelector("#food-items").innerHTML = "";
    arr.map(e => {
        if(e.calorie <300){
        document.querySelector("#food-items").innerHTML+=
        `<div class="outer-div">
            <div class="imageholder">
                <img src = ${e.url}>
            </div>
            <div class="contentholder">
                <p>Name: ${e.name}</p>
                <p>Category: ${e.category}</p>
                <p>Calorie: ${e.calorie}</p>
                <p>Junk Food: ${e.isJunk}</p>
            </div>
        </div>`}
    }
    )
}
function JunkFood(){
    document.querySelector("#food-items").innerHTML = "";
    arr.map(e => {
        if(e.isJunk){
        document.querySelector("#food-items").innerHTML+=
        `<div class="outer-div">
            <div class="imageholder">
                <img src = ${e.url}>
            </div>
            <div class="contentholder">
                <p>  Name: ${e.name}</p>
                <p>   Category: ${e.category}</p>
                <p>  Calorie: ${e.calorie}</p>
                <p>  Junk Food: ${e.isJunk}</p>
            </div>
        </div>`}
    }
    )
}
