import React from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'

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
    <TextInput text={text} valid={valid} handleChange={handleChange} />
    <SubmitButton valid={valid} text='add' />
  </form>
)

export default NewTaskFormView
