function RenderRouter({ router, children }) {
  const { asQuery, pathname, route, locale } = router;

  return (
    <div
      style={{
        width: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "600px", padding: "5px" }}>
        {children}
        <pre>
          <code>
            {JSON.stringify(
              {
                router,
              },
              null,
              4
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default RenderRouter;
