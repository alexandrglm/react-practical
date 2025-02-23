import { useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import { UserContext } from '../../contexts/app.context';
import StoryComponent from '../../components/story/story.component';
import { selectStory } from '../../store/story/story.selector';
import CommentsComponent from '../../components/comments/comments.component';
import AddCommentComponent  from '../../components/add-comment/add-comment.component';

const Story = () => {
  const { id } = useParams(); 
  const { currentUser } = useContext(UserContext);
  const story = useSelector(selectStory(id));

  return (
    <div id="contents">
       <StoryComponent story={story} />
       <CommentsComponent storyId={story.id} pages={story.commentPages}/>
       { currentUser && <AddCommentComponent storyId={story.id}/>}
    </div>
   
  )
};

export default Story;