import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import { FiCheck } from 'react-icons/fi';

function NoteInput({ addNote }) {
  const [title, handleTitleChange] = useInput('');
  const [body, handleBodyChange] = useInput('');
  const { localeContextValue } = React.useContext(LocaleContext);
  const { locale } = localeContextValue;

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ 
      title, body
    });
  }

  return (
    <div className='note-input'>
      <p className='note-list_title'>{locale === 'id' ? 'Tambah catatan' : 'Add note'}</p>
      <form onSubmit={onSubmitEventHandler}>
        <input
          className='note-input__title'
          type='text'
          placeholder={locale === 'id' ? 'Judul' : 'Title'}
          required
          value={title}
          onChange={handleTitleChange} />
        <textarea
          className='note-input__body'
          type='text'
          placeholder={locale === 'id' ? 'Catatan' : 'Notes'}
          required
          value={body}
          onChange={handleBodyChange} />
          <ActionButton icon={<FiCheck />} type='submit' />
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
