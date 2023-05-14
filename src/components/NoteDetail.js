import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/showFormattedDate';
import ActionButton from '../components/ActionButton';
import { MdDeleteOutline, MdFavoriteBorder, MdHeartBroken } from 'react-icons/md';

function NoteDetail({ id, title, createdAt, body, archived, color, onDelete, onArchive, onUnarchive }) {
  return (
    <div className={`note-detail`}>
      <p className='note-detail__title'>{title}</p>
      <p className='note-detail__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-detail__body'>{body}</p>
      <ActionButton icon={<MdDeleteOutline />} id={id} type='delete' onDelete={onDelete} />
      {
        archived
          ? <ActionButton icon={<MdHeartBroken />} id={id} type='unarchive' onUnarchive={onUnarchive} />
          : <ActionButton icon={<MdFavoriteBorder />} id={id} type='archive' onArchive={onArchive} />
      }
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  color: PropTypes.string,
}

export default NoteDetail;
