/* eslint-disable no-constant-condition */

import './index.scss'
const tosterConfig = {
  title: 'Title',
  text: 'Vivamus arcu felis <b>bibendum</b> ut tristique et egestas quis ipsum.',
  hasClose: true,
  duration: 6,
  direction: 'tr',
  maxWidth: '400px',
  background: '#000',
  titleColor: '#fff',
  textColor: '#eee',
  crossColor: 'red',
  type: 'tost',
  onClose: () => {},
  onAction: (e) => {}
}

/**
 *
 * @param {*} color
 * @returns
 */
const crossSvgPath = (color = '#fff') => `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L12.5 11.75M21 19.5L12.5 11.75M12.5 11.75L20.5 4L4 19.5" stroke="${color}" stroke-width="4"/>
</svg>`

/**
 *
 */
function containerSetup () {
  ['tr', 'br', 'tl', 'bl'].forEach(e => {
    const id = `notifier-${e}`
    if (!document.getElementById(id)) {
      const container = document.createElement('div')
      container.setAttribute('class', id + ' notifier')
      container.setAttribute('id', id)
      document.body.append(container)
    }
  })
}

/**
 *
 * @param {*} element
 */
function closeNotification (element) {
  if (element) {
    element.setAttribute('class', `${element.getAttribute('class')} notifier-flag__closeing`)
    setTimeout(() => {
      element && element.remove()
    }, 900)
  }
}

/**
 *
 * @param {*} config
 * @returns
 */
function createNotification (config) {
  const notification = document.createElement('div')

  notification.setAttribute('class',
    `notifier-flag__open notifier-flag notifier-flag__${config.type} notifier-flag__${config.direction}`)
  notification.style.backgroundColor = config.background
  notification.style.maxWidth = config.maxWidth
  notification.innerHTML = `
    <h3 class="notifier-flag__title" style="color: ${config.titleColor}" >${config.title}</h3>
    <p class="notifier-flag__value" style="color: ${config.textColor}" >${config.text}</p>
  `
  if (config.type === 'tost') {
    const closeButton = document.createElement('div')
    closeButton.innerHTML = crossSvgPath(config.crossColor)
    closeButton.setAttribute('class', 'notifier-flag__close')
    closeButton.addEventListener('click', e => {
      (typeof config.onClose === 'function') && config.onClose()
      closeNotification(notification)
    })
    notification.append(closeButton)
  } else if (config.type === 'prompt') {
    const yesButton = document.createElement('button')
    yesButton.innerHTML = 'Yes'
    yesButton.setAttribute('class', 'notifier-flag__promt')
    yesButton.addEventListener('click', e => {
      (typeof config.onAction === 'function') && config.onAction(true)
      closeNotification(notification)
    })

    const noButton = document.createElement('button')
    noButton.innerHTML = 'No'
    noButton.setAttribute('class', 'notifier-flag__promt')
    noButton.addEventListener('click', e => {
      (typeof config.onAction === 'function') && config.onAction(false)
      closeNotification(notification)
    })
    notification.append(noButton)
    notification.append(yesButton)
  }
  return notification
}

/**
 *
 * @param {} config
 */
function notifier (config) {
  const _config = { ...tosterConfig, config }
  const notification = createNotification(_config)
  const parentContainer = document.getElementById(`notifier-${_config.direction}`)
  setTimeout(() => {
    notification.setAttribute('class',
      notification.getAttribute('class').replace('notifier-flag__open', ''))
  }, 10)
  parentContainer.append(notification)
  if (_config.duration) {
    setTimeout(() => {
      closeNotification(notification)
    }, _config.duration * 1000)
  }
}

containerSetup()

export default notifier
