import React from 'react'

interface DemoViewProps {
  message?: string
}

const DemoView: React.FC<DemoViewProps> = ({ message }) => {
  return (
    <div className="border-solid border-indigo-600 w-96 bg-slate-200 p-2">
      <h1 className="underline">Demo View</h1>
      <p className="text-blue-600">{message}</p>
    </div>
  )
}

export default DemoView
