import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className="bg-base-100 shadow-lg p-10 rounded-md">
                <h2 className="text-2xl">1. what is cors?</h2>
                <p className="text-lg">Ans. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.
                The specification for CORS is included as part of the WHATWG's Fetch Living Standard. This specification describes how CORS is currently implemented in browsers. An earlier specification was published as a W3C Recommendation.</p>
            </div>
            <div className="bg-base-100 shadow-lg p-10 rounded-lg my-5">
                <h2 className="text-2xl">2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className="text-lg">Ans. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div className="bg-base-100 shadow-lg p-10 rounded-lg">
                <h2 className="text-2xl">3. How does the private route work?</h2>
                <p className="text-lg">Ans. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className="bg-base-100 shadow-lg p-10 rounded-lg my-5">
                <h2 className="text-2xl">4. What is Node? How does Node work?</h2>
                <p className="text-lg">Ans. Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;