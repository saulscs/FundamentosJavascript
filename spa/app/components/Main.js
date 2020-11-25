export function Main(props){
    const $main = document.createElement("main");
        $main.id = "main";

        if(!location.hash.includes("#/search")){
            $main.classList="grid-fluid";
        }
        
    return $main;
}