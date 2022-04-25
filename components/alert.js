import styles from '../styles/alert.module.css'
import cn from 'classnames'

// 조건부 CSS 적용 : classnames 패키지 사용

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
