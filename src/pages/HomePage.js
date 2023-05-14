import React from 'react';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';
import EmptyMessage from '../components/EmptyMessage';
import ActionButton from '../components/ActionButton';
import { getActiveNotes } from '../utils/network-data';
import { Link, useSearchParams } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocaleContext from '../contexts/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { localeContextValue, themeContextValue } = React.useContext(LocaleContext);
  const { locale } = localeContextValue;
  const { theme } = themeContextValue;

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
    }

    getData();

    return () => {
      setNotes(null);
    }
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => (
    note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
  ));

  if (notes === null) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        {
          filteredNotes.length > 0
            ? <NoteList notes={filteredNotes} />
            : <EmptyMessage 
                message={locale === 'id' 
                  ? 'Catatan aktif kosong, tidak dapat ditemukan!' 
                  : 'Empty active note, could not be found!'} />
        }
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme={theme === 'light' ? 'light' : 'dark'} />
        <Link to='/add'>
          <ActionButton icon={<MdAdd />} />
        </Link>
    </section>
  );
}

export default HomePage;
