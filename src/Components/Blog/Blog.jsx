import PropTypes from 'prop-types'; 
import {  FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, image,readingTime,author,author_img,postedDate,hashtags}= blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={image} alt={`Cover picture of the title ${title}`}/>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,handleAddToBookmark: PropTypes.func
}
export default Blog;