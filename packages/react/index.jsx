import connectResizer from '@iframe-resizer/core'
import PropTypes from 'prop-types'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import warning from 'warning'

import filterIframeAttribs from './filter-iframe-attribs'

function IframeResizer(props) {
  const { title, forwardRef, ...rest } = props
  const iframeProps = filterIframeAttribs(rest)
  const iframeRef = useRef(null)

  const onClose = () => {
    warning(
      !iframeRef.current,
      `[iframeSizerReact][${
        iframeRef && iframeRef.current && iframeRef.current.id
      }] Close event ignored, to remove the iframe update your React component`,
    )
    return !iframeRef.current
  }

  // This hook is only run once, as once iframeResizer is bound, it will
  // deal with changes to the element and does not need recalling
  useEffect(() => {
    const iframe = iframeRef.current
    const resizer = connectResizer({ ...rest, onClose })(iframe)
    return () => resizer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useImperativeHandle(forwardRef, () => ({
    resize: () => iframeRef.current.iFrameResizer.resize(),
    moveToAnchor: (anchor) =>
      iframeRef.current.iFrameResizer.moveToAnchor(anchor),
    sendMessage: (message, targetOrigin) => {
      iframeRef.current.iFrameResizer.sendMessage(message, targetOrigin)
    },
  }))

  return <iframe title={title} {...iframeProps} ref={iframeRef} />
}

IframeResizer.defaultProps = {
  title: 'iframe',
}

IframeResizer.propTypes = {
  title: PropTypes.string,
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
}

export default IframeResizer