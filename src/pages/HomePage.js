import React from 'react';
import Loader from '../components/Loader';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import LocaleContext from '../contexts/LocaleContext';

function HomePage({ isLoading, filteredNotes }) {
  const { localeContextValue } = React.useContext(LocaleContext);
  const { locale } = localeContextValue;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {
        filteredNotes.length > 0
          ? <NoteList notes={filteredNotes} />
          : <EmptyMessage 
              message={locale === 'id' 
                ? 'Catatan aktif kosong, tidak dapat ditemukan!' 
                : 'Empty active note, could not be found!'} />
      }
    </>
  );
}

export default HomePage;
