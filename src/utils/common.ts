/**
 * Sleep for a given number of milliseconds.
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the given number of milliseconds.
 */
export const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

/**
 * Pause for a short period of time.
 * Usually used to hand over control to the browser.
 * @returns A promise that resolves after a short period of time.
 */
export const pause = () => sleep(10)
