import React from 'react'

interface Props {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  text: string
  valid: boolean
}
export const NewTaskFormView: React.FC<Props> = ({
  handleChange,
  handleSubmit,
  text,
  valid
}) => (
  <form
    onSubmit={e => handleSubmit(e)}
    className='flex justify-between p-1 px-2 mt-1 text-sm rounded select-none'
  >
    <input
      type='text'
      className='flex-grow min-w-0 px-2 text-sm bg-gray-100 border-2 rounded shadow-lg outline-none border-gray-85 focus:border-gray-70'
      onChange={e => handleChange(e)}
      value={text}
    ></input>
    <button
      type='submit'
      disabled={!valid}
      className={`px-2 ml-2 rounded bg-gray-80 shadow-lg border-2 border-gray-80 focus:border-gray-70 text-xs font-bold uppercase tracking-wide block whitespace-no-wrap 
          ${!valid &&
            'bg-gray-85 border-gray-85 cursor-not-allowed text-gray-50'}`}
    >
      Add
    </button>
  </form>
)

export default NewTaskFormView
