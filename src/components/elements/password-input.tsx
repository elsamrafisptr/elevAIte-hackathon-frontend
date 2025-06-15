'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { cn } from '@/lib/utils'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: any
}

export function PasswordInput({ field, className, ...props }: PasswordInputProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <Input
        type={show ? 'text' : 'password'}
        className={cn('pr-10', className)}
        {...props}
        {...field}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShow(prev => !prev)}
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full p-0 hover:bg-slate-50"
        tabIndex={-1}
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
        <span className="sr-only">Toggle password visibility</span>
      </Button>
    </div>
  )
}
