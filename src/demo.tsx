import DemoView from '@/views/DemoView'
import React from 'react'
import { createRoot } from 'react-dom/client'

export const renderDemo = () => {
  import('@/utils/loadStyle')

  const rootId = 'tampermonkey-react-demo-root'
  let rootElement = document.getElementById(rootId)
  if (!rootElement) {
    rootElement = document.createElement('div')
    rootElement.id = rootId
    document.body.appendChild(rootElement)
  }
  createRoot(rootElement).render(<DemoView message="Hello TamperMonkey, with TypeScript, React, and Tailwind CSS." />)
}
