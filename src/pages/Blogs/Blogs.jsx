import React from "react";

const Blogs = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-purple-500 underline underline-offset-2">
        React Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-6 mt-8">
        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            What is the differences between uncontrolled and controlled
            components.
          </h1>
          <p className="text-md font-medium">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            How to validate React props using PropTypes.
          </h1>
          <p className="text-md font-medium">
            With the help of propType, we can check what kind of props are there
            in a component. For this, propTypes must be installed first, then we
            can check the type with the props name of the component that we want
            to check. Then under the component we can check props type as
            follows.
            <br />
            component.propTypes = <br /> any : The prop can be of any data type.{" "}
            <br />
            bool:The prop should be a Boolean. number : The prop should be a
            number. <br />
            string : The prop should be a string. <br />
            func : The prop should be a function. <br />
            array : The prop should be an array. <br />
            object : The prop should be an object.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            What is the difference between nodejs and express js.
          </h1>
          <p className="text-md font-medium">
            js web application framework that provides a robust set of features
            for web and mobile applications. In other words, NodeJS is the
            package, which provides the JavaScript run-time environment, whereas
            Express is a framework that sits on top of NodeJS and helps us to
            handle requests and responses.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-md font-medium">
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
