import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import classnames from 'classnames'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children, className, style }) => {
  const { width, height, domRef } = useAutoResize()

  const classNames = useMemo(
    () => classnames('dv-border-box-7', className),
    className
  )

  return (
    <div className={classNames} style={style} ref={domRef}>
      <svg className='dv-svg-container' width={width} height={height}>
        <polyline className='dv-bb7-line-width-2' points={`0, 25 0, 0 25, 0`} />
        <polyline
          className='dv-bb7-line-width-2'
          points={`${width - 25}, 0 ${width}, 0 ${width}, 25`}
        />
        <polyline
          className='dv-bb7-line-width-2'
          points={`${width -
            25}, ${height} ${width}, ${height} ${width}, ${height - 25}`}
        />
        <polyline
          className='dv-bb7-line-width-2'
          points={`0, ${height - 25} 0, ${height} 25, ${height}`}
        />
        <polyline className='dv-bb7-line-width-5' points={`0, 10 0, 0 10, 0`} />
        <polyline
          className='dv-bb7-line-width-5'
          points={`${width - 10}, 0 ${width}, 0 ${width}, 10`}
        />
        <polyline
          className='dv-bb7-line-width-5'
          points={`${width -
            10}, ${height} ${width}, ${height} ${width}, ${height - 10}`}
        />
        <polyline
          className='dv-bb7-line-width-5'
          points={`0, ${height - 10} 0, ${height} 10, ${height}`}
        />
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BorderBox
