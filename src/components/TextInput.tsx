import React from 'react'

interface TextInputProps {
  valid: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  text: string
}

export const TextInput: React.FC<TextInputProps> = ({
  valid,
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
    />
  </>
)

export default TextInput
