import { throttle, ThrottleSettings } from 'lodash'
import { useRef } from 'react'

export const useThrottle = <Params extends Array<unknown>>(
  callback: (...args: Params) => void,
  delay: number,
  options?: ThrottleSettings
): ((...args: Params) => void) => useRef(throttle(callback, delay, options)).current
