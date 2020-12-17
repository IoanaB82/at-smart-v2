const RecipeList = (props) => {
  return (
    <>
      <button onClick={props.onClick} value={props.value}>
        <figure>
          <img src={props.src} />
        </figure>
        <h4>{props.title}</h4>
      </button>

      <style jsx>
        {`
          button {
            display: flex;
            justify-content: start;
            align-items: center;
            height: auto;
            max-width: 15rem;
            text-align: left;
            background-color: #fff;
            border: none;
          }

          button:hover {
            cursor: pointer;
            background-color: #f9f5f3;
          }

          button:focus,
          button:active {
            outline: none;
          }

          button:active > figure > img {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }
          button:active > h4 {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
          }

          figure {
            margin-inline-start: 0;
            margin-inline-end: 1rem;
          }
          figure img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
          }

          h4 {
            color: #615551;
            font-size: 0.9rem;
          }
        `}
      </style>
    </>
  );
};

export default RecipeList;
