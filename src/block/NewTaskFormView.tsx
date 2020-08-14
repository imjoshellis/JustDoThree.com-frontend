import React, { FunctionComponent } from 'react'

interface Props {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  text: string
  valid: boolean
}
export const NewTaskFormView: FunctionComponent<Props> = ({
  handleChange,
  handleSubmit,
  text,
  valid
}) => {
  const classes = {
    form: 'p-1 px-2 rounded flex justify-between select-none mt-1 text-sm',
    input:
      'p-1 px-2 flex-grow rounded bg-gray-100 outline-none shadow-lg border-2 border-gray-85 focus:border-gray-70 min-w-0',
    btn: {
      base:
        'p-1 px-2 ml-2 rounded bg-gray-80 shadow-lg border-2 border-gray-80 focus:border-gray-70 text-xs font-bold uppercase tracking-wide block whitespace-no-wrap',
      disabled: 'bg-gray-85 border-gray-85 cursor-not-allowed text-gray-50'
    }
  }
  return (
    <form onSubmit={e => handleSubmit(e)} className={classes.form}>
      <input
        type='text'
        className={classes.input}
        onChange={e => handleChange(e)}
        value={text}
      ></input>
      <button
        type='submit'
        disabled={!valid}
        className={
          valid
            ? classes.btn.base
            : classes.btn.base + ' ' + classes.btn.disabled
        }
      >
        Add
      </button>
    </form>
  )
}

export default NewTaskFormView
