import Link from "next/link";

// Form component which contains a form to create a prompt
const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {/* Header and description */}
      <h1 className="head_text text-left">
        <span className="purple_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and ley your imagination run wild with any AI-Powered platform.
      </p>
      {/* Form component */}
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism">
        {/* Promt field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        {/* Tag field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">Tag {` `}<span className="font-normal">(#product, #webdevelopment, #idea)</span></span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
};

export default Form;