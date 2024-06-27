import { Link } from "lucide-react";

export default function Footer() {
  return(
    <>
      <footer className="w-screen">

        <div className="w-screen space-y-57">
          <span className="w-224 h-198 bg-purple-700">
            <img src="#" alt="Logo" />
          </span>
        </div>

        <hr />

        <div className="w-screen">
          <div className="space-x-116">
            <span className="w-224 h-198 bg-purple-700">
              <img src="#" alt="Logo" />
            </span>
            <p>SRIFOTON 2024</p>
          </div>
          <div className="space-x-26">
            <ul>
              <li>
                <Link><i></i></Link>
              </li>
              <li>
                <Link><i></i></Link>
              </li>
              <li>
                <Link><i></i></Link>
              </li>
              <li>
                <Link><i></i></Link>
              </li>
            </ul>
          </div>
        </div>

      </footer>
    </>
  );
}