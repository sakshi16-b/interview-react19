
import styles from '../components/Netflix.module.css'
import './Netflix.css'
import styled from 'styled-components';



const SeriesCard = ({ currEle }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } = currEle;
 const btn_style = {
  // const Button = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >=8.5 ? "7dcca0":"f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight:"bold"
 }

  //});
//   const Button = styled.button`
//       padding: 1.2rem 2.4rem;
//     border: none;
//     font-size: 1.6rem;
//     background-color:${(props) => props.rating >= 8.5 ? "7dcca0" : "f7dc6f"}
//     font-weight: bold;
//     color: var(--bg-color);
//     cursor: pointer;
// `;




  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (

    <>
    <li key={id} className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>

      <div className="card-content">
        <h2>Name: {name}</h2>

        <h3>
          Rating:
          <span className={`rating ${ratingClass}`}>
            {rating}
          </span>
        </h3>

        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>

        <a href={watch_url} target="_blank" rel="noopener noreferrer">
           <button style={btn_style}>
          Watch Now</button> 
          {/* // <Button>Watch Now</Button> */}
        </a>
      </div>
    </li >
    </>
  );
};

export default SeriesCard;
