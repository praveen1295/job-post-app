import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3">
          <div className="w-20 rounded-lg">
            <img src={post.frontmatter.image} alt="" />
          </div>
          <div className="">
            <div className="">Posted on {post.frontmatter.date}</div>
            <div className="">{post.frontmatter.company_name}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.type}</p>
          </div>
        </div>

        <div>{post.frontmatter.location}</div>
      </div>
      <Link href={`/blog/${post.slug}`} className="pl-40">
        <button
          type="button"
          className="inline-block px-6 py-2 my-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Read More
        </button>
      </Link>
      <hr className="" />
    </>
  );
}
