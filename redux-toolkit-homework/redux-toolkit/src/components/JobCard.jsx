import { useDispatch } from "react-redux";
import { addtoItems } from "../store/itemsSlice";

export function makeArray(role, level, languages, tools) {
  const items = [];
  if (role) items.push(role);
  if (level) items.push(level);
  if (languages.length > 0) languages.map((item) => items.push(item));
  if (tools.length > 0) tools.map((item) => items.push(item));
  return items;
}

export default function JobCard({
  id,
  company,
  logo,
  newOne,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  const dispatch = useDispatch();

  const buttonItems = makeArray(role, level, languages, tools);

  return (
    <li
      key={id}
      className="bg-white d-flex justify-content-between flex-wrap container cardStyle align-items-center shadow mb-4 bg-white rounded"
      id={featured ? "featuredChecked" : ""}
    >
      <div className="d-flex align-items-center flex-wrap">
        <img src={logo} alt="logo" className="logo m-4" />
        <div>
          <ul className="d-flex container flex-wrap">
            <li className="fw-bold company mx-1">{company}</li>
            {newOne && <li className="new px-1 fw-bold mx-1">NEW!</li>}
            {featured && (
              <li className="featured px-1 fw-bold mx-1">FEATURED</li>
            )}
          </ul>
          <span className="d-inline-block fw-bold container">{position}</span>
          <ul className="d-flex container justify-content-between text-secondary flex-wrap">
            <li>{postedAt}</li>
            <li>.</li>
            <li>{contract}</li>
            <li>.</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <hr />
      <ul className="d-flex flex-wrap item align-content-lg-around">
        {buttonItems &&
          buttonItems.map((item) => (
            <li className="mx-1 p-1 " key={buttonItems.indexOf(item)}>
              <button
                onClick={() => {
                  dispatch(addtoItems(item));
                }}
              >
                {item}
              </button>
            </li>
          ))}
      </ul>
    </li>
  );
}
