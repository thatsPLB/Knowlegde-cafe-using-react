import Proptypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-300 m-4 p-4 rounded-xl'>
           <h3 className='text-xl text-center '>{title}</h3> 
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: Proptypes.object
}

export default Bookmark;