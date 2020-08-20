import React from 'react'

interface TextInputProps {
  valid: boolean
  autoFocus?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  text: string
  valid: boolean
}

export const TextInput: React.FC<TextInputProps> = ({
  valid,
  autoFocus = false,
  handleChange,
  text
}) => (
  <>
    <input
      type='text'
      className={`flex-grow min-w-0 px-2 text-sm bg-gray-100 border-2 rounded shadow-lg outline-none border-gray-85 ${
        valid ? 'focus:border-green-60' : 'focus:border-gray-70'
      }`}
      onChange={e => handleChange(e)}
      value={text}
      autoFocus={autoFocus}
      onFocus={e => e.target.select()}
    />
  </>
)

export default TextInput
