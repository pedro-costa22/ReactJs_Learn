import vetor from './img/vetor.svg';
import {Div, Button, Comment} from './AppStyle';
import {useState} from 'react';

function App() {

  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const handleSetComments = (comment) => {
    setComments(prevComments => [...prevComments, comment]);
  }


  return(
    <Div>
      <img src={vetor} />
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
      <Button isOn={text} onClick={() => handleSetComments(text)}>
        Comentar
      </Button>

      {comments.map(comment => 
        <Comment>{comment}</Comment>
      )}


    </Div>
  )
}

export default App;
