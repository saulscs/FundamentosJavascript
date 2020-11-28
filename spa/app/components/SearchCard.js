export function SearchCard(props){
    let {id,title, _embedded} = props;
    let slug = _embedded.self[0].slug;

    return `
        <article class ="post-card" key=${id}>
            <h2>${title}</h2>
            <p>
                <a href="#/${slug}" data-id="${id}">Ver publicación</a>
            </p>
        </article>
    `;
}