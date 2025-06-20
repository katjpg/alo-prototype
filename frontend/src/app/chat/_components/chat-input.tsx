"use client"

import { useState } from 'react'
import { MolecularInput } from './molecular-input'

export function ChatInput() {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (file: File) => {
    // File upload functionality will be implemented later
    console.log('File uploaded:', file.name)
    setInputValue('') // Clear text input when file is uploaded
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    setIsLoading(true)
    // Send functionality will be implemented later
    console.log('Sending:', inputValue)
    
    // Simulate loading
    setTimeout(() => {
      setInputValue('')
      setIsLoading(false)
    }, 1000)
  }


  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-semibold text-foreground tracking-tight">
          Welcome to ALO
        </h1>
        <p className="text-lg text-muted-foreground">
          AI-based Ligand Optimization for drug discovery
        </p>
      </div>

      {/* Molecular Input */}
      <MolecularInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        onFileUpload={handleFileUpload}
        disabled={isLoading}
      />

    </div>
  )
}