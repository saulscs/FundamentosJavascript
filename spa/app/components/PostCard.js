export function PostCard(props){
    let {date,title,slug, _embedded} = props;

    let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded["wp:featuredmedia"] 
    ? _embedded["wp:featuredmedia"][0].source_url 
    : "app/assets/favicon.svg";
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime ="${date}">${dateFormat}</time>
                <a href="#/${slug} target="blank" rel="noopener">Ver Publicación</a>
            </p>
        </article>
    `
}