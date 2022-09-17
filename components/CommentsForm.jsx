import React, { useState, useEffect, useRef } from 'react';

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { value: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments Form</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 resize-none focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          className="p-4 px-4 outline-none w-full rounded-lg focus:ring-2 resize-none focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          ref={emailEl}
          className="p-4 px-4 outline-none w-full rounded-lg focus:ring-2 resize-none focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="text"
          placeholder="E-Mail"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" name="storeData" id="storeData" />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save my e-mail and name for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fiels are required.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-[#015dcc] text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-xl font-semibold mt-3 text-green-500">Comment submitted for review.</span>}
      </div>
    </div>
  )
}

export default CommentsForm;