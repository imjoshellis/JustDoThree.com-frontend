import React from 'react'

interface SubmitButtonProps {
  valid: boolean
  text: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ valid, text }) => (
  <>
    <button
      type='submit'
      disabled={!valid}
      className={`px-2 ml-2 rounded shadow-lg border-2 text-xs font-bold uppercase tracking-wide block whitespace-no-wrap 
      ${
        valid
          ? 'bg-green-60 border-green-60 text-gray-20 focus:border-green-40 hover:bg-green-50 hover:border-green-50 hover:text-gray-10'
          : 'bg-gray-85 border-gray-85 cursor-not-allowed text-gray-50'
      }`}
    >
      {text}
    </button>
  </>
)

export default SubmitButton
