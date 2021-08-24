import { Component } from 'react'

export default class InView extends Component {
  state = {
    // Виден ли компонент
    inView: false
  }

  // Компонет-обёртка
  inViewHolder = null

  componentDidMount() {
    // Функция определения видимости
    const event = () => {
      try {
        // Запас растояния до элемента
        const overScreen = this.props.overScreen !== undefined ? this.props.overScreen : 300

        // Позиция элемента
        const rect = this.inViewHolder.getBoundingClientRect()
        // Вычисление его видимости
        const onScreen = () => rect.top <= (window.innerHeight + overScreen) && rect.bottom + overScreen * 2 >= 0

        // Закрепление видимости элемента
        const lock = this.props.lock !== undefined ? this.props.lock : true
        
        if (!lock) {
          if (onScreen()) this.setState({ inView: true })
          else this.setState({ inView: false })
        } else {
          this.setState({ inView: onScreen() })
          if (onScreen()) window.removeEventListener('scroll', event)
        }
      } catch(e) {
        // При пересборе комонента сбрасывать неработающий эвент
        window.removeEventListener('scroll', event)
      }
    }

    // При скролле страницы проверять видимость обёртки
    window.addEventListener('scroll', event)

    // При установке компонента проверять его видимость
    event()
  }

  render() {
    // Вставлять элемент с анимацией из css библиотеки Animate.css
    const animated = this.props.animated != undefined ? this.props.animated : true

    return (<div
      className={ (this.props.className || '') + (animated ? " animated fadeIn" : null) }
      // style={{display: "contents"}}
      ref={ ref => this.inViewHolder = ref }>
        { this.state.inView ? this.props.children : null }
      </div>)
  }
}