async function getMenu(){
    // hits /menu on via GET and receives HTML code for Top Menu
    const menu = await fetch('/menu');
    const menuJson = await menu.json();

    // console.log("getMenu -> Menu ", menuJson.menu)

    // // create a DOM element (<div>) in vanilla javaScript
    const menuPlaceholder = document.getElementById("topMenu");
    menuPlaceholder.insertAdjacentHTML("afterend", menuJson.menu);

    // console.log(menuCodeJson.menu);
}