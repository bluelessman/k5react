import style from './FrontEnd.module.css';
import Like from '../04/Like';
function FrontArticle({ title, href, text }) {
    return (
        <>
            <article className={style.divArticle} id='divHtml'>
                <h2>{title}</h2>
                <div>
                    <div className={style.divimg}>
                        <img src={href} alt={title} />
                    </div>
                    <p>{text}</p>
                </div>
            </article>
            <Like/>
        </>
    )
}

export default FrontArticle


