import React from 'react'

interface TextInputProps {
  autoFocus?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  label?: string
  text: string
  valid: boolean
}

export const TextInput: React.FC<TextInputProps> = ({
  autoFocus = false,
  handleChange,
  handleKeyPress,
  label,
  text,
  valid
}) => (
  <>
    {label && (
      <label className='p-1 pl-2 text-xs font-bold tracking-wider uppercase'>
        {label}
      </label>
    )}
    <input
      type='text'
      className={`flex-grow min-w-0 px-2 text-sm bg-gray-100 border-2 rounded shadow-lg outline-none border-gray-85 ${
        valid ? 'focus:border-green-60' : 'focus:border-gray-70'
      }`}
      onKeyPress={e => (handleKeyPress ? handleKeyPress(e) : null)}
      onChange={e => handleChange(e)}
      value={text}
      autoFocus={autoFocus}
      onFocus={e => e.target.select()}
    />
  </>
)

export default TextInput
