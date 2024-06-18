const loadSearchedData=()=>{
    const search_bar= document.getElementById("search-bar").value; 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_bar}`)
    .then(res=>res.json())
    .then(data=>{
        displaySearchedData(data);
        document.getElementById("search-bar").value="";
    })
}

const displaySearchedData=(data)=>{
    const searched_meals_array=data.meals
    const data_container= document.getElementById("searched-meals");
    searched_meals_array.forEach(meal =>{
        const div= document.createElement("div");
        div.classList.add("meal-card");
        div.innerHTML=`
            <div onclick="displayCard('${meal.strMealThumb}','${meal.strMeal}')">
                <img src=${meal.strMealThumb} width="250px" height="250px">
                <h5 class="mt-2">${meal.strMeal.slice(0,20)}</h5>
            </div>
        `
        console.log(meal);
        data_container.appendChild(div);
    });
}

const displayCard=(img, title)=>{
    console.log(img, title);
    const card_container= document.getElementById("meal-card-details");
    card_container.innerHTML=`
        <img src=${img} width="250px" height="250px">
        <h4>${title}</h4>
        <h5>Ingredients</h5>
        <ul>
            <li>Demo1</li>
            <li>Demo2</li>
            <li>Demo3</li>
            <li>Demo4</li>
            <li>Demo5</li>
            <li>Demo6</li>
            <li>Demo7</li>
            <li>Demo8</li>
            <li>Demo9</li>
        </ul>
    `
}