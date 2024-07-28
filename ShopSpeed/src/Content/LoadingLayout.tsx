import React, { ReactElement, useEffect } from "react";

type LoadingTyper = {
  loading: boolean;
  children: ReactElement;
};

const LoadingLayout = ({ loading, children }: LoadingTyper) => {
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">Vui Lòng Chờ Một Lúc ...</p>
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingLayout;
