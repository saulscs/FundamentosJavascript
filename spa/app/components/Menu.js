export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Busqueda</a>
        <span>-</span>
        <a href="https://aprendejavascript.org" target ="blank" rel="noopener">Aprende js</a>
    `
    return $menu;
}