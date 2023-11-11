import { useEffect, useState } from 'react'

export function useKeyPress(callBack: () => void, targetKey: string[]): void {
  const [keyPressed, setKeyPressed] = useState(false)
  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: string }): void {
    if (targetKey.includes(key)) {
      setKeyPressed(true)
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: string }): void => {
    if (targetKey.includes(key)) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty array ensures that effect is only run on mount and unmount

  useEffect(() => {
    if (keyPressed) callBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed])
}
