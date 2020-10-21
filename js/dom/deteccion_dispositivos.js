/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** */

const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id);
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/window phone/i),
        any: function (){
            return this.android() || this.ios() || this.windows();
        },
    },
          isDesktop = {
              linux: () => ua.match(/linux/i),
              mac: () => ua.match(/mac os/i),
              windows: () => ua.match(/windows nt/i),
              any: function () {
                return this.linux() || this.mac()|| this.windows();
              }
          },
          isBrowser = {
              chrome: () => ua.match(/chrome/i),
              safari: () => ua.match(/safari/i),
              firefox: () => ua.match(/firefox/i),
              opera: () => ua.match(/opera|opera mini/i),
              edge: () => ua.match(/edge/i),
              any: function (){
                  return (
                      this.chrome()||
                      this.safari()||
                      this.firefox() ||
                      this.opera()||
                      this.edge() 
                  )
              }
          };



   $id.innerHTML = `
        <ul>
          <li>User Agent <b>${ua}</b></li>
          <li>Plataform <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
          <li>Navegador<b>${isBrowser.any()} </b></li>
        </ul>
   `

   /*Contenido exclusivo */
   if(isBrowser.chrome()){
       $id.innerHTML += `<p>Esto solo se ve en chrome</p>`
   } 
   if(isBrowser.firefox()) {
    $id.innerHTML += `<p>Esto solo se ve en Firefox</p>`
   }

   /*Redirecciones */
   if(isMobile.ios()){
       window.location.href="https://saulcorona.com"
   }
   
}