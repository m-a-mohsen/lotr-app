
import { introduction } from "../../lib/data";
export default function MovieVolumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2> All volumes</h2>
      <ul>
        <li>The Fellowship of the Ring</li>
        <li>the-two-towers</li>
        <li>the-return-of-the-king</li>
      </ul>
    </div>
  );
}
