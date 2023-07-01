import { Form, useLoaderData, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const newId = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => json.id);
  return redirect(`/post/${newId}`);
};

export const loader = async () => {
  return await fetch("http://localhost:3000/users");
};

export const NewPost = () => {
  const users = useLoaderData();
  return (
    <div className="new-post">
      <h1>New Post</h1>
      <Form method="post" id="new-post-form">
        <label>
          <span>Title</span>
          <input
            placeholder="An exciting title..."
            aria-label="Title"
            type="text"
            name="title"
          />
        </label>
        <label>
          <span>Body</span>
          <textarea name="body" aria-label="Body" rows="6" />
        </label>
        <label>
          <span>User</span>
          <select name="userId">
            {users.map((user) => (
              <option value={user.id}>{user.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
};
