import React from 'react';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import ActionButton from '../components/ActionButton';
import { getArchivedNotes } from '../utils/network-data';
import { MdAdd } from 'react-icons/md';
import { Link, useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function ArchivedPage() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { localeContextValue } = React.useContext(LocaleContext);
  const { locale } = localeContextValue;

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getArchivedNotes();
      setNotes(data);
    }

    const emptyMessage = document.querySelector('.empty-message');
    emptyMessage.style.display = 'none';

    const loader = document.querySelector('.loader');

    setTimeout(() => {
      getData();
      loader.style.display = 'none';      
    }, 300);
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });    
  }

  const filteredNotes = notes.filter((note) => (
    note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  ));

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <Loader />
        {
          filteredNotes.length > 0
            ? <NoteList notes={filteredNotes} />
            : <EmptyMessage 
                message={locale === 'id' 
                  ? 'Catatan favorit kosong, tidak dapat ditemukan!' 
                  : 'Empty favorite note, could not be found!'} />
        }
        <Link to='/add'>
          <ActionButton icon={<MdAdd />} />
        </Link>
    </section>
  );
}

export default ArchivedPage;
