import style from './Like.module.css'
export default function Like() {
  return (
    <div className={style.likediv}>
      <span>😋</span>
      <span>😐</span>
      <span>😡</span>
    </div>
  )
}

