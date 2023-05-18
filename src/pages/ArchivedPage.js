import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import LocaleContext from '../contexts/LocaleContext';

function ArchivedPage({ isLoading, filteredNotes }) {
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
                ? 'Catatan favorit kosong, tidak dapat ditemukan!' 
                : 'Empty favorite note, could not be found!'} />
      }
    </>
  );
}

ArchivedPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  filteredNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ArchivedPage;
