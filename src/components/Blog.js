import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-100 font-sans leading-normal tracking-normal">
        <nav id="header" className=" bg-gray-300 fixed w-full z-10 top-0">
          <div id="progress" className="h-1 z-20 top-0"></div>

          <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
            <div className="pl-4">
              <a
                className="text-gray-900  no-underline hover:no-underline font-extrabold text-xl"
                href="!#"
              >
                Minimal Blog
              </a>
            </div>

            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
                    href="!#"
                  >
                    Active
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                    href="!#"
                  >
                    link
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
                    href="!#"
                  >
                    link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div
            className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            <div className="font-sans">
              <p className=" md:text-sm text-green-500 font-bold">
                &lt;{" "}
                <a
                  href="!#"
                  className=" md:text-sm text-green-500 font-bold no-underline hover:underline"
                >
                  BACK TO BLOG
                </a>
              </p>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                Welcome to Minimal Blog
              </h1>
              <p className="text-sm md: font-normal text-gray-600">
                Published 19 February 2019
              </p>
            </div>

            <p className="py-6">
              👋 Welcome fellow{" "}
              <a
                className="text-green-500 no-underline hover:underline"
                href="https://www.tailwindcss.com"
              >
                Tailwind CSS
              </a>{" "}
              and miminal monochrome blog fan. This starter template provides a
              starting point to create your own minimal monochrome blog using
              Tailwind CSS and vanilla Javascript.
            </p>

            <p className="py-6">
              The basic blog page layout is available and all using the default
              Tailwind CSS classNamees (although there are a few hardcoded style
              tags). If you are going to use this in your project, you will want
              to convert the classNamees into components.
            </p>

            <h1 className="py-2 font-sans">Heading 1</h1>
            <h2 className="py-2 font-sans">Heading 2</h2>
            <h3 className="py-2 font-sans">Heading 3</h3>
            <h4 className="py-2 font-sans">Heading 4</h4>
            <h5 className="py-2 font-sans">Heading 5</h5>
            <h6 className="py-2 font-sans">Heading 6</h6>

            <p className="py-6">
              Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
              purus, in mattis tortor sollicitudin pretium. Phasellus at diam
              posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi
              diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
              condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
              turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
              rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
              molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
              molestie quam fermentum. Donec ac pretium diam. Suspendisse sed
              odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Duis nec nulla eget sem dictum elementum.
            </p>

            <ol>
              <li className="py-3">
                Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi
                sit amet tellus scelerisque tortor semper posuere.
              </li>
              <li className="py-3">
                Morbi varius posuere blandit. Praesent gravida bibendum neque
                eget commodo. Duis auctor ornare mauris, eu accumsan odio
                viverra in. Proin sagittis maximus pharetra. Nullam lorem
                mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                ornare vulputate, pretium nec felis.
              </li>
              <li className="py-3">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
                tristique in risus ac, tristique rutrum velit. Mauris accumsan
                tempor felis vitae gravida. Cras egestas convallis malesuada.
                Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
                suscipit, elementum odio et, consequat tellus.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Example of blockquote - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </blockquote>

            <p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono  p-2 md:p-4"></pre>
          </div>

          <div className=" md:text-sm text-gray-500 px-4 py-6">
            Tags:{" "}
            <a
              href="!#"
              className=" md:text-sm text-green-500 no-underline hover:underline"
            >
              Link
            </a>{" "}
            .{" "}
            <a
              href="!#"
              className=" md:text-sm text-green-500 no-underline hover:underline"
            >
              Link
            </a>
          </div>

          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

          <div className="container px-4">
            <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
              <h2 className="font-bold break-normal text-xl md:text-3xl">
                Subscribe to my Newsletter
              </h2>
              <h3 className="font-bold break-normal text-gray-600 text-sm md:">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="https://google.com">
                  <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white  font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center font-sans px-4 py-12">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <div className="flex-1 px-2">
              <p className=" font-bold  md:text-xl leading-none mb-2">
                Jo Bloggerson
              </p>
              <p className="text-gray-600 text-xs md:">
                Minimal Blog Tailwind CSS template by{" "}
                <a
                  className="text-green-500 no-underline hover:underline"
                  href="https://www.tailwindtoolbox.com"
                >
                  TailwindToolbox.com
                </a>
              </p>
            </div>
            <div className="justify-end">
              <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
          </div>

          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

          <div className="font-sans flex justify-between content-center px-4 pb-12">
            <div className="text-left">
              <span className="text-xs md:text-sm font-normal text-gray-600">
                &lt; Previous Post
              </span>
              <br />
              <p>
                <a
                  href="!#"
                  className="break-normal  md:text-sm text-green-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs md:text-sm font-normal text-gray-600">
                Next Post &gt;
              </span>
              <br />
              <p>
                <a
                  href="!#"
                  className="break-normal  md:text-sm text-green-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-white border-t border-gray-400 shadow">
          <div className="container max-w-4xl mx-auto flex py-8">
            <div className="w-full mx-auto flex flex-wrap">
              <div className="flex w-full md:w-1/2 ">
                <div className="px-8">
                  <h3 className="font-bold text-gray-900">About</h3>
                  <p className="py-4 text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas vel mi ut felis tempus commodo nec id erat.
                    Suspendisse consectetur dapibus velit ut lacinia.
                  </p>
                </div>
              </div>

              <div className="flex w-full md:w-1/2">
                <div className="px-8">
                  <h3 className="font-bold text-gray-900">Social</h3>
                  <ul className="list-reset items-center text-sm pt-3">
                    <li>
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                        href="!#"
                      >
                        Add social link
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                        href="!#"
                      >
                        Add social link
                      </a>
                    </li>
                    <li>
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                        href="!#"
                      >
                        Add social link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
