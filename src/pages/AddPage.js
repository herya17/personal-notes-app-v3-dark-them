import React from 'react';
import NoteInput from '../components/NoteInput';
// import ActionButton from '../components/ActionButton';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPage() {
  const { themeContextValue } = React.useContext(LocaleContext);
  const { theme } = themeContextValue;

  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    toast.success('1 ditambahkan', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: `${theme === 'light' ? 'light' : 'dark'}`,
    });
    navigate('/');
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
