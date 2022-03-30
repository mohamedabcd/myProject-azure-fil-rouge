import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/styles/user.css";

function User() {
  let { id } = useParams();
  const [studentObject, setSudentObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment ] = useState("");
  

  useEffect(() => {
    axios.get(`http://localhost:5001/students/byid/${id}`).then((response) => {
      setSudentObject(response.data);
    });

    axios.get(`http://localhost:5001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios.post("http://localhost:5001/comments", {
      commentBody: newComment,
      StudentId: id,
    },
    {
      headers: {
        accessToken: localStorage.getItem("accessToken")
      },
    }
    )
      .then((response) => {
      if(response.data.error) {
        console.log(response.data.error);
      } else {
        const commentToAdd = {commentBody: newComment, username: response.data.username}
      setComments([...comments, commentToAdd])
      setNewComment("");
      }{}
      
    })
  }
  return (
    <div >
      <nav>
        <h4>Welcome to the Page of {studentObject.name} !</h4>
        <ul>
          <li>
            <Link to="/">
              <a href="home">Home</a>
            </Link>
          </li>
          {/* <li>
            <a href="login">Login</a>
          </li> */}
          <li>
            {/* <Link to="/admin">
              <a href="admin">Admin</a>
            </Link> */}
          </li>
        </ul>
      </nav>
      <div className="postPage">
        <div className="card">
          <img
            className="card-img-top"
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868__340.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{studentObject.name}</h5>
            <p className="card-text card-description">
              {studentObject.description}
            </p>
            <p>{studentObject.grade}</p>
          </div>
        </div>

        <div className="addCommentContainer">
          <div className="container-right">
            <input
              className="form-control"
              type="text"
              placeholder="Comment..."
              autoComplete="off"
              value={newComment}
              onChange={(event) => {setNewComment(event.target.value)}}
            />
            <button className="btn btn-primary" onClick={addComment}>Add Comment</button>
            <div className="listOfComments">
              <h4>My comments</h4>
              {comments.map((comment, key) => {
                return (
                  <div key={key} className="comment-post">
                    {comment.commentBody}<hr/>
                    {/* <label>Username : {comment.username}</label> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
