import React from 'react';

const Blog = () => {
    return (
        <div className='py-10'>
            <div className='flex justify-around items-center'>
            <p className='text-center my-5 font-blog-qst-font-family font-extrabold text-6xl'>Q&A</p>
           
            </div>
            <div id='blog' >
        {/* Question : 1 section */}
        <div className='p-10'>
            <p>
                <span className="font-blog-q st-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 1</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
              
            </p>
            <p className='font-semibold'>
                Access token and Refresh Token:
            </p>
            <p>An access token is like a special key that allows a computer program to access certain things, like a locked room or a website. It is given to the program after a user logs in or gives permission.
            A refresh token is also given to the program at the same time, and it's like a backup key. When the access token gets old and stops working, the program can use the refresh token to get a new access token without bothering the user to log in again. <br />

            So, access tokens and refresh tokens are like keys that let computer programs do certain things without needing to ask the user for permission all the time.</p>
            <br />
            <p className='font-semibold'>How they work: </p>
            <p>
            Access tokens and refresh tokens are like special keys that apps use to do things for you securely. The access token is given when you log in and lets the app access your information. If it expires, the app uses the refresh token to get a new access token without you logging in again. This way, you can use apps easily without always entering your password. The tokens help keep things safe and ensure only authorized apps can act on your behalf.
            </p>
            <br />
            <p className='font-semibold'>
            client-side store :
            </p>
            <p>
            Store access tokens and refresh tokens securely on the client-side, preferably in memory, to ensure their protection and prevent unauthorized access.   
            </p>


        </div>
        <br />
        {/* Question : 2 section */}
        <div className='p-10'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 2 </span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Compare SQL and NoSQL databases? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                SQL databases are suitable for structured data with complex relationships and require strong consistency. NoSQL databases are more flexible, scalable, and handle unstructured or semi-structured data, prioritizing availability and scalability over strict consistency. The choice between SQL and NoSQL depends on the specific requirements and characteristics of the data and the application.
            </p>
        </div>
        <br />
        {/* Question : 3 section */}
        <div className='p-10'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 3</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>What is express js? What is Nest JS? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                Node.js is the underlying technology that allows you to run JavaScript code on the server, while Express.js is a framework that sits on top of Node.js and provides a set of tools and features for building web applications and APIs. Here are some key differences between Node.js and Express.js:
            </p>
            <ol>
                <li>Node.js is a runtime environment for JavaScript, while Express.js is a web application framework built on top of Node.js.</li>
                <li>Node.js provides core features for building server-side applications, while Express.js provides additional features for building web applications and APIs</li>
                <li>Node.js can be used to build a wide range of server-side applications, while Express.js is primarily used for building web applications and APIs.</li>
              
            </ol>
                
        </div>
        <br />
        {/* Question : 4 section */}
        <div className='p-10'>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 4</span>
                <br /> 
                <span className='font-blog-qus-font-family font-extrabold text-xl'>What is a custom hook, and why will you create a custom hook? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer: </span>
                <br />
                A custom hook is a function in React that allows us to reuse stateful logic between components, making it easier to create reusable and composable code. It's a way to extract and reuse common code that manages stateful logic and side effects, by leveraging existing React hooks.Its very important that we use in time of need. 

                <br />

               I will create a custom hook for tasting and share components. Creating a custom hook in React can help me to improve reusability, organization, abstraction, and testing of my code. It allow me to encapsulate complex logic and state management into a reusable function, which can be easily shared across components and projects.
            </p>
        </div>
            </div>

    </div>
    );
};

export default Blog;