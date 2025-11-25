import "./App.css";

function App() {
  return (
    <>
      <marquee scrollamount="5" behavior="alternate">
        🌟🌟 WELCOME TO MY PERSONAL WEBSITE 🌟🌟
      </marquee>

      <div className="container">
        <h1 className="title">
          Hi, I'm <blink>KASANIE_LASKI</blink>
        </h1>

        <img className="construction" src="construction.gif" />

        <table cellSpacing="0" cellPadding="12">
          <tr>
            <td className="nav">
              <a href="#">HOME</a> |<a href="#">ABOUT ME</a> |
              <a href="#">PROJECTS</a> |<a href="#">GUESTBOOK</a> |
              <a href="#">COOL LINKS</a>
            </td>
          </tr>

          <tr>
            <td>
              <h2>About Me</h2>
              <p>
                Hello traveler of the <b>World Wide Web</b>! This website is
                best viewed in <u>Netscape Navigator</u>
                at 800×600 resolution.
              </p>

              <h2>Cool Stuff</h2>
              <ul>
                <li>🔥 Animated GIFs</li>
                <li>💾 Zip downloads</li>
                <li>🛸 Sci-fi fonts</li>
                <li>🎵 Optional MIDI music</li>
              </ul>

              <h2>My Badges</h2>
              <img src="https://i.ibb.co/PMtw3bP/best-viewed.gif" />
              <img src="https://i.ibb.co/5nF6dHt/netscape.gif" />
              <img src="https://i.ibb.co/W6p8m7c/ie.gif" />
            </td>
          </tr>
        </table>

        <center>
          <h3>Visitor Counter:</h3>
          <img src="https://i.ibb.co/Lg7fXj7/counter.gif" />
        </center>
      </div>

      <marquee scrollamount="6">
        <img src="https://i.ibb.co/4Y4tKkw/flame.gif" />
        <img src="https://i.ibb.co/4Y4tKkw/flame.gif" />
        <img src="https://i.ibb.co/4Y4tKkw/flame.gif" />
      </marquee>
    </>
  );
}

export default App;
