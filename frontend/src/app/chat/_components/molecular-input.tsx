"use client"

import { useState } from 'react'
import { IconPaperclip, IconSend, IconFileText } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { PropertySelector } from './property-selector'
import { PropertyBadges } from './property-badges'

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
  const [selectedProperties, setSelectedProperties] = useState<string[]>([])

  const handlePropertyChange = (propertyId: string, checked: boolean) => {
    if (checked) {
      setSelectedProperties(prev => [...prev, propertyId])
    } else {
      setSelectedProperties(prev => prev.filter(id => id !== propertyId))
    }
  }

  const handleRemoveProperty = (propertyId: string) => {
    setSelectedProperties(prev => prev.filter(id => id !== propertyId))
  }

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

  const hasContent = value.trim() || uploadedFile || selectedProperties.length > 0

  return (
    <div className="w-full max-w-2xl">
      <div
        className={cn(
          "rounded-xl border bg-background shadow-sm transition-all",
          isDragOver
            ? "border-primary bg-primary/5"
            : "border-border",
          disabled && "opacity-50 pointer-events-none"
        )}
      >
        {/* SMILES Input Section */}
        <div
          className="relative"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex items-start">
            <Textarea
              value={value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={uploadedFile ? "File uploaded successfully!" : "Enter your initial ligand and select your desired properties..."}
              disabled={disabled || !!uploadedFile}
              className={cn(
                "flex-1 border-0 bg-transparent px-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 rounded-t-xl rounded-b-none min-h-[80px] resize-none placeholder:text-base",
                "pt-4 pb-6"
              )}
            />
          </div>
        </div>

        <Separator />

        {/* Property Selection and Start Discovery Section */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <PropertySelector
              selectedProperties={selectedProperties}
              onPropertyChange={handlePropertyChange}
            />
            <div className="flex items-center gap-2">
              {/* File Upload Indicator */}
              {uploadedFile && (
                <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background">
                  <IconFileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{uploadedFile.name}</span>
                  <button
                    onClick={() => {
                      setUploadedFile(null)
                      onChange('')
                    }}
                    className="text-foreground hover:text-foreground/80 ml-1"
                  >
                    ×
                  </button>
                </div>
              )}
              
              <input
                type="file"
                accept=".mol,.sdf"
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label htmlFor="file-upload">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="h-10 w-10 hover:bg-muted cursor-pointer"
                      >
                        <span>
                          <IconPaperclip className="h-4 w-4" />
                        </span>
                      </Button>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Upload file</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                onClick={onSend}
                disabled={!hasContent || disabled}
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                size="default"
              >
                Start Discovery
                <IconSend className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <PropertyBadges
            selectedProperties={selectedProperties}
            onRemoveProperty={handleRemoveProperty}
          />
        </div>
      </div>

      {/* File Type Helper */}
      <div className="mt-2 text-center text-xs text-muted-foreground">
        Supported formats: SMILES strings, .mol, .sdf files
      </div>
    </div>
  )
}