import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import Loading from "../components/layout/Loading";
const Companies = () => {
  const companies = useSelector((state) => state.firestore.ordered.companies);
  useFirestoreConnect({
    collection: `users`,
    where: ["role", "==", "User"],
    storeAs: "companies",
  });
  if (!companies) {
    return <Loading />;
  }
  return (
    <>
      <div>company</div>
      <div>about</div>
      <div>
        {" "}
        {companies.map((company, index) => (
          <tr key={company.index}>
            <td className="px-6 py-4 whitespace-nowrap h-32">
              <div className="flex items-center">
                <div className="text-sm text-left font-medium text-gray-900">
                  {index + 1}
                </div>
              </div>
            </td>
            <Link to={`/company/${company.id}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {company.displayName}
                </div>
              </td>
            </Link>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {company.description}
            </td>
          </tr>
        ))}
      </div>
    </>
  );
};

export default Companies;
