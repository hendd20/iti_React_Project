import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const [view, setView] = useState();
  let { viewId } = useParams();

  const api_user = `https://jsonplaceholder.typicode.com/users/${viewId}`;
  useEffect(() => {
    fetch(api_user)
      .then((res) => res.json())
      .then((user) => {
        setView(user);
      });
  }, []);

  return (
    <div className="container pb-5 ">
      <h2 className="text-center pt-4">User Details</h2>
      <div className="pt-5 d-flex  ">
        <img src={require("../images/avatar6.png")} alt="" className="rounded-3 w-25" />
        <div className="d-block ps-5">
          {view && (
            <p className="fs-3">
              Name is :<span className="fs-5 text-danger"> {view.name}</span>{" "}
            </p>
          )}
          {view && (
            <p className="fs-3">
              {" "}
              Email Address :{" "}
              <span className="fs-5 text-danger">{view.email}</span>
            </p>
          )}
          {view && (
            <p className="fs-3 ">
              {" "}
              Phone Number :{" "}
              <span className="fs-5 text-danger">{view.phone}</span>
            </p>
          )}
          {view && (
            <span className="fs-3">
              Home Address :{" "}
              <span className="fs-5 text-danger">{view.address.suite}</span>
            </span>
          )}
          {view && (
            <span className="fs-5 text-danger"> {view.address.street} </span>
          )}
          {view && (
            <span className="fs-5 text-danger"> {view.address.city}</span>
          )}
          {view && (
            <p className="fs-3 mt-3">
              {" "}
              Website : <span className="fs-5 text-danger">{view.website}</span>
            </p>
          )}
          {view && (
            <p className="fs-3 ">
              {" "}
              Company:{" "}
              <span className="fs-5 text-danger">{view.company.name}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default ViewUser;
