import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 rounded-xl bg-slate-400 ml-4 mt-2 pt-4">
           <h2 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h2>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
           } 
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;