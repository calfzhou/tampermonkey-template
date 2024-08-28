import { pause, sleep } from './common'

describe('sleep', () => {
  it('sleeps for a given number of milliseconds', async () => {
    const start = Date.now()
    await sleep(100)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(100)
  })
})

describe('pause', () => {
  it('sleeps for a short period of time', async () => {
    const start = Date.now()
    await pause()
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(10)
  })
})
