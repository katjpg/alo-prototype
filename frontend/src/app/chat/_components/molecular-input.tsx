"use client"

import { useState } from 'react'
import { IconUpload, IconSend, IconFileText } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface MolecularInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  onFileUpload: (file: File) => void
  disabled?: boolean
}

export function MolecularInput({
  value,
  onChange,
  onSend,
  onFileUpload,
  disabled = false
}: MolecularInputProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      onFileUpload(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const file = e.dataTransfer.files[0]
    if (file && (file.name.endsWith('.mol') || file.name.endsWith('.sdf'))) {
      setUploadedFile(file)
      onFileUpload(file)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  const hasContent = value.trim() || uploadedFile

  return (
    <div className="w-full max-w-2xl">
      <div
        className={cn(
          "relative flex items-center rounded-xl border bg-background shadow-sm transition-all",
          isDragOver
            ? "border-primary bg-primary/5"
            : "border-border hover:border-border/80",
          disabled && "opacity-50 pointer-events-none"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* File Upload Indicator */}
        {uploadedFile && (
          <div className="absolute top-2 left-4 flex items-center gap-2 text-xs text-muted-foreground">
            <IconFileText className="h-3 w-3" />
            <span>{uploadedFile.name}</span>
            <button
              onClick={() => {
                setUploadedFile(null)
                onChange('')
              }}
              className="text-destructive hover:text-destructive/80"
            >
              ×
            </button>
          </div>
        )}

        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={uploadedFile ? "File uploaded" : "Enter a SMILES string or upload a .mol .sdf file"}
          disabled={disabled || !!uploadedFile}
          className={cn(
            "flex-1 border-0 bg-transparent px-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0",
            uploadedFile ? "pt-8 pb-4" : "py-6"
          )}
        />
        
        {/* Action Buttons */}
        <div className="flex items-center gap-2 pr-3">
          <input
            type="file"
            accept=".mol,.sdf"
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 hover:bg-muted cursor-pointer"
            >
              <span>
                <IconUpload className="h-4 w-4" />
              </span>
            </Button>
          </label>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onSend}
            disabled={!hasContent || disabled}
            className="h-8 w-8 hover:bg-muted disabled:opacity-50"
          >
            <IconSend className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* File Type Helper */}
      <div className="mt-2 text-center text-xs text-muted-foreground">
        Supported formats: SMILES strings, .mol, .sdf files
      </div>
    </div>
  )
}