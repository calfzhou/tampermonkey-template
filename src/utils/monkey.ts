import { sleep } from './common'

/**
 * Load a URL in a window and wait for the page to be loaded.
 * [Waiting for child window loading to complete](https://stackoverflow.com/a/52462427/2897040)
 * @param win - The window to load the URL.
 * @param url - The URL to load.
 * @param timeout - The maximum time (milliseconds) to wait for the page to be loaded.
 * @returns A promise that resolves when the page is loaded.
 * @example
 * ``` ts
 * const win = window.open()
 * loadToWindow(win, 'https://example.com').then(() => {
 *   console.log('The page is loaded.')
 * })
 * ```
 */
export const loadToWindow = (win: Window, url: string, timeout = 5000) => {
  const defer = () => {
    return new Promise<void>(resolve => {
      const channel = new MessageChannel()
      channel.port1.onmessage = () => {
        resolve()
      }
      channel.port2.postMessage(null)
    })
  }

  return new Promise<void>(resolve => {
    const autoResolveLater = async () => {
      await sleep(timeout)
      resolve()
    }

    const unloadListener = async () => {
      win.removeEventListener('unload', unloadListener)
      win.removeEventListener('pagehide', unloadListener)
      await defer()
      try {
        if (win.document.readyState === 'loading') {
          win.addEventListener('load', function loadListener() {
            win.removeEventListener('load', loadListener)
            resolve()
          })
        } else {
          console.log('the window document ready state is not loading, but', win.document.readyState)
          resolve()
        }
      } catch (err) {
        // Usually caused by cross-origin accessing.
        console.log('check the window document ready state or add load listener to the window failed:', err)
        autoResolveLater()
      }
    }

    try {
      win.addEventListener('unload', unloadListener)
      win.addEventListener('pagehide', unloadListener)
    } catch (err) {
      console.log('add unload listener to the window failed:', err)
      autoResolveLater()
    }

    win.location.href = url
  })
}
