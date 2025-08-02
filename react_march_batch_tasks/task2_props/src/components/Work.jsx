

function Work() {
  return (
    <section style={{ border: "4px solid cyan", padding: "10px", backgroundColor: "#f0f0d1", color: "black" }}>
      <h2>How does this work?</h2>
      <p>The key to a lot of this is leveraging using tables with a <code>role="presentation"</code>...</p>
      <p>
        <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"&gt;</code><br />
        This helps give a hint to the browser that we are going to use some older stuff.
      </p>
    </section>
  );
}

export default Work;
