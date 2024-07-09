import React from 'react'

interface DemoViewProps {
  message?: string
}

const DemoView: React.FC<DemoViewProps> = ({ message }) => {
  return (
    <div className="w-96 border-solid border-indigo-600 bg-slate-200 p-2">
      <h1 className="underline">Demo View</h1>
      <p className="text-blue-600">{message}</p>
    </div>
  )
}

export default DemoView
