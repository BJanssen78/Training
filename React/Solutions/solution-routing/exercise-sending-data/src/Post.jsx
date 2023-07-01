import { Form, redirect, useLoaderData, Link } from "react-router-dom";

export const loader = async ({ params }) => {
  const users = await fetch("http://localhost:3000/users");
  const post = await fetch(`http://localhost:3000/posts/${params.postId}`);
  const comments = await fetch(
    `http://localhost:3000/comments?postId=${params.postId}`
  );

  return {
    users: await users.json(),
    post: await post.json(),
    comments: await comments.json(),
  };
};

export const action = async ({ request, params }) => {
  const formData = Object.fromEntries(await request.formData());
  const body = JSON.stringify({ ...formData, postId: params.postId });
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  });
  return redirect(`/post/${params.postId}`);
};

export const Post = () => {
  const { post, comments, users } = useLoaderData();

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>
        by{" "}
        <Link to={`/user/${post.userId}`}>
          {users.find((user) => user.id === post.userId).name}
        </Link>
      </p>
      <p>{post.body}</p>
      <hr />

      {comments.length > 0 && (
        <div className="comments">
          <h2>Comments:</h2>
          {comments.map((comment) => {
            const commenter = users.find((user) => user.id === comment.userId);
            return (
              <div key={comment.id} className="comment">
                <p>
                  <Link to={`/user/${comment.userId}`}>
                    {commenter.name} commented:
                  </Link>
                </p>
                <p>{comment.comment}</p>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <br />
      <h3>Write a comment:</h3>
      <Form method="post" id="new-post-form">
        <label>
          <span>Comment</span>
          <textarea aria-label="Comment" name="comment" rows="2" />
        </label>
        <label>
          <span>User</span>
          <select name="userId">
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};
